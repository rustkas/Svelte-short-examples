<script>
	import {setContext} from 'svelte';
	import Card from './Card.svelte';
	
	let count = 0;

	function incrementCount() {
		count++;
	}

	setContext('incrementCount', incrementCount);
</script>

<main>
	<Card {count} />
</main>