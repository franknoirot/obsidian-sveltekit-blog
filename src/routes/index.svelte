<script lang="ts">
    export let books, posts
</script>

<h1>A Demo Site for Obsidian + SvelteKit</h1>
<p>This demo site uses <a href="https://obsidian.md/" target="_blank" ref="nofollower">Obsidian</a> as the source for a <a href="https://kit.svelte.dev" target="_blank" ref="nofollower">SvelteKit</a> site, resulting in a notetaking experience that blends fairly seamlessly into a publishing one!</p>
<section>
    <h2>Books</h2>
    {#each books as book, i (book.slug)}
    <a href={'/books/' + book.slug}>{ book.title }</a>
    {/each}
</section>
<section>
    <h2>Posts</h2>
    {#each posts as post, i (post.slug)}
    <a href={'/posts/' + post.slug}>{ post.title }</a>
    {/each}
</section>

<style>
    section a {
        display: block;
        margin: 1em;
        margin-inline-start: 0;
        font-family: sans-serif;
        border-radius: 8px;
        border: solid 1px;
        padding: 1rem;
        box-sizing: border-box;
        width: fit-content;
        color: inherit;
        text-decoration: none;
    }

    section a:hover,
    section a:focus {
        background: hsla(190deg, 40%, 90%, .3);
        border-color: hsl(190deg, 70%, 70%);
    }
</style>