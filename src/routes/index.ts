export async function get() {
    const allBooks = import.meta.globEager(`../sveltekit-vault/books/*.md`);
    const allPosts = import.meta.globEager(`../sveltekit-vault/posts/*.md`);

    const books = preparePaths(allBooks)
    const posts = preparePaths(allPosts)

    return {
        body: {
            books,
            posts,
        }
    }
}

function preparePaths(collectionRecord: Record<string, {[key: string]: any;}>) {
    const collectionArray = []
    for (const path in collectionRecord) {
        const pathArr = path.split('/')

        collectionArray.push({
            slug: pathArr[pathArr.length - 1].slice(0, -3),
            title: collectionRecord[path].metadata.title,
        })
    }

    return collectionArray
}