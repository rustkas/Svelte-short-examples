<script>
	import Button from './Button.svelte';

	export let count;
	export let incrementCount;
</script>

<div class="card">
	{count}
	<Button {incrementCount}/>
</div>


<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 300px;
		width: 200px;
		border: dotted hotpink 3px;
	}
</style>