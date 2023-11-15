<script lang="ts">
	export let data;
</script>
{#if data.posts.length}
	{#each data.posts as post}
		<a href={`/post/${post.slug.current}`}>
			{JSON.stringify(post)}
		</a>
	{/each}
{:else}
	Welcome
{/if}
