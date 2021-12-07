<script>
import { debug } from 'svelte/internal';

import Flower from './Flower.svelte';
const flowerNames = ['dandelion', 'rose', 'chrysanthemum'];
let flower = flowerNames[2];

function changeFlower(){
	
	const flowerName = document.querySelector('input').value;
	if(flowerNames.find(currentFlowerName => flowerName === currentFlowerName)){
		flower = flowerName;
	}
}
</script>

<Flower {flower} />
<input on:keyup="{changeFlower}" type="text" />
<input bind:value={flower} type="text" />