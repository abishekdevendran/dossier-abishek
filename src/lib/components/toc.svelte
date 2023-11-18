<script lang="ts">
	import { TableOfContents } from '@skeletonlabs/skeleton';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChevronsLeft, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	let isOpen = false;
</script>

{#if !isOpen}
	<button
		class="fixed right-2 top-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-secondary text-primary z-50"
		on:click={() => (isOpen = true)}
		transition:fly={{ x: 200, duration: 200 }}
	>
		<ChevronsLeft size="24" />
	</button>
{/if}

{#if isOpen}
	<div
		class="toc-shell fixed top-1/3 bg-secondary p-4 rounded-3xl right-4 max-h-full overflow-y-auto overflow-x-clip"
		transition:fly={{ x: 200, duration: 200 }}
	>
		<Button
			class="absolute top-2 right-2 aspect-square w-8 h-8 p-0 rounded-2xl"
			on:click={() => (isOpen = false)}
		>
			<X size="24" />
		</Button>
		<TableOfContents
			indentStyles={{ h2: '', h3: 'ml-4', h4: 'ml-8', h5: 'ml-12', h6: 'ml-16' }}
			active="text-primary"
			activeId="text-primary"
		/>
	</div>
{/if}
