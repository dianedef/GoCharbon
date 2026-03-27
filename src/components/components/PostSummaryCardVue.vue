<script setup lang="ts">
import type { Post, PostSummaryCardProps } from "../../utils/types/content";
import Button from "./Button.vue";
import Pill from "./Pill.vue";
import { extractMainTags, getMainTagLabel } from "../../utils/tag-groups";
import { useRandomColor } from "../../composables/useRandomColor";
import { computed } from "vue";
import { computeEngagementBadge } from "../../utils/tool-qualification";
import { getToolDisplayChips } from "../../utils/tool-taxonomy";

interface Props extends PostSummaryCardProps {
    post: Post;
    index?: number;
}

const props = withDefaults(defineProps<Props>(), {
    index: 0
});

const { data } = props.post;
const isInitialLoad = props.index < 2;

// Utiliser le composable pour générer les couleurs de manière réactive
const { randomColor, randomDarkColor } = useRandomColor({
    content: data.title
});

// Vérifier que l'URL de l'image est valide
const imgSrc = computed(() => {
    if (typeof data.imgUrl === 'string') {
        return data.imgUrl;
    }
    return data.imgUrl.src;
});

const mainTags = computed(() => extractMainTags(data.tags).slice(0, 2));
const toolDisplayChips = computed(() => getToolDisplayChips({ id: props.post.id, data }));
const engagementBadge = computed(() => {
    if (data.section !== 'outils') {
        return null;
    }

    return computeEngagementBadge({
        qualificationLocale: data.qualificationLocale,
        ancrageEconomique: data.ancrageEconomique,
        niveauResponsabilite: data.niveauResponsabilite,
        paysSiege: data.paysSiege,
        paysFiscal: data.paysFiscal,
        paysFondateurs: data.paysFondateurs,
        hebergementDonnees: data.hebergementDonnees,
        societeMere: data.societeMere,
        sourcesVerification: data.sourcesVerification,
        notesQualification: data.notesQualification,
        methodologieVersion: data.methodologieVersion,
    });
});
</script>

<template>
    <div class="brutal-card" :transition:name="`post-${post.id}`">
        <div class="p-3 md:p-4 rounded-lg dark:bg-black">
            <h3 class="poppins text-base md:text-xl dark:text-yellow-soft" :transition:name="`title-${post.id}`">
                {{ data.title }}
            </h3>
            <div class="rounded-lg border-3 my-3 md:my-4 h-24 md:h-50 overflow-hidden">
                <img :src="imgSrc" 
                     :alt="data.title"
                     width="800"
                     height="400"
                     :loading="isInitialLoad ? 'eager' : 'lazy'"
                     :decoding="isInitialLoad ? 'sync' : 'async'"
                     class="rounded h-full w-full object-cover"
                     :transition:name="`image-${post.id}`"
                     @error="($event.target as HTMLImageElement).src = '/placeholder.jpg'" />
            </div>
            <div class="flex flex-col gap-2 md:gap-4">
                <p class="poppins dark:text-yellow-soft text-sm md:text-base">
                    {{ data.description }}
                </p>
                <div
                    v-if="engagementBadge"
                    class="engagement-chip"
                    :class="`engagement-chip--${engagementBadge.tone}`"
                >
                    <span class="engagement-chip__eyebrow">Badge GoCharbon</span>
                    <strong>{{ engagementBadge.shortLabel }}</strong>
                    <span class="engagement-chip__score">Score {{ engagementBadge.score }}/{{ engagementBadge.maxScore }}</span>
                </div>

                <div class="flex justify-end">
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
                        <template v-if="data.section === 'outils'">
                            <li v-for="chip in toolDisplayChips" :key="chip.label">
                                <a v-if="chip.href" class="sanchez text-sm md:text-base" :href="chip.href">
                                    <Pill :content="chip.label">{{ chip.label }}</Pill>
                                </a>
                                <Pill v-else :content="chip.label">{{ chip.label }}</Pill>
                            </li>
                        </template>
                        <template v-else>
                            <li v-for="mainTag in mainTags" :key="mainTag">
                                <a class="sanchez text-sm md:text-base" :href="`/tag/${encodeURIComponent(mainTag)}`">
                                    <Pill :content="getMainTagLabel(mainTag)">{{ getMainTagLabel(mainTag) }}</Pill>
                                </a>
                            </li>
                        </template>
                    </ul>
                    <span v-if="data.draft" class="bg-primary rounded-full border-2 border-black dark:border-yellow-soft py-1 px-3 md:px-4 text-xs md:text-sm dark:text-yellow-soft">
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

.engagement-chip {
    display: inline-flex;
    flex-direction: column;
    gap: 0.1rem;
    width: fit-content;
    padding: 0.45rem 0.65rem;
    border: 2px solid var(--border-color);
    box-shadow: 3px 3px 0 var(--border-color);
    font-family: "Poppins", sans-serif;
    color: var(--brand-black);
    background: #fff7df;
}

.engagement-chip--fort {
    background: linear-gradient(135deg, #fff1a8 0%, #f6c700 100%);
}

.engagement-chip--solide {
    background: linear-gradient(135deg, #ffeab5 0%, #ffcf6d 100%);
}

.engagement-chip--modere {
    background: linear-gradient(135deg, #fff3d9 0%, #ffd6a6 100%);
}

.engagement-chip--faible {
    background: linear-gradient(135deg, #fff 0%, #e5ddd0 100%);
}

.engagement-chip--pending {
    background: linear-gradient(135deg, #fff 0%, #d9e1e8 100%);
}

:global(.dark) .engagement-chip {
    color: var(--brand-cream);
    background: #151515;
}

:global(.dark) .engagement-chip--fort {
    background: linear-gradient(135deg, #6f5600 0%, #3d2d00 100%);
}

:global(.dark) .engagement-chip--solide {
    background: linear-gradient(135deg, #5f4420 0%, #2c2116 100%);
}

:global(.dark) .engagement-chip--modere {
    background: linear-gradient(135deg, #45372b 0%, #201913 100%);
}

.engagement-chip__eyebrow {
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.75;
}

.engagement-chip__score {
    font-size: 0.72rem;
    font-weight: 700;
    opacity: 0.8;
}
</style>
