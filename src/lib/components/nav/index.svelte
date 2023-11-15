<script lang="ts">
	import * as config from '$lib/config';
	import ThemeSwitcher from '$lib/components/nav/theme-dropdown.svelte';
</script>

<header class="w-full border-b flex items-center justify-center">
	<div class="flex items-center justify-end w-full relative p-2 container">
		<a href="/" class="text-center absolute inset-0 w-full h-full flex items-center justify-center">
			<h1 class="text-3xl font-semibold tracking-tight transition-colors p-0 m-0">
				{config.title}
			</h1>
		</a>
		<ThemeSwitcher />
	</div>
</header>
