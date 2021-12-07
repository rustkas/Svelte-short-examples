<script>
	const sickPics = [
		'https://images5.alphacoders.com/324/324310.jpg',
		'https://steemitimages.com/DQmZXEHNMmfLgsvguGQEY8NCAiGCRFQ2LqgHjgdzc21g7Ek/col.jpg',
		'https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-146960667-1-1500x990.jpg'
	];
	let sickPicIndex = 0;
	function nextSickPic() {
		
		if(sickPicIndex + 1 >= sickPics.length){
			sickPicIndex = 0;
		}else {
			sickPicIndex++;
		}
	};
</script>

<img alt='' src={sickPics[sickPicIndex]} />
<br />
<button type='button' on:click="{nextSickPic}">Get sick pic</button>
<br />
<input type="text" on:input="{nextSickPic}" />
<style>
	img {
		width: 25%;
		height: 25%;
	}
</style>