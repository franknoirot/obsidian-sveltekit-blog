<script>
    import Header from "../lib/components/Header.svelte";
</script>

<Header />
<main>
    <slot></slot>
</main>

<style>
    main {
        box-sizing: border-box;
        padding: 0 2rem;
    }
</style>