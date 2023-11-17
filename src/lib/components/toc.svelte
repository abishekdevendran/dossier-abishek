<script lang="ts">
	import { TableOfContents } from '@skeletonlabs/skeleton';
	import * as Sheet from '$lib/components/ui/sheet';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChevronsLeft } from 'lucide-svelte';
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" class="fixed right-0 top-1/2 w-16 h-16">
			<ChevronsLeft size="24" />
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<TableOfContents indentStyles={{ h2: '', h3: 'ml-4', h4: 'ml-8', h5: 'ml-12', h6: 'ml-16' }} />
	</Sheet.Content>
</Sheet.Root>
