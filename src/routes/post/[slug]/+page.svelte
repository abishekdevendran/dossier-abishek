<script lang="ts">
	export let data;
	import * as config from '$lib/config';
	import SvelteMarkdown from 'svelte-markdown';
	import ImageComponent from '$lib/components/md/img.svelte';
	import CodeComponent from '$lib/components/md/code.svelte';
	import formatDate from '$lib/formatDate.js';
</script>

<svelte:head>
	<title>Page {data.post.title} | {config.title}</title>
</svelte:head>
<div class="max-w-2xl mx-auto">
	<!-- {data.post.body} -->
	<div class="w-full flex items-center justify-center py-6 flex-col gap-4" id="title">
		<h1 class="text-center before:content-none">
			{data.post.title}
		</h1>
		<h6>Published: {formatDate(data.post._createdAt)}</h6>
		<h6 class="text-xs">Updated: {formatDate(data.post._updatedAt)}</h6>
	</div>
	<SvelteMarkdown source={data.post.body} renderers={{ image: ImageComponent, code:CodeComponent }} />
</div>
