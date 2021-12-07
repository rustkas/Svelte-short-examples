<script>
	import {getContext} from 'svelte';
	let incrementCount = getContext('incrementCount');
</script>

<button class="button" on:click="{incrementCount}">increment count</button>

<style></style>