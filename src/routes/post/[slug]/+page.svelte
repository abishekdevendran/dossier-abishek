<script lang="ts">
	export let data;
	import * as config from '$lib/config';
	import SvelteMarkdown from 'svelte-markdown';
	import ImageComponent from '$lib/components/md/img.svelte';
</script>

<svelte:head>
	<title>Page {data.post.title} | {config.title}</title>
</svelte:head>
<div class="max-w-2xl mx-auto">
	<SvelteMarkdown source={data.post.body} renderers={{ image: ImageComponent }} />
</div>
