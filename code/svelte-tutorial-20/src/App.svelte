<script>
	let message1 = 'fun';
	let message2 = 'fun';
	let message3 = 'fun';
	let message4 = 'fun';
</script>

<div>
	<p>{message1}</p>

	<button on:click="{() => message1 += 'button'}">
	Button #1
	</button>
</div>

<div>
	<p>{message2}</p>

	<button on:click|once="{() => message2 += 'button'}">
	Button #2
	</button>
</div>

<div>
	<p>{message3}</p>

	<button on:click|preventDefault="{() => message3 += 'button'}">
	Button #3
	</button>
</div>

<div>
	<form>
		<p>{message4}</p>

		<button on:click|preventDefault="{() => message4 += 'button'}">
		Button #4
		</button>
	</form>
	
</div>

<div>
	<form action="/">
		<p>{message4}</p>

		<button on:click="{() => message4 += 'button'}">
		Button #5
		</button>
	</form>
	
</div>

<div>
	<form on:click={()=>message4 += 'form'} action="/">
		<p>{message4}</p>

		<button on:click|preventDefault="{() => message4 += 'button'}">
		Button #6
		</button>
	</form>
	
</div>

<div>
	<form on:click={()=>message4 += 'form'} action="/">
		<p>{message4}</p>

		<button on:click|preventDefault|stopPropagation="{() => message4 += 'button'}">
		Button #7
		</button>
	</form>
	
</div>