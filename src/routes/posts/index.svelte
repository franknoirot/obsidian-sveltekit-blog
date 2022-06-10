<script lang="ts">
    export let posts: IPostLink[]
</script>

<h1>Blog Posts</h1>
{#each posts as post, i (post.slug)}
<a href={`/posts/${post.slug}`}>{ post.title }</a>
{/each}

<style>
    a {
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

    a:hover,
    a:focus {
        background: hsla(190deg, 40%, 90%, .3);
        border-color: hsl(190deg, 70%, 70%);
    }
</style>