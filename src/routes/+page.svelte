<script lang="ts">
	export let data;
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
</svelte:head>
{#if data.posts.length}
	{#each data.posts as post}
		<a href={`/post/${post.slug.current}`}>
			{JSON.stringify(post)}
		</a>
	{/each}
{:else}
	Welcome
{/if}
