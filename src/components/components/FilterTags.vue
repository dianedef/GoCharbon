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

// Fonction pour réinitialiser tous les filtres
function resetFilters() {
    selectedMainTags.value = [];
    selectedSubTags.value = [];
    selectedSubSubTags.value = [];
    currentPage.value = 1;
    loadPosts();
}

// Mise à jour des filtres et chargement des posts
function updateFilters() {
    const allSelectedTags = [
        ...selectedMainTags.value,
        ...selectedSubTags.value,
        ...selectedSubSubTags.value
    ];
    
    if (allSelectedTags.length === 0) {
        resetFilters();
        return;
    }
    
    // Éviter les mises à jour multiples
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        loadPosts();
    }, 300);
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
        <div class="tags-filter space-y-4">
            <!-- Tags principaux -->
            <div>
                <ul class="flex flex-wrap gap-4 justify-center">
                    <li v-for="tag in mainTags" :key="tag">
                        <label class="cursor-pointer">
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
                                <Pill :is-selected="selectedMainTags.includes(tag)" :content="tagHierarchy[tag]?.label || tag" :is-filter="true" :class="selectedMainTags.includes(tag) ? 'dark:!bg-active-color' : ''">
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
                <ul class="flex flex-wrap gap-4 justify-center">
                    <li v-for="[subtagKey, subtag] in Object.entries(tagHierarchy[mainTag]?.subtags || {})"
                        :key="subtagKey">
                        <label class="cursor-pointer">
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
                                <Pill :is-selected="selectedSubTags.includes(subtagKey)" :content="subtag.label" :is-filter="true" :class="selectedSubTags.includes(subtagKey) ? 'dark:!bg-active-color' : ''">
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
                        <ul class="flex flex-wrap gap-4 justify-center">
                            <li v-for="[subsubtagKey, subsubtag] in Object.entries(subtag.subtags || {})"
                                :key="subsubtagKey">
                                <label class="cursor-pointer">
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
                                        <Pill :is-selected="selectedSubSubTags.includes(subsubtagKey)" :content="subsubtag.label" :is-filter="true" :class="selectedSubSubTags.includes(subsubtagKey) ? 'dark:!bg-active-color' : ''">
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

        <!-- Grille de posts -->
        <PostGridVue 
            :posts="posts"
            :show-loading-spinner="isLoading"
            :current-page="currentPage"
            :total-pages="totalPages"
        />
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
</style> 