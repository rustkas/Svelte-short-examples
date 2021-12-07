<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
</svelte:head>

<script>
	import {squareShadeStore} from './store.js';
	import Darken from './components/Darken.svelte';
	import Lighten from './components/Lighten.svelte';	
	import MaxLight from './components/MaxLight.svelte';	

	let shade = 500;

	squareShadeStore.subscribe(value => {
		shade = value;
	});

	setTimeout(() => {
		squareShadeStore.set(100);
	}, 1000);
	setTimeout(() => {
		squareShadeStore.set(200);
	}, 2000);
	setTimeout(() => {
		squareShadeStore.set(300);
	}, 3000);
	setTimeout(() => {
		squareShadeStore.set(400);
	}, 4000);
	setTimeout(() => {
		squareShadeStore.set(500);
	}, 5000);
	setTimeout(() => {
		squareShadeStore.set(600);
	}, 6000);
	

</script>

<div class="h-16 w-16 bg-purple-{shade}"></div>
<hr />
<div class="h-16 w-16 bg-orange-{shade}"></div>
<Darken />
<Lighten />
<MaxLight />

<hr />
<div class="h-16 w-16 bg-purple-600"></div>
<hr />
<div class="h-16 w-16 bg-orange-700"></div>