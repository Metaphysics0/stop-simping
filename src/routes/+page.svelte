<script>
	import { selectedVideoStore } from '../stores/selectedVideo.store';
	import Button from '../ui/Button.svelte';
	import Video from '../ui/Video.svelte';

	// selectedVideoStore.subscribe(() => {});
</script>

{#if $selectedVideoStore}
	<Video />
{:else}
	<Button />
{/if}
