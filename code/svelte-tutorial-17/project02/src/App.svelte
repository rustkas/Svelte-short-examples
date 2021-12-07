<script>
	import {charity1, charity2 } from './store/stores';
	import Charity from './component/Charity.svelte';
	import Total from './component/Total.svelte';

</script>

<Charity number={''}  store={charity1} />
<Charity number={''}  store={charity2} />
<Total />