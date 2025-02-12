<!-- FilterTags.vue -->
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { TagHierarchy } from '../../utils/types/tags';
import type { Post, FilterTagsProps, PostsUpdateEvent } from '../../utils/types/content';
import colors from '../config/colors.json';

const props = defineProps<{
    mainTags: string[];
    tagHierarchy: TagHierarchy;
    initialPosts: Post[];
}>();

const selectedTags = ref<string[]>([]);
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

async function loadPosts() {
    if (debounceTimer) clearTimeout(debounceTimer);
    
    debounceTimer = setTimeout(async () => {
        isLoading.value = true;
        emitPostsUpdate();

        try {
            const params = new URLSearchParams();
            if (selectedTags.value.length > 0) {
                params.set('tags', selectedTags.value.join(','));
            }
            params.set('page', currentPage.value.toString());
            
            const response = await fetch(`/api/filter-posts.json?${params}`);
            const data = await response.json();
            
            posts.value = data.posts;
            totalPages.value = data.totalPages;
            
            // Émettre les mises à jour
            emit('update:posts', posts.value);
            emit('update:selectedTags', selectedTags.value);
            
            // Mise à jour de l'URL sans rechargement
            const url = new URL(window.location.href);
            if (selectedTags.value.length > 0) {
                url.searchParams.set('tags', selectedTags.value.join(','));
            } else {
                url.searchParams.delete('tags');
            }
            window.history.pushState({}, '', url.toString());
            
            // Mettre à jour le contenu Vue
            const vueContent = document.getElementById('vue-content');
            if (vueContent) {
                vueContent.innerHTML = '';
                const postGrid = document.createElement('div');
                postGrid.className = 'posts mt-8';
                postGrid.innerHTML = `
                    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 rounded-lg">
                        ${posts.value.map(post => `
                            <li class="post transition-transform hover:scale-[1.02] duration-200">
                                <div class="p-4 rounded-lg transition-colors dark:bg-black brutal-card">
                                    <h3 class="post-title poppins text-lg md:text-xl">
                                        ${post.data.title}
                                    </h3>
                                    <div class="post-image-container rounded-lg border-3 my-4 h-56 overflow-hidden">
                                        <img
                                            src="${post.data.imgUrl.src}"
                                            alt="${post.data.title}"
                                            class="rounded h-full w-full object-cover"
                                        />
                                    </div>
                                    <p class="post-description poppins">
                                        ${post.data.description}
                                    </p>
                                    <div class="flex justify-end my-4">
                                        <a href="/${post.id}/" class="brutal-btn px-4 py-2">
                                            <span>Lire plus &rarr;</span>
                                        </a>
                                    </div>
                                    <div class="hidden sm:inline-block">
                                        <div class="flex justify-between items-center">
                                            <ul class="flex flex-wrap gap-4 mt-2">
                                                ${post.data.tags.map(tag => `
                                                    <li>
                                                        <a class="sanchez" href="/tag/${tag.toLowerCase()}/">
                                                            <span class="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                                                                ${tag}
                                                            </span>
                                                        </a>
                                                    </li>
                                                `).join('')}
                                            </ul>
                                            ${post.data.draft ? `
                                                <span class="draft-badge bg-green rounded-full border-2 py-1 px-4 text-sm card-shadow">
                                                    Brouillon
                                                </span>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                `;
                vueContent.appendChild(postGrid);
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

function toggleTag(tag: string) {
    const index = selectedTags.value.indexOf(tag);
    if (index === -1) {
        // Si c'est un tag principal unique, rediriger
        if (props.mainTags.includes(tag) && selectedTags.value.length === 0) {
            window.location.href = `/${tag}/1`;
            return;
        }
        selectedTags.value.push(tag);
    } else {
        selectedTags.value.splice(index, 1);
    }
}

watch(selectedTags, () => {
    currentPage.value = 1; // Réinitialiser la page lors du changement de filtres
    loadPosts();
}, { deep: true });

// Initialisation
onMounted(() => {
    // Récupérer les tags de l'URL au chargement
    const urlParams = new URLSearchParams(window.location.search);
    const urlTags = urlParams.get('tags');
    if (urlTags) {
        selectedTags.value = urlTags.split(',');
        loadPosts();
    }
});
</script>

<template>
    <div class="tags-filter space-y-4">
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
                            v-model="selectedTags"
                            @change="toggleTag(tag)"
                        />
                        <a class="sanchez inline-flex items-center pill-container">
                            <span class="brutal-pill">{{ tagHierarchy[tag]?.label || tag }}</span>
                        </a>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
:root {
    --softWhite: #f5f5f5;
}

.brutal-pill {
    filter: drop-shadow(3px 3px 0 rgb(0 0 0 / 1));
    user-select: none;
    background-color: white;
    border-radius: 9999px;
    border: 2px solid black;
    padding: 0.25rem 0.75rem;
    transition: all 0.3s ease-in-out;
    font-size: small;
    transform: scale(1.5);
    margin-bottom: 0.5rem;
}

.brutal-pill:hover {
    filter: drop-shadow(5px 5px 0 rgb(0 0 0 / 1));
    transform: scale(1.5) translateX(-15px);
}

:global(.dark) .brutal-pill {
    background-color: black;
    border-color: var(--softWhite);
    color: var(--softWhite);
    filter: drop-shadow(3px 3px 0 rgb(255 255 255 / 1));
}

:global(.dark) .brutal-pill:hover {
    filter: drop-shadow(5px 5px 0 rgb(255 255 255 / 1));
}

input:checked + a .brutal-pill {
    background-color: black;
    color: white;
}

:global(.dark) input:checked + a .brutal-pill {
    background-color: white;
    color: black;
}

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

.brutal-card {
    border: 2px solid black;
    filter: drop-shadow(3px 3px 0 rgb(0 0 0 / 1));
}

:global(.dark) .brutal-card {
    border-color: var(--softWhite);
    filter: drop-shadow(3px 3px 0 rgb(255 255 255 / 1));
}

.brutal-btn {
    border: 2px solid black;
    background-color: white;
    color: black;
    transition: all 0.3s ease-in-out;
}

.brutal-btn:hover {
    transform: translate(-2px, -2px);
    filter: drop-shadow(5px 5px 0 rgb(0 0 0 / 1));
}

:global(.dark) .brutal-btn {
    border-color: var(--softWhite);
    background-color: black;
    color: var(--softWhite);
}

:global(.dark) .brutal-btn:hover {
    filter: drop-shadow(5px 5px 0 rgb(255 255 255 / 1));
}
</style> 