<script setup lang="ts">
import { computed } from 'vue';
import { useRandomColor, type ColorProps } from '../../composables/useRandomColor';

interface Props extends ColorProps {
    href: string;
    target?: string;
}

const props = withDefaults(defineProps<Props>(), {
    target: '_self'
});

const { randomColor, randomDarkColor, isDarkTheme } = useRandomColor(props);

// Calculer la couleur active en fonction du thème
const activeColor = computed(() => isDarkTheme.value ? randomDarkColor.value : randomColor.value);
</script>

<template>
    <a 
        :href="href" 
        :target="target" 
        class="brutal-btn bg-white dark:bg-black transition-all duration-200" 
        :style="{ 
            '--active-color': activeColor
        } as any"
    >
        <slot />
    </a>
</template>

<style>
.brutal-btn:hover {
    background-color: var(--active-color) !important;
}

:global(.dark) .brutal-btn:hover {
    background-color: var(--active-color) !important;
}
</style>