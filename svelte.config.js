import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: process.env.NODE_ENV === 'production' ? 'app.html' : 'index.html'
		}),
	},
	preprocess: [vitePreprocess()]
};

export default config;
