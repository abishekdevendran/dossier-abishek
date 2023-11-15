<script lang="ts">
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/nav/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
</script>

<ModeWatcher />
<div class="layout font-poppins">
	<Nav />
	<main>
		<slot />
	</main>
	<Footer />
</div>
