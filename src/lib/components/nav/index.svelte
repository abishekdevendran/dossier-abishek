<script lang="ts">
	import * as config from '$lib/config';
	import ThemeSwitcher from '$lib/components/nav/theme-dropdown.svelte';
</script>

<header class="w-full border-b flex items-center justify-center">
	<div class="flex items-center justify-end w-full relative p-2 container">
		<div class="text-center absolute inset-0 w-full h-full flex items-center justify-center">
			<a href="/">
				<h3 class="toc-exclude">
					{config.title}
				</h3>
			</a>
		</div>
		<ThemeSwitcher />
	</div>
</header>
