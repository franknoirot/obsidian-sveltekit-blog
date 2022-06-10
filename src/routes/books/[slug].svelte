<script context="module" lang="ts">
    interface IBookDetails {
        title: string,
        slug: string,
    }

    /** @type {import('./[slug]').Load} */
    export async function load({ params }) {
        const book = await import(`../../sveltekit-vault/books/${ params.slug }.md`);
        const imgUrl = new URL(`../../sveltekit-vault/_assets/${book.metadata.coverImg}`, import.meta.url).href
        
        console.log({ default: book.default, metadata: book.metadata, imgUrl, params})
        
        return {
            props: {
                metadata: book.metadata,
                coverImg: imgUrl,
                contents: book.default,
            }
        }
    }
</script>

<script lang="ts">
import { camelCaseToTitleCase } from "$lib/utils";


    export let metadata, contents, coverImg
    const filteredMeta = Object.fromEntries(Object.entries(metadata)
        .filter(([key, _]) => !['title', 'coverImg'].some(k => key == k)))
</script>

<header>
    <div class="text">
        <h1>{metadata.title}</h1>
        <div class="meta">
            {#each Object.entries(filteredMeta) as [key, value], i (key)}
            <p><small>{camelCaseToTitleCase(key)}</small> {value}</p>
            {/each}
        </div>
    </div>
    <div class="img-wrapper">
        <img src={coverImg} alt={metadata.title} />
    </div>
</header>
<hr/>
<article>
    <svelte:component this={contents} />
</article>


<style>
    header {
        display: grid;
        grid-template-columns: 2fr minmax(200px, 1fr);
        align-items: center;
        gap: 3rem;
    }

    header, article {
        max-width: 960px;
        margin: 3rem auto 6rem;
    }


    .img-wrapper {
        transform-style: preserve-3d;
        transform: rotate3d(0.3, 0.5, 0.1, 25deg);
        position: relative;
        overflow: visible;
    }

    .img-wrapper::before {
        content: '';
        display: block;
        position: absolute;
        width: 120%;
        height: 1rem;
        background: radial-gradient(hsla(190deg, 10%, 3%, .2) 40%, transparent 70%);
        bottom: -.6rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }

    small {
        font-size: 0.8em;
        display: inline-block;
        padding: .4ch .8ch;
        background: hsla(190deg, 40%, 90%, .5);
        color: hsla(190deg, 10%, 30%);
        margin-inline-end: 1ch;
    }


    img {
        max-width: 100%;
        display: block;
        border: solid hsla(190deg, 25%, 80%);
    }
</style>