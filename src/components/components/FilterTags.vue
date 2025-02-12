<!-- FilterTags.vue -->
<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import type { TagHierarchy, TagCategory } from '../../utils/types/tags';
import type { Post, FilterTagsProps, PostsUpdateEvent } from '../../utils/types/content';
import { useRandomColor } from '../../composables/useRandomColor';
import Pill from './Pill.vue';
import colors from '../config/colors.json';
import PostGridVue from './PostGridVue.vue';

interface Props {
    mainTags: string[];
    tagHierarchy: TagHierarchy;
    initialPosts: Post[];
    selectedTags?: string[];
}

const props = withDefaults(defineProps<Props>(), {
    mainTags: () => [],
    tagHierarchy: () => ({
        // Structure par défaut minimale
        default: {
            label: '',
            subtags: {}
        }
    }),
    initialPosts: () => [],
    selectedTags: () => []
});

// État des tags sélectionnés
const selectedMainTags = ref<string[]>(props.selectedTags || []);
const selectedSubTags = ref<string[]>([]);
const selectedSubSubTags = ref<string[]>([]);
const posts = ref<Post[]>(props.initialPosts);
const isLoading = ref(false);
const currentPage = ref(1);
const totalPages = ref(1);

let debounceTimer: ReturnType<typeof setTimeout>;

// Émettre les événements pour Astro
function emitPostsUpdate() {
    const event = new CustomEvent("posts-updated", {
        detail: {
            posts: posts.value,
            isLoading: isLoading.value,
            currentPage: currentPage.value,
            totalPages: totalPages.value
        }
    }) as PostsUpdateEvent;
    window.dispatchEvent(event);
}

// Émettre les événements pour Vue
const emit = defineEmits<{
    (event: 'update:selectedTags', value: string[]): void;
    (event: 'update:posts', value: Post[]): void;
}>();

// Fonction pour vérifier si les sous-sous-tags doivent être visibles
function isSubSubTagsVisible(mainTag: string, subtagKey: string): boolean {
    return selectedMainTags.value.includes(mainTag) && selectedSubTags.value.includes(subtagKey);
}

// Gestion des tags principaux
function toggleMainTag(tag: string) {
    const index = selectedMainTags.value.indexOf(tag);
    
    // Créer une nouvelle référence pour éviter les mises à jour récursives
    const newSelectedMainTags = [...selectedMainTags.value];
    const mainTagData = props.tagHierarchy[tag];
    
    if (index === -1) {
        newSelectedMainTags.push(tag);
    } else {
        newSelectedMainTags.splice(index, 1);
        // Nettoyer les sous-tags associés
        if (mainTagData?.subtags) {
            const subtagsToRemove = Object.keys(mainTagData.subtags);
            selectedSubTags.value = selectedSubTags.value.filter(
                subtag => !subtagsToRemove.includes(subtag)
            );
            
            // Nettoyer aussi les sous-sous-tags associés
            selectedSubSubTags.value = selectedSubSubTags.value.filter(subsubtag => {
                for (const subtag of subtagsToRemove) {
                    const subtagData = mainTagData?.subtags?.[subtag];
                    if (subtagData?.subtags?.[subsubtag]) {
                        return false;
                    }
                }
                return true;
            });
        }
    }
    
    // Mettre à jour la référence une seule fois
    selectedMainTags.value = newSelectedMainTags;
    
    // Forcer une mise à jour immédiate du DOM
    nextTick(() => {
        updateFilters();
    });
}

