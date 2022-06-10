<script>
    import { page } from '$app/stores'
</script>

<header>
    <nav>
        <a href="/" class:current={$page.url.pathname == '/'} class='site-badge'>Obsidian + SvelteKit Demo</a>
        <a href="/posts" class:current={$page.url.pathname.includes('/posts')}>Posts</a>
        <span style="user-select: none">|</span>
        <a href="/books" class:current={$page.url.pathname.includes('/books')}>Books</a>
    </nav>
</header>

<style>
    nav {
        display: flex;
        align-items: center;
        gap: 2rem;
        box-sizing: border-box;
        padding: 1rem 2rem;
    }

    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    a.site-badge {
        font-family:Arial, Helvetica, sans-serif;
        font-weight: 600;
        font-size: 1.2rem;
    }

    a.current {
        color: hsl(220deg, 70%, 35%);
        text-decoration: wavy;
    }


</style>