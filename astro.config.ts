import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

import vue from '@astrojs/vue';
import { shouldIncludeInSitemap } from './src/utils/indexation';
import { createParcoursLaunchBuildIntegration } from './src/utils/launch-build';

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT) || 3000
  },
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://gocharbon.com/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: shouldIncludeInSitemap }), UnoCSS({ injectReset: true }), vue(), createParcoursLaunchBuildIntegration()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