// Gestion des sous-tags
function toggleSubTag(mainTag: string, subtagKey: string) {
    const index = selectedSubTags.value.indexOf(subtagKey);
    if (index === -1) {
        selectedSubTags.value = [...selectedSubTags.value, subtagKey];
    } else {
        selectedSubTags.value = selectedSubTags.value.filter(t => t !== subtagKey);
        // Nettoyer les sous-sous-tags associés
        const mainTagData = props.tagHierarchy[mainTag];
        if (mainTagData?.subtags?.[subtagKey]) {
            const subtagData = mainTagData.subtags[subtagKey];
            if (subtagData.subtags) {
                const subsubtagsToRemove = Object.keys(subtagData.subtags);
                selectedSubSubTags.value = selectedSubSubTags.value.filter(
                    subsubtag => !subsubtagsToRemove.includes(subsubtag)
                );
            }
        }
    }
    updateFilters();
}

// Gestion des sous-sous-tags
function toggleSubSubTag(mainTag: string, subtagKey: string, subsubtagKey: string) {
    const index = selectedSubSubTags.value.indexOf(subsubtagKey);
    if (index === -1) {
        selectedSubSubTags.value = [...selectedSubSubTags.value, subsubtagKey];
    } else {
        selectedSubSubTags.value = selectedSubSubTags.value.filter(t => t !== subsubtagKey);
    }
    updateFilters();
}

// Mise à jour des filtres et chargement des posts
function updateFilters() {
    // Annuler le timer précédent s'il existe
    if (debounceTimer) clearTimeout(debounceTimer);
    
    const allSelectedTags = [
        ...selectedMainTags.value,
        ...selectedSubTags.value,
        ...selectedSubSubTags.value
    ];
    
    debounceTimer = setTimeout(() => {
        if (allSelectedTags.length === 0) {
            posts.value = props.initialPosts;
            currentPage.value = 1;
            emit('update:posts', posts.value);
            emit('update:selectedTags', []);
            // Mise à jour de l'URL
            const url = new URL(window.location.href);
            url.searchParams.delete('tags');
            window.history.pushState({}, '', url.toString());
            return;
        }
        loadPosts();
    }, 300);
}

// Fonction pour réinitialiser tous les filtres
function resetFilters() {
    selectedMainTags.value = [];
    selectedSubTags.value = [];
    selectedSubSubTags.value = [];
    currentPage.value = 1;
    posts.value = props.initialPosts;
    emit('update:posts', posts.value);
    emit('update:selectedTags', []);
    // Mise à jour de l'URL
    const url = new URL(window.location.href);
    url.searchParams.delete('tags');
    window.history.pushState({}, '', url.toString());
}

// Modification de la fonction loadPosts
async function loadPosts() {
    if (debounceTimer) clearTimeout(debounceTimer);
    
    debounceTimer = setTimeout(async () => {
        isLoading.value = true;
        emitPostsUpdate();

        try {
            const allSelectedTags = [
                ...selectedMainTags.value,
                ...selectedSubTags.value,
                ...selectedSubSubTags.value
            ];
            
            if (allSelectedTags.length === 0) {
                posts.value = props.initialPosts;
                return;
            }

            let response;
            let data;

            // Si un seul tag principal est sélectionné, utiliser l'API statique
            if (allSelectedTags.length === 1 && selectedMainTags.value.length === 1) {
                const mainTag = selectedMainTags.value[0];
                response = await fetch(`/api/tags/${mainTag}.json`);
                data = await response.json();
                
                if (response.ok) {
                    posts.value = data.posts;
                    totalPages.value = Math.ceil(data.posts.length / 15);
                    console.log('Réponse depuis l\'API statique des tags principaux');
                }
            } 
            // Sinon, utiliser l'API de filtrage
            else {
                const params = new URLSearchParams();
                allSelectedTags.forEach(tag => {
                    params.append('tags', tag.toLowerCase());
                });
                params.set('page', currentPage.value.toString());
                params.set('perPage', '15');

                response = await fetch(`/api/filter-posts.json?${params}`);
                data = await response.json();

                if (response.ok) {
                    posts.value = data.posts;
                    totalPages.value = Math.ceil(data.posts.length / 15);
                    
                    if (data.isStatic) {
                        console.log('Réponse depuis une combinaison pré-générée');
                    } else {
                        console.log('Réponse depuis le filtrage dynamique');
                    }
                }
            }

            if (response.ok) {
                // Émettre les mises à jour
                emit('update:posts', posts.value);
                emit('update:selectedTags', allSelectedTags);

                // Mise à jour de l'URL sans rechargement
                const url = new URL(window.location.href);
                if (allSelectedTags.length > 0) {
                    url.searchParams.set('tags', allSelectedTags.join(','));
                } else {
                    url.searchParams.delete('tags');
                }
                window.history.pushState({}, '', url.toString());
            } else {
                console.error('Erreur lors du chargement des posts:', data?.error);
                posts.value = [];
            }
        } catch (error) {
            console.error('Erreur lors du chargement des posts:', error);
            posts.value = [];
        } finally {
            isLoading.value = false;
            emitPostsUpdate();
        }
    }, 300);
}

