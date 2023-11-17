<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Copy, Loader2 } from 'lucide-svelte';
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { toast } from 'svelte-sonner';
	export let lang: string = '';
	export let text: string = '';
	const language = () => {
		switch (lang) {
			case 'ts':
			case 'typescript':
			default:
				return 'typescript';
		}
	};
	const languageImportFunc = async () => {
		switch (lang) {
			case 'ts':
			case 'typescript':
			default:
				return (await import('svelte-highlight/languages/typescript')).default;
		}
	};
	const copyToClipboard = () => {
		console.log('copying');
		if (!navigator.clipboard) {
			toast.error('Your browser does not support clipboard API');
			return;
		}
		navigator.clipboard.writeText(text);
		toast.success('Copied to clipboard');
	};
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>
{#await languageImportFunc()}
	<div class="w-full flex items-center justify-center">
		<Loader2 class="animate-spin" />
	</div>
{:then languageImport}
	<div
		class="w-full flex items-center justify-between text-center capitalize rounded-t-xl p-2 bg-primary mt-4"
	>
		<p>
			{language()}
		</p>
		<Button class="cursor-pointer" on:click={copyToClipboard} variant="ghost" size="icon">
			<Copy />
		</Button>
	</div>
	<Highlight language={languageImport} code={text} let:highlighted>
		<LineNumbers {highlighted} hideBorder />
	</Highlight>
{/await}
