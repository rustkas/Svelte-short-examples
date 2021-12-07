<script>
	import {totalGiving} from '../store/stores';
</script>

<p>
	Fees: {$totalGiving.fee}<br />
	Cost to you: {$totalGiving.total}
</p>