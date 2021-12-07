<script>
	import Circle from "./components/Circle.svelte";
	import Square from "./components/Square.svelte";

	const SQUARE = 'square';
	const CIRCLE = 'circle';
	let shape = SQUARE;
	setInterval(() => {
		if (shape === SQUARE){
			shape = CIRCLE;
		}else {
			shape = SQUARE;
		}
	}, 1000);
</script>



<Square />
<br />
<Circle />
<br />
<Circle color="blue"/>
<br />
<Circle color="red"/>
<br />

{#if shape === SQUARE}
	<Square />
{:else if shape === CIRCLE}
	<Circle />
{:else}	
	<div>Nothing to show!</div>
{/if}