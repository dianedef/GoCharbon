<script setup lang="ts">
import type { PostSummaryCardProps } from "../../utils/types/content";
import Card from "./Card.vue";
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
    <div :transition:name="`post-${post.id}`">
        <Card>
            <div class="p-4 rounded-lg">
                <h3 class="poppins text-lg md:text-xl" :transition:name="`title-${post.id}`">
                    {{ data.title }}
                </h3>
                <div class="rounded-lg border-3 border-black dark:border-softWhite my-4 h-56 overflow-hidden">
                    <img :src="data.imgUrl" 
                         :alt="data.title"
                         width="800"
                         height="400"
                         :loading="isInitialLoad ? 'eager' : 'lazy'"
                         :decoding="isInitialLoad ? 'sync' : 'async'"
                         class="rounded h-full w-full object-cover"
                         :transition:name="`image-${post.id}`" />
                </div>
                <p class="poppins">
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
                        <span v-if="data.draft" class="bg-green rounded-full border-2 border-black dark:border-softWhite py-1 px-4 text-sm">
                            Brouillon
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>
