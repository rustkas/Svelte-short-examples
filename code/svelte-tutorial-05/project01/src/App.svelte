<script>
	import Card from './Card.svelte';
	
	let count = 0;

	function incrementCount() {
		count++;
	}
</script>

<main>
	<Card {count} {incrementCount}/>
</main>