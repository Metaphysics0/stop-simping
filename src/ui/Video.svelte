<script lang="ts">
	import { selectedVideoStore } from '../stores/selectedVideo.store';

	function onVideoEnd() {
		selectedVideoStore.set(null);
	}
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video autoplay on:ended={onVideoEnd}>
	<source src={$selectedVideoStore} />
</video>

<style>
	video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-height: 700px;
	}
</style>