// Surveillance des changements de tags
watch([selectedMainTags, selectedSubTags, selectedSubSubTags], () => {
    // Réinitialiser la page uniquement si on n'est pas déjà en train de charger
    if (!isLoading.value) {
        currentPage.value = 1;
        updateFilters();
    }
}, { deep: true });

// Initialisation
onMounted(() => {
    // Récupérer les tags de l'URL au chargement
    const urlParams = new URLSearchParams(window.location.search);
    const urlTags = urlParams.get('tags');
    if (urlTags) {
        const tags = urlTags.split(',');
        // Trier les tags dans les bonnes catégories
        tags.forEach(tag => {
            if (props.mainTags.includes(tag)) {
                selectedMainTags.value.push(tag);
            } else {
                // Vérifier si c'est un sous-tag ou un sous-sous-tag
                for (const mainTag of props.mainTags) {
                    const mainTagData = props.tagHierarchy[mainTag];
                    if (mainTagData?.subtags && Object.keys(mainTagData.subtags).includes(tag)) {
                        selectedSubTags.value.push(tag);
                        return;
                    }
                    // Vérifier les sous-sous-tags
                    if (mainTagData?.subtags) {
                        for (const [subtagKey, subtag] of Object.entries(mainTagData.subtags)) {
                            if (subtag.subtags && Object.keys(subtag.subtags).includes(tag)) {
                                selectedSubSubTags.value.push(tag);
                                return;
                            }
                        }
                    }
                }
            }
        });
        loadPosts();
    }
});
</script>

<template>
    <div>
        <div class="tags-filter space-y-0.5 md:space-y-4 sticky top-[68px] md:top-[72px] z-[9999] py-2 md:py-3">
            <!-- Tags principaux -->
            <div>
                <ul class="flex flex-wrap gap-1 md:gap-4 justify-center">
                    <li v-for="tag in mainTags" :key="tag">
                        <label class="cursor-pointer mobile-pill-wrapper">
                            <input
                                type="checkbox"
                                name="main-tag-filter"
                                :value="tag"
                                class="hidden main-tag-checkbox"
                                :data-category="tag"
                                :checked="selectedMainTags.includes(tag)"
                                @change="toggleMainTag(tag)"
                            />
                            <a class="sanchez inline-flex items-center">
                                <Pill 
                                    :is-selected="selectedMainTags.includes(tag)" 
                                    :content="tagHierarchy[tag]?.label || tag" 
                                    :is-filter="true"
                                    class="mobile-pill"
                                >
                                    {{ tagHierarchy[tag]?.label || tag }}
                                </Pill>
                            </a>
                        </label>
                    </li>
                </ul>
            </div>

            <!-- Sous-tags niveau 2 -->
            <div v-for="mainTag in mainTags" 
                :key="mainTag"
                class="subtags-container"
                :class="{ 'hidden': !selectedMainTags.includes(mainTag) }"
                :data-parent="mainTag">
                <ul class="flex flex-wrap gap-1 md:gap-4 justify-center">
                    <li v-for="[subtagKey, subtag] in Object.entries(tagHierarchy[mainTag]?.subtags || {})"
                        :key="subtagKey">
                        <label class="cursor-pointer mobile-pill-wrapper">
                            <input
                                type="checkbox"
                                name="subtag-filter"
                                :value="subtagKey"
                                :data-parent="mainTag"
                                class="hidden subtag-checkbox"
                                :checked="selectedSubTags.includes(subtagKey)"
                                @change="toggleSubTag(mainTag, subtagKey)"
                            />
                            <a class="sanchez inline-flex items-center">
                                <Pill 
                                    :is-selected="selectedSubTags.includes(subtagKey)" 
                                    :content="subtag.label" 
                                    :is-filter="true"
                                    class="mobile-pill"
                                >
                                    {{ subtag.label }}
                                </Pill>
                            </a>
                        </label>
                    </li>
                </ul>
            </div>

            <!-- Sous-tags niveau 3 -->
            <div v-for="mainTag in mainTags" :key="`level3-${mainTag}`">
                <template v-for="[subtagKey, subtag] in Object.entries(tagHierarchy[mainTag]?.subtags || {})" :key="subtagKey">
                    <div class="subsubtags-container"
                        :class="{ 'hidden': !isSubSubTagsVisible(mainTag, subtagKey) }"
                        :data-parent="`${mainTag}-${subtagKey}`">
                        <ul class="flex flex-wrap gap-1 md:gap-4 justify-center">
                            <li v-for="[subsubtagKey, subsubtag] in Object.entries(subtag.subtags || {})"
                                :key="subsubtagKey">
                                <label class="cursor-pointer mobile-pill-wrapper">
                                    <input
                                        type="checkbox"
                                        name="subsubtag-filter"
                                        :value="subsubtagKey"
                                        :data-parent="`${mainTag}-${subtagKey}`"
                                        class="hidden subsubtag-checkbox"
                                        :checked="selectedSubSubTags.includes(subsubtagKey)"
                                        @change="toggleSubSubTag(mainTag, subtagKey, subsubtagKey)"
                                    />
                                    <a class="sanchez inline-flex items-center">
                                        <Pill 
                                            :is-selected="selectedSubSubTags.includes(subsubtagKey)" 
                                            :content="subsubtag.label" 
                                            :is-filter="true"
                                            class="mobile-pill"
                                        >
                                            {{ subsubtag.label }}
                                        </Pill>
                                    </a>
                                </label>
                            </li>
                        </ul>
                    </div>
                </template>
            </div>
        </div>

        <!-- Grille de posts avec un padding pour compenser le sticky -->
        <div class="pt-2 md:pt-2">
            <PostGridVue 
                :posts="posts"
                :show-loading-spinner="isLoading"
                :current-page="currentPage"
                :total-pages="totalPages"
            />
        </div>
    </div>
</template>

<style scoped>
.tags-filter {
    transition: opacity 0.3s ease-out;
}

.subtags-container,
.subsubtags-container {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.subtags-container:not(.hidden),
.subsubtags-container:not(.hidden) {
    opacity: 1;
    transform: translateY(0);
}

/* Animation pour le chargement */
.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.infinite-hidden {
    display: none;
}

/* Les styles des pills ont été migrés vers UnoCSS dans brutal-filter-pill */

/* Ajustements pour mobile */
@media (max-width: 640px) {
    :deep(.mobile-pill) {
        font-size: 0.5rem !important;
        line-height: 0.625rem !important;
        padding: 0.125rem 0.375rem !important;
        transform: scale(0.5) !important;
        transform-origin: center !important;
    }

    :deep(.mobile-pill-wrapper) {
        transform: scale(0.75);
        transform-origin: center;
    }

    :deep(.brutal-filter-pill),
    :deep(.brutal-pill) {
        font-size: 0.5rem !important;
        padding: 0.125rem 0.375rem !important;
    }
}
</style> 