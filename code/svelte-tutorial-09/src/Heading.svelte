<script>
	export let headingText;
	let miniHeadingText = 'Mini says: ' + headingText;
	$: miniHeadingText2 = 'Mini says: ' + headingText;
</script>

<h1>{headingText}</h1>

<h6>{miniHeadingText}</h6>
<h6>{miniHeadingText2}</h6>