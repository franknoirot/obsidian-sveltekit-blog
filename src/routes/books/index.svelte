<script lang="ts">
    export let books: IBookLink[]
</script>

<h1>Books</h1>
{#each books as book, i (book.slug)}
<a href={`/books/${book.slug}`}>
    <img src={new URL(`../../sveltekit-vault/_assets/${book.coverImg}`, import.meta.url).href} alt={book.title} width="80" />
    { book.title }
</a>
{/each}

<style>
    a {
        display: grid;
        width: fit-content;
        min-width: 480px;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 1rem;
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

    img {
        width: 100px;
    }
</style>