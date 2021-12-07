<script>
	export let flower;
	export let flowers = {
		rose: 'https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		dandelion: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/DandelionFlower.jpg',
		chrysanthemum: 'http://clemsonhgic.wpengine.com/wp-content/uploads/2018/02/chrysanthemums-are-popular-for-fall-displays-the.jpeg'
	};

	$: src = flowers[flower];
</script>

<img {src} alt={flower ? flower : 'a flower'} />

<style>
	img{
		height: 150px;
		border-radius: 100%;
	}
</style>