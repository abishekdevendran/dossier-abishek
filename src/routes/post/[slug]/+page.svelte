<script lang="ts">
	export let data;
	import * as config from '$lib/config';
	import SvelteMarkdown from 'svelte-markdown';
	import ImageComponent from '$lib/components/md/img.svelte';
	import CodeComponent from '$lib/components/md/code.svelte';
	import HeadingComponent from '$lib/components/md/heading.svelte';
	import formatDate from '$lib/formatDate.js';
	import calcArticleTime from '$lib/calcArticleTime.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Toc from '$lib/components/toc.svelte';
	import { tocCrawler } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Page {data.post.title} | {config.title}</title>
</svelte:head>
<div class="w-full flex items-center mt-2">
	<a href="/" class="text-primary hover:underline">Home</a>
	<span class="mx-2">/</span>
	<span>{data.post.title}</span>
</div>
<div class="max-w-2xl mx-auto">
	<!-- {JSON.stringify(data.post)} -->
	<div class="w-full flex items-center justify-center py-6 flex-col gap-4" id="title">
		<h1 class="text-center before:content-none">
			{data.post.title}
		</h1>
		<h6 class="w-full flex items-center justify-center gap-4 text-center">
			<span>
				{formatDate(data.post._createdAt)}
			</span>
			●
			<span>
				{calcArticleTime(data.post.body)} min
			</span>
			●
			<span>{data.post.author.name}</span>
		</h6>
		<div class="flex items-center justify-center gap-2">
			{#each data.post.categories as category}
				<Badge variant="outline">{category.title}</Badge>
			{/each}
		</div>
	</div>
	<Toc/>
	<div class="w-full markdown-holder" use:tocCrawler={{ mode: 'generate' }}>
		<SvelteMarkdown
			source={data.post.body}
			renderers={{ image: ImageComponent, code: CodeComponent, heading: HeadingComponent }}
		/>
	</div>
</div>
