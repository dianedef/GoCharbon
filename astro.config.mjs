import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import UnoCSS from '@unocss/astro';
import { presetIcons, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
    integrations: [
        vue({
            jsx: true,
            appEntrypoint: '/src/_app'
        }),
        UnoCSS({
            injectReset: true,
            mode: 'global',
            presets: [
                presetUno(),
                presetIcons({
                    scale: 1.2,
                    cdn: 'https://esm.sh/'
                }),
                presetAttributify()
            ],
            shortcuts: {
                'brutal-card': 'border-2 border-black dark:border-white filter drop-shadow-brutal',
                'brutal-btn': 'border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white transition-all duration-300',
                'brutal-pill': 'filter drop-shadow-brutal user-select-none bg-white dark:bg-black rounded-full border-2 border-black dark:border-white px-3 py-1 text-sm transition-all duration-300'
            }
        })
    ],
    site: 'https://webinde.fr',
    trailingSlash: 'never',
    build: {
        format: 'directory'
    },
    vite: {
        ssr: {
            noExternal: ['@unocss/astro']
        },
        optimizeDeps: {
            include: ['vue']
        }
    }
}); 