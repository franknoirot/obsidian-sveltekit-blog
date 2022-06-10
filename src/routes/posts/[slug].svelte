<script context="module" lang="ts">
    interface IPostDetails {
        title: string,
        slug: string,
    }

    /** @type {import('./[slug]').Load} */
    export async function load({ params }) {
        const post = await import(`../../sveltekit-vault/posts/${ params.slug }.md`);
        
        return {
            props: {
                metadata: post.metadata,
                contents: post.default,
            }
        }
    }
</script>

<script lang="ts">
    export let metadata, contents
</script>

<pre>{ JSON.stringify(metadata, null, 2) }</pre>
<svelte:component this={contents} />