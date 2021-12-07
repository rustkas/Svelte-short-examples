<script>
	import Heading from './Heading.svelte';
	let headingText = 'I\m a boring heading';
	let italicHeadingText = '<i>' + headingText+'</i>'; 
	
	$: italicHeadingText2 = '<i>' + headingText+'</i>'; 

	function changeHeading() {
		headingText = document.querySelector('input').value;
	}
</script>

{@html italicHeadingText}
<br />
{@html italicHeadingText2}
<Heading {headingText} />
<input type="text" />
<button on:click={changeHeading}>
Change heading
</button>
