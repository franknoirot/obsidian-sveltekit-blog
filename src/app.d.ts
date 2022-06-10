/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

interface IBookLink {
	title: string,
	slug: string,
	coverImg: string,
}

interface IPostLink {
	title: string,
	slug: string,
}