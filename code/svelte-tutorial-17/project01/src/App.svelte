<script>
	import {charity} from './stores';
	import Charity from './Charity.svelte';
	import Total from './Total.svelte';

</script>

<Charity number={''}  store={charity} />
<Total />