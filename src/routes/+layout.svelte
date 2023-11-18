<script lang="ts">
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/nav/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	import { Toaster } from 'svelte-sonner';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<ModeWatcher />
<Toaster />
<div class="layout font-poppins overflow-x-clip">
	<Nav />
	{#key data.url}
		<main
			class="px-4 container"
			in:fly={{ x: -200, duration: 300, delay: 300 }}
			out:fly={{ x: 200, duration: 300 }}
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
