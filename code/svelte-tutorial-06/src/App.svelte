<script>
	const squareColors = ['blue', 'green', 'purple'];
</script>

<div class="app">
	<!-- I want three squares! -->
	{#each squareColors as color, index}
		<div class="square" style="background-color: {color};">
		{index+1}
		</div>
	{/each}
</div>

<style>
	.app {
		padding: 100px;
	}
	.square {
		height: 200px;
		width: 200px;
		color: white;
		padding: 10%;
		background-color: red;
	}
</style>