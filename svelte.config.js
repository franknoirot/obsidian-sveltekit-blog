import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";
import { fdir } from 'fdir';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	paths: {
	},

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', ".svelte.md", ".md", ".svx"],

	preprocess: [
		preprocess(),
		mdsvex({
			"extensions": [".svelte.md", ".md", ".svx"],
		  
			"smartypants": {
			  "dashes": "oldschool"
			},
		  
			"remarkPlugins": [],
			"rehypePlugins": []
		}),
		{
			markup: ({ content, filename }) => {
				if (![".svelte.md", ".md", ".svx"].some(extension => filename.includes(extension))) return { code: content }

				const obsidianLinkRegex = /\[\[(.+?(\|.+?)?)\]\]([\W])/g
				const transformedContent = content.replace(obsidianLinkRegex, (_, p1, p2, p3) => {
					const slug = p1.includes("|") ? p1.slice(0, p1.indexOf("|")) : p1
					const filePathArr = new fdir().glob(`./**/${slug}.md`).withRelativePaths().crawl('./src/sveltekit-vault').sync();
					const href = `/` + (filePathArr.length === 1) ? filePathArr[0].slice(0, -3) : slug 

					const linkText = (p2) ? p2.slice(1) : p1

					const linkHtml = `<a href="/${ href }">${ linkText }</a>` + p3
					return linkHtml
				})

				return {
					code: transformedContent,
				}
			}
		}
	],

	kit: {
		adapter: adapter(),
		vite: defineConfig({
			plugins: [
				viteStaticCopy({
					targets: [
						{ src: './src/sveltekit-vault/_assets/*', dest: './static/assets/' },
					]
				})
			],
			// assetsInclude: ['./src/sveltekit-vault/_assets/*'],
		})
	}
};

export default config;
