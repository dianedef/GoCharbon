<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useRandomColor, type ColorProps } from '../../composables/useRandomColor';
import colors from '../config/colors.json';

interface Props extends ColorProps {
    class?: string;
    isSelected?: boolean;
    content?: string;
}

const props = withDefaults(defineProps<Props>(), {
    isSelected: false,
    content: ''
});

const { randomColor, randomDarkColor, isDarkTheme } = useRandomColor({
    ...props,
    content: props.content
});

// Calculer la couleur active en fonction du thème
const activeColor = computed(() => isDarkTheme.value ? randomDarkColor.value : randomColor.value);

// Logs pour le débogage
onMounted(() => {
    console.log(`Pill [${props.content}] mounted:`, {
        isDarkTheme: isDarkTheme.value,
        activeColor: activeColor.value,
        isSelected: props.isSelected
    });
});

watch(() => props.isSelected, (newValue) => {
    console.log(`Pill [${props.content}] selection changed:`, {
        isSelected: newValue,
        activeColor: activeColor.value
    });
});
</script>

<template>
    <span 
        class="brutal-pill bg-white dark:bg-black rounded-full border-2 border-black dark:border-softWhite px-3 py-1 text-sm text-black dark:text-softWhite transition-all duration-200" 
        :class="{ 'is-selected': isSelected }"
        :style="{
            '--active-color': activeColor,
            '--softWhite': colors.softWhite
        } as any"
    >
        <slot></slot>
    </span>
</template>

<style>
/* Variables globales */
:root {
    --softWhite: #FFD35AD9;
}

/* Styles de base pour la pill */
.custom-brutal-pill {
    background-color: var(--background-color, white);
    border-radius: 9999px;
    border: 2px solid currentColor;
    padding: 0.25rem 0.75rem;
    font-size: small;
    color: black;
    transition: all 0.2s ease-out;
    will-change: transform, background-color, color;
    user-select: none;
}

.custom-brutal-pill:hover {
    background-color: var(--color);
}

.custom-brutal-pill.selected {
    background-color: var(--selected-color, var(--color));
}

:global(.dark) .custom-brutal-pill {
    background-color: var(--background-color, black);
    color: var(--softWhite);
}

:global(.dark) .custom-brutal-pill:hover {
    background-color: var(--color);
}

:global(.dark) .custom-brutal-pill.selected {
    background-color: var(--selected-color, var(--color));
}

.brutal-pill:hover,
.brutal-pill.is-selected {
    background-color: var(--active-color) !important;
}

:global(.dark) .brutal-pill:hover,
:global(.dark) .brutal-pill.is-selected {
    background-color: var(--active-color) !important;
}
</style> 