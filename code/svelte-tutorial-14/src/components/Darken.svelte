<script>
	import {squareShadeStore} from '../store.js';
	
	function darken(){
		squareShadeStore.update(value => {
			value +=100;
			if(value > 600) {
				return 600;
			}
			return value;
		});
	}
</script>

<button on:click="{darken}"></button>