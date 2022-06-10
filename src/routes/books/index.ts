export async function get() {
    const allBooks = import.meta.globEager(`/src/sveltekit-vault/books/*.md`)
    const books : IBookLink[] = []

    for (const path in allBooks) {
        const pathArr = path.split('/')

        books.push({
            slug: pathArr[pathArr.length - 1].slice(0, -3),
            title: allBooks[path].metadata.title,
            coverImg: allBooks[path].metadata.coverImg,
        })
    }


    return {
        body: {
            books,
        }
    }
}