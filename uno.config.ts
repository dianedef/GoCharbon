import type { IconifyJSON } from '@iconify/types';
import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
  presetUno,
  presetAttributify,
} from 'unocss';

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
      // 🎨 COULEURS PRIMAIRES (mine + sécurité)
      'yellow-primary': '#f6c700',    // Jaune sécurité
      'yellow-gold': '#b87333',       // Cuivre / rouille
      'yellow-bright': '#e2572d',     // Orange braise
      'purple-bright': '#e2572d',     // Accent (alias)
      'purple-medium': '#3e5661',     // Bleu acier
      'purple-light': '#e8e0d4',      // Crème chaud

      // 🌈 COULEURS SECONDAIRES (backgrounds, subtils)
      'yellow-soft': '#f2eee6',       // Crème poussière
      'yellow-pale': '#e8e0d4',       // Crème chaud
      'yellow': '#d9d3c7',            // Poussière beige
      'yellow-dark': '#1c1c1c',       // Fond sombre
      'purple-pale': '#f2eee6',       // Crème poussière (alias)
      'purple-lighter': '#d9d3c7',    // Poussière beige (alias)
      'white-soft': '#f2eee6',        // Fond clair

      // 🌙 COULEURS DARK MODE
      'purple-darkest': '#3e5661',    // Bleu acier (liens)
      'purple-dark': '#2f2f2f',       // Surface sombre
      'purple-darker': '#121212',     // Fond principal
      'gray-dark': '#4c4c4c',         // Gris charbon
      'gray-blue': '#3e5661',         // Bleu acier

      // 🎯 ALIASES SÉMANTIQUES
      'primary': '#f6c700',           // CTA principal
      'secondary': '#e2572d',         // CTA secondaire
      'accent': '#b87333',            // Accent cuivre
      'link': '#3e5661',              // Liens
      'link-hover': '#5a737f',        // Liens au survol
    },
    fontFamily: {
      sanchez: ['Sanchez', 'serif'],
    },
  },
  rules: [
    ['dark-text', { color: '#f2eee6' }],
    ['dark-bg', { backgroundColor: '#0b0b0b' }],
    ['user-select-none', { 'user-select': 'none' }],
    // Règles pour les ombres brutales
    ['drop-shadow-brutal', { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' }],
    ['drop-shadow-brutal-dark', { filter: 'drop-shadow(3px 3px 0 #f2eee6)' }],
    // Règle pour la couleur active
    [/^bg-active-color$/, () => ({ 'background-color': 'var(--active-color)' })],
    // Règles spécifiques pour la prose en mode sombre
    [/^prose-dark$/, () => ({
      '--un-prose-headings': '#f2eee6',
      '--un-prose-body': '#f2eee6',
      '--un-prose-links': '#5a737f',
      '--un-prose-links-hover': '#f6c700',
      '--un-prose-lists': '#f2eee6',
      '--un-prose-hr': '#f2eee6',
      '--un-prose-captions': '#f2eee6',
      '--un-prose-code': '#f2eee6',
      '--un-prose-borders': '#f2eee6',
      '--un-prose-bg-soft': '#0b0b0b',
    })],
  ],
  shortcuts: {
    'dark-mode': 'dark:text-yellow-soft dark:bg-purple-darker prose-dark',
    'brutal-card': 'border-3 border-black dark:border-yellow-soft rounded-lg bg-white dark:bg-purple-dark text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark',
    'brutal-btn': 'border-3 border-black dark:border-yellow-soft bg-white dark:bg-purple-dark text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark hover:bg-active-color dark:hover:bg-active-color',
    'brutal-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none bg-white dark:bg-purple-dark text-black dark:text-yellow-soft rounded-full border-1 border-black dark:border-1 dark:border-yellow-soft px-3 py-1 text-sm transform transition-all duration-300 hover:-translate-y-2 hover:bg-active-color dark:hover:bg-active-color',
    'brutal-filter-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none text-black dark:text-yellow-soft rounded-full border-2 border-black dark:border-2 dark:border-yellow-soft px-6 py-3 text-xl font-bold transform m-3 transition-all duration-200 ease-out will-change-transform bg-white dark:bg-purple-dark',
  },
});
