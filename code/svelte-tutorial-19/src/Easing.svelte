<script>
	import {tweened} from 'svelte/motion';

	export let easing;
	export let name;

	const tweenedStore = tweened(0, {
		easing,
		duration: 2000
	});

	function toggle(){
		$tweenedStore = tweenedStore === 0 ? 250 : 0;
	}
</script>

<h1>{name}</h1>
<p>
	<button on:click={toggle}>Toggle</button>
	{$tweenedStore}
</p>

<div style="height: 100px; width:100px;background-color: blue; transform: translateX({$tweenedStore}px;);">

</div>