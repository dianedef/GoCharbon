<script setup lang="ts">
import type { PostSummaryCardProps } from "../../utils/types/content";
import Button from "./Button.vue";
import Pill from "./Pill.vue";
import { normalizeTag } from "../../utils/tags";
import { useRandomColor } from "../../composables/useRandomColor";

interface Props extends PostSummaryCardProps {
    post: any;
    index?: number;
}

const props = withDefaults(defineProps<Props>(), {
    index: 0
});

const { data } = props.post;
const isInitialLoad = props.index < 15;

// Utiliser le composable pour générer les couleurs de manière réactive
const { randomColor, randomDarkColor } = useRandomColor({
    content: data.title // Utiliser le titre comme seed pour avoir des couleurs cohérentes
});
</script>

<template>
    <div class="brutal-card" :transition:name="`post-${post.id}`">
        <div class="p-3 md:p-4 rounded-lg dark:bg-black">
            <h3 class="poppins text-base md:text-xl dark:text-softWhite" :transition:name="`title-${post.id}`">
                {{ data.title }}
            </h3>
            <div class="rounded-lg border-3 my-3 md:my-4 h-24 md:h-56 overflow-hidden">
                <img :src="data.imgUrl" 
                     :alt="data.title"
                     width="800"
                     height="400"
                     :loading="isInitialLoad ? 'eager' : 'lazy'"
                     :decoding="isInitialLoad ? 'sync' : 'async'"
                     class="rounded h-full w-full object-cover"
                     :transition:name="`image-${post.id}`" />
            </div>
            <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <p class="poppins dark:text-softWhite md:flex-grow text-sm md:text-base">
                    {{ data.description }}
                </p>

                <div class="flex justify-end md:justify-start md:min-w-[120px]">
                    <div class="rounded-lg">
                        <Button 
                            :href="`/${post.id}`" 
                            :color="randomColor" 
                            :darkColor="randomDarkColor"
                            class="text-sm md:text-base"
                        >
                            <span>Lire &rarr;</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div class="hidden sm:inline-block mt-4">
                <div class="flex justify-between items-center">
                    <ul class="flex flex-wrap gap-4 mt-2">
                        <li v-for="tag in data.tags" :key="tag">
                            <a class="sanchez text-sm md:text-base" :href="`/tag/${encodeURIComponent(normalizeTag(tag))}`">
                                <Pill :content="tag">{{ tag }}</Pill>
                            </a>
                        </li>
                    </ul>
                    <span v-if="data.draft" class="bg-green rounded-full border-2 border-black dark:border-softWhite py-1 px-3 md:px-4 text-xs md:text-sm dark:text-softWhite">
                        Brouillon
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.brutal-card {
    border-radius: 0.5rem;
    background-color: white;
    border: 3px solid var(--border-color);
}

:global(.dark) .brutal-card {
    background-color: black;
}

.brutal-card * {
    border-color: var(--border-color);
}
</style>
