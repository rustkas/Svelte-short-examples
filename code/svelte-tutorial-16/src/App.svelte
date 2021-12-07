<script>
import {tweenedStore} from './store';

function setToOne(){
	$tweenedStore += 1;
}
</script>

<h1>{$tweenedStore}</h1>
<div>
	<button on:click={setToOne}>Set to one</button>
</div>

<div class="square" style="transform: scale({$tweenedStore});"></div>

<style>
	div.square{
		height: 100px;
		width: 100px;
		background-color: blue;
		
	}
</style>