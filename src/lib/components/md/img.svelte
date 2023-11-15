<script>
	export let href = '';
	export let title = undefined;
	export let text = '';
	export let className = '';
</script>

<div class={`w-full flex items-center justify-center ${className}`}>
	<img src={href} {title} alt={text} />
</div>
