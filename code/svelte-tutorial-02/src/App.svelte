<script>
	import Piggy from "./Piggy.svelte";
</script>

<div class="app-container">
	<Piggy />
	<Piggy />
	<Piggy />
</div>

<style>
	.app-container {
		padding: 100px;
	}
	.app-container :global(img) {
		border-radius: 10%;
	}
</style>