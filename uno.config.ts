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
      // 🎨 COULEURS PRIMAIRES (vives, belles - pour CTAs et accents)
      'yellow-primary': '#ffe001',    // Jaune vif principal
      'yellow-gold': '#eec93c',       // Jaune doré
      'yellow-bright': '#ffca00',     // Jaune brillant
      'purple-bright': '#9e4fff',     // Violet vif
      'purple-medium': '#7134c0',     // Violet moyen
      'purple-light': '#caa1ff',      // Violet clair
      
      // 🌈 COULEURS SECONDAIRES (backgrounds, subtils)
      'yellow-soft': '#fff6d2',       // Jaune très doux
      'yellow-pale': '#ffeea6',       // Jaune pâle
      'yellow': '#fed849',            // Jaune standard
      'yellow-dark': '#cea200',       // Jaune foncé
      'purple-pale': '#f7ebff',       // Violet très pâle
      'purple-lighter': '#e9d4ff',    // Violet léger
      'white-soft': '#f9f9ff',        // Blanc cassé
      
      // 🌙 COULEURS DARK MODE
      'purple-darkest': '#45088a',    // Violet très foncé (liens)
      'purple-dark': '#5f13bb',       // Violet foncé
      'purple-darker': '#420d82',     // Violet plus foncé
      'gray-blue': '#3b4458',         // Gris bleuté
      
      // 🎯 ALIASES SÉMANTIQUES
      'primary': '#ffe001',           // CTA principal
      'secondary': '#caa1ff',         // CTA secondaire
      'accent': '#9e4fff',            // Accents
      'link': '#45088a',              // Liens (violet foncé)
      'link-hover': '#caa1ff',        // Liens au survol (violet clair)
    },
    fontFamily: {
      sanchez: ['Sanchez', 'serif'],
    },
  },
  rules: [
    ['dark-text', { color: '#fff6d2' }],
    ['dark-bg', { backgroundColor: '#000000' }],
    ['user-select-none', { 'user-select': 'none' }],
    // Règles pour les ombres brutales
    ['drop-shadow-brutal', { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' }],
    ['drop-shadow-brutal-dark', { filter: 'drop-shadow(3px 3px 0 #fff6d2)' }],
    // Règle pour la couleur active
    [/^bg-active-color$/, () => ({ 'background-color': 'var(--active-color)' })],
    // Règles spécifiques pour la prose en mode sombre
    [/^prose-dark$/, () => ({
      '--un-prose-headings': '#fff6d2',
      '--un-prose-body': '#fff6d2',
      '--un-prose-links': '#caa1ff',
      '--un-prose-links-hover': '#9e4fff',
      '--un-prose-lists': '#fff6d2',
      '--un-prose-hr': '#fff6d2',
      '--un-prose-captions': '#fff6d2',
      '--un-prose-code': '#fff6d2',
      '--un-prose-borders': '#fff6d2',
      '--un-prose-bg-soft': '#000000',
    })],
  ],
  shortcuts: {
    'dark-mode': 'dark:text-yellow-soft dark:bg-black prose-dark',
    'brutal-card': 'border-3 border-black dark:border-yellow-soft rounded-lg bg-white dark:bg-black text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark',
    'brutal-btn': 'border-3 border-black dark:border-yellow-soft bg-white dark:bg-black text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark hover:bg-active-color dark:hover:bg-active-color',
    'brutal-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none bg-white dark:bg-black text-black dark:text-yellow-soft rounded-full border-1 border-black dark:border-1 dark:border-yellow-soft px-3 py-1 text-sm transform transition-all duration-300 hover:-translate-y-2 hover:bg-active-color dark:hover:bg-active-color',
    'brutal-filter-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none text-black dark:text-yellow-soft rounded-full border-2 border-black dark:border-2 dark:border-yellow-soft px-6 py-3 text-xl font-bold transform m-3 transition-all duration-200 ease-out will-change-transform bg-white dark:bg-black',
  },
});
