<script>
	export let number;
	export let store;
</script>

<label for="input-donation">Charity {number} donation</label>
<input id="input-donation" type="number" bind:value={$store} />