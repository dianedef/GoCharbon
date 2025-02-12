<script setup lang="ts">
import type { PostSummaryCardProps } from "../../utils/types/content";
import Button from "./Button.vue";
import Pill from "./Pill.vue";
import colors from "../config/colors.json";
import { normalizeTag } from "../../utils/tags";

interface Props extends PostSummaryCardProps {
    post: any;
    index?: number;
}

const props = withDefaults(defineProps<Props>(), {
    index: 0
});

const { data } = props.post;
const isInitialLoad = props.index < 15;

const buttonLightColor = colors.light[Math.floor(Math.random() * colors.light.length)];
const buttonDarkColor = colors.dark[Math.floor(Math.random() * colors.dark.length)];
</script>

<template>
    <div class="brutal-card" :transition:name="`post-${post.id}`">
        <div class="p-4 rounded-lg dark:bg-black">
            <h3 class="poppins text-lg md:text-xl dark:text-softWhite" :transition:name="`title-${post.id}`">
                {{ data.title }}
            </h3>
            <div class="rounded-lg border-3 my-4 h-56 overflow-hidden">
                <img :src="data.imgUrl" 
                     :alt="data.title"
                     width="800"
                     height="400"
                     :loading="isInitialLoad ? 'eager' : 'lazy'"
                     :decoding="isInitialLoad ? 'sync' : 'async'"
                     class="rounded h-full w-full object-cover"
                     :transition:name="`image-${post.id}`" />
            </div>
            <p class="poppins dark:text-softWhite">
                {{ data.description }}
            </p>

            <div class="flex justify-end my-4">
                <div class="rounded-lg">
                    <Button :href="`/${post.id}`" :color="buttonLightColor" :darkColor="buttonDarkColor">
                        <span>Lire plus &rarr;</span>
                    </Button>
                </div>
            </div>

            <div class="hidden sm:inline-block">
                <div class="flex justify-between items-center">
                    <ul class="flex flex-wrap gap-4 mt-2">
                        <li v-for="tag in data.tags" :key="tag">
                            <a class="sanchez" :href="`/tag/${encodeURIComponent(normalizeTag(tag))}`">
                                <Pill>{{ tag }}</Pill>
                            </a>
                        </li>
                    </ul>
                    <span v-if="data.draft" class="bg-green rounded-full border-2 border-black dark:border-softWhite py-1 px-4 text-sm dark:text-softWhite">
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
