<script>
	export let count = 5;
</script>

{count}

{#if count > 0}
	<svelte:self count={count-1}></svelte:self>
{/if}