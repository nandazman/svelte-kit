<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<main>
    <!-- +page.svelte is rendered in this <slot> -->
    <slot />
</main>

<aside>
    <h2>More posts</h2>
    <ul>
        {#each data.posts as post}
            <li>
                <a href="/dynamic/{post.slug}">
                    {post.title}
                </a>
            </li>
        {/each}
    </ul>
</aside>