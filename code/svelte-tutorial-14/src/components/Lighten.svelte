<script>
	import {squareShadeStore} from '../store.js';
	
	function lighten(){
		squareShadeStore.update(value => {
			value -=100;
			if(value < 0){
				return 0;
			}
			return value;
		});
	}
</script>

<button on:click="{lighten}"></button>