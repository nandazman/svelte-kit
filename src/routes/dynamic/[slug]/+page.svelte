<script>
	import { page } from '$app/stores';

    /** @type {import('./$types').PageData} */
    export let data;

    	// we can access `data.posts` because it's returned from
    // the parent layout `load` function
    $: index = data.posts.findIndex(post => post.slug === $page.params.slug);
    console.log(data.posts.findIndex(post => post.slug === $page.params.slug), "hehe")
    $: next = data.posts[1 - index];
    console.log(data.posts, 1 - index, { index },  $page.params.slug)
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>

{#if next}
	<p>Next post: <a href="/dynamic/{next.slug}">{next.title}</a></p>
{/if}