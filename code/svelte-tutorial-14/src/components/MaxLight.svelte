<script>
	import {squareShadeStore} from '../store.js';
	
	function reset(){
		squareShadeStore.set(100);
	}
</script>

<button on:click="{reset}"></button>