<script>
	export let i = 3;
</script>

<div style="height: {i*50}px; width: {i*50}px;">
{#if i >0}
	<svelte:self i={i-1}></svelte:self>
{/if}
</div>

<style>
	div {
		height: 100px;
		width: 100px;
		border: solid black;
	}
</style>