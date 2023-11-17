<script lang="ts">
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/nav/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	import { Toaster } from 'svelte-sonner';
</script>

<ModeWatcher />
<Toaster />
<div class="layout font-poppins">
	<Nav />
	<main class="px-4 container">
		<slot />
	</main>
	<Footer />
</div>
