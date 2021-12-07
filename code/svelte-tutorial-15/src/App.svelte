<script>
	import {counterStore, objectCounterStore}	 from './counterStore';

function increment(){
	$counterStore++;
}

function objectIncrement(){
	$objectCounterStore.value++;
}

</script>

<div>Counter store content <span style="font-weight:bold;">{$counterStore}</span></div>
<div>Object counter store content: [name: <span style="font-weight:bold;">{$objectCounterStore.name}</span>,  value: <span style="font-weight:bold;">{$objectCounterStore.value}</span>]</div>

<button type="button" on:click={increment}>Increment</button>
<button type="button" on:click={objectIncrement}>Object value increment</button>