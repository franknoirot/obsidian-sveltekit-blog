export async function get() {
    const allPosts = import.meta.globEager(`../../sveltekit-vault/posts/*.md`);
    const posts : IPostLink[] = []

    for (const path in allPosts) {
        const pathArr = path.split('/')

        posts.push({
            slug: pathArr[pathArr.length - 1].slice(0, -3),
            title: allPosts[path].metadata.title,
        })
    }


    return {
        body: {
            posts,
        }
    }
}