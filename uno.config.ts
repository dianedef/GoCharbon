import type { IconifyJSON } from '@iconify/types';
import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';
import colors from './src/components/config/colors.json';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default as IconifyJSON),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default as IconifyJSON),
      },
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
    ['brutal-drop-shadow', { filter: 'drop-shadow(3px 3px 0 rgb(0 0 0 / 1))' }],
    ['brutal-drop-shadow-hover', { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' }],
    ['brutal-drop-shadow-dark', { filter: `drop-shadow(3px 3px 0 ${colors.softWhite})` }],
    ['brutal-drop-shadow-dark-hover', { filter: `drop-shadow(5px 5px 0 ${colors.softWhite})` }],
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
    // Règles pour le style brutalist
    ['brutal-shadow', { filter: 'drop-shadow(3px 3px 0 rgb(0 0 0 / 1))' }],
    ['brutal-shadow-hover', { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' }],
    ['brutal-shadow-dark', { filter: `drop-shadow(3px 3px 0 ${colors.softWhite})` }],
    ['brutal-shadow-dark-hover', { filter: `drop-shadow(5px 5px 0 ${colors.softWhite})` }],
    ['brutal-border', { border: '2px solid black' }],
    ['brutal-border-dark', { border: `2px solid ${colors.softWhite}` }],
  ],
  shortcuts: {
    'dark-mode': 'dark:text-softWhite dark:bg-black prose-dark',
    'brutal-card': 'brutal-border brutal-shadow dark:brutal-border-dark dark:brutal-shadow-dark hover:brutal-shadow-hover dark:hover:brutal-shadow-dark-hover transition-all duration-300',
    'brutal-btn': 'brutal-card px-4 py-2 font-sanchez hover:(-translate-x-2px -translate-y-2px)',
    'brutal-pill': 'user-select-none brutal-drop-shadow hover:brutal-drop-shadow-hover light:brutal-drop-shadow dark:brutal-drop-shadow-dark',
  },
});
