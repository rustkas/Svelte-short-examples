<script>
	import Sveltey from './Sveltey.svelte';
	import Smiley from './Smiley.svelte';

	let smiley = true;
</script>

It is {smiley} that the favicon is a smiley.
{#if smiley}
	<Smiley />
{:else}
	<Sveltey />
{/if}
	
<button on:click={() => smiley = !smiley}>Toogle</button>