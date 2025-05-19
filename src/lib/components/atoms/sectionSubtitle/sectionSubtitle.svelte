<script>
	export let children;
</script>

<div class="items-center justify-center text-center text-2xl max-[644px]:text-lg">
	<svelte:component this={children} />
</div>
