import type { IconifyJSON } from '@iconify/types';
import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
  presetUno,
  presetAttributify,
} from 'unocss';
import colors from './src/components/config/colors.json';

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default as IconifyJSON),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default as IconifyJSON),
      },
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      softWhite: colors.softWhite,
    },
    fontFamily: {
      sanchez: ['Sanchez', 'serif'],
    },
  },
  rules: [
    ['dark-text', { color: colors.softWhite }],
    ['dark-bg', { backgroundColor: '#1a1a1a' }],
    ['user-select-none', { 'user-select': 'none' }],
    // Règles pour les ombres brutales
    ['drop-shadow-brutal', { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' }],
    ['drop-shadow-brutal-dark', { filter: `drop-shadow(3px 3px 0 ${colors.softWhite})` }],
    // Règle pour la couleur active
    [/^bg-active-color$/, () => ({ 'background-color': 'var(--active-color)' })],
    // Règles spécifiques pour la prose en mode sombre
    [/^prose-dark$/, () => ({
      '--un-prose-headings': colors.softWhite,
      '--un-prose-body': colors.softWhite,
      '--un-prose-links': colors.softWhite,
      '--un-prose-lists': colors.softWhite,
      '--un-prose-hr': colors.softWhite,
      '--un-prose-captions': colors.softWhite,
      '--un-prose-code': colors.softWhite,
      '--un-prose-borders': colors.softWhite,
      '--un-prose-bg-soft': '#1a1a1a',
    })],
  ],
  shortcuts: {
    'dark-mode': 'dark:text-softWhite dark:bg-black prose-dark',
    'brutal-card': 'border-3 border-black dark:border-softWhite rounded-lg bg-white dark:bg-black text-black dark:text-softWhite drop-shadow-brutal dark:drop-shadow-brutal-dark',
    'brutal-btn': 'border-3 border-black dark:border-softWhite bg-white dark:bg-black text-black dark:text-softWhite drop-shadow-brutal dark:drop-shadow-brutal-dark hover:bg-active-color dark:hover:bg-active-color',
    'brutal-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none bg-white dark:bg-black text-black dark:text-softWhite rounded-full border-1 border-black dark:border-1 dark:border-softWhite px-3 py-1 text-sm transform transition-all duration-300 hover:-translate-y-2 hover:bg-active-color dark:hover:bg-active-color',
    'brutal-filter-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none text-black dark:text-softWhite rounded-full border-1 border-black dark:border-1 dark:border-softWhite px-3 py-1 text-sm transform scale-160 m-1 transition-transform duration-200 ease-out will-change-transform [&:not(.bg-active-color)]:hover:(-translate-x-25px -rotate-5deg) hover:bg-active-color dark:hover:bg-active-color bg-white [&:not(.bg-active-color)]:dark:bg-black [&.bg-active-color]:(-translate-x-25px -translate-y-10px)',
  },
});
