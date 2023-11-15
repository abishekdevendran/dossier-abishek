<script lang="ts">
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/nav/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	import * as config from '$lib/config';
</script>

<ModeWatcher />

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
</svelte:head>
<div class="layout font-poppins">
	<Nav />
	<main class="px-4">
		<slot />
	</main>
	<Footer />
</div>
