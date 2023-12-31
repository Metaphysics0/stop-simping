<script lang="ts">
	function displayVideo() {
		alert('u a bitch');
	}
</script>

<button on:click={displayVideo}>Stop <br />Simping</button>

<style>
	button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		outline: none;
		background-color: rgb(226, 45, 45);
		border-radius: 1000px;
		border: none;
		padding: 70px;
		text-transform: uppercase;
		color: white;
		font-weight: bold;
		font-size: 18px;
		cursor: pointer;
		transition: all 0.5s ease;
		height: 100px;
		width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button:hover {
		background-color: rgb(240, 51, 51);
		transition: ease;
	}
</style>
