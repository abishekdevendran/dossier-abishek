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
	import { Heart } from 'lucide-svelte';
	import { enhance } from '$app/forms';
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
	<Toc />
	<div class="w-full markdown-holder" use:tocCrawler={{ mode: 'generate', prefix: 'toc' }}>
		<SvelteMarkdown
			source={data.post.body}
			renderers={{ image: ImageComponent, code: CodeComponent, heading: HeadingComponent }}
		/>
	</div>
	<form class="fixed left-2 top-1/2 z-50 w-16 h-16" use:enhance method="POST" action="?/addLike">
		<input type="hidden" name="id" value={data.post._id} />
		<button class="w-full h-full rounded-full bg-secondary text-primary">
			<div class="w-full h-full relative flex items-center justify-center">
				<Heart size="55" class="opacity-30 absolute pt-1" />
				{data.post.likes}
			</div>
		</button>
	</form>
</div>
