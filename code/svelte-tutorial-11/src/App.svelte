<script>
	import Circle from './Circle.svelte';
	let circleColors = ['red', 'blue', 'green'];

	function addNothing() {
		alert(circleColors);
		circleColors.push('purple');
		alert(circleColors);
	}

	function addPurpleCircle() {
		circleColors = [...circleColors, 'purple'];
		
	}

</script>

<button on:click={addNothing}>Add nothing</button>
<button on:click={addPurpleCircle}>Add circle</button>
{#each circleColors as circleColor}
	<Circle {circleColor} />
{/each}

