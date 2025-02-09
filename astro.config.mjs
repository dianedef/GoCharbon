// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://webinde.fr',
	output: 'static',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		},
	}),
	legacy: {
		collections: true
	},
	integrations: [
		UnoCSS(),
		sitemap({
			filter: (page) => !page.includes('/404') && !page.includes('/_'),
			changefreq: 'weekly',
			lastmod: new Date(),
		}),
		starlight({
			title: 'Web\'Indé',
			description: 'Ressources et conseils pour les indépendants du web',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr'
				}
			},
			disable404Route: true,
			customCss: [
				'./src/styles/global.css'
			],
			logo: {
				src: './src/assets/astro.jpeg',
				replacesTitle: true,
			},
			titleDelimiter: '|',
			social: {
				linkedin: 'https://www.linkedin.com/in/your-linkedin-profile',
				"x.com" : 'https://x.com/your-twitter-handle',
				facebook: 'https://www.facebook.com/your-facebook-page',
				instagram: 'https://www.instagram.com/your-instagram-handle',
				youtube: 'https://www.youtube.com/your-youtube-channel',
				tiktok: 'https://www.tiktok.com/@your-tiktok-handle',
				reddit: 'https://www.reddit.com/r/your-subreddit',
				telegram: 'https://t.me/your-telegram-channel',
				github: 'https://github.com/your-repo',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.onthe.io/io.js/YyAMWtaLLPUi',
						async: true
					}
				}
			]
		}),
	]
});
