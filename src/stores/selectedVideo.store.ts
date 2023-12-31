import { availableVideos } from '$lib/constants';
import { writable } from 'svelte/store';

export const selectedVideoStore = writable<string | null>(null);

/*
 * LocalStorage methods -- START --
 */
const watchedVideosLocalStorageKey = 'watched_videos';
export function addWatchedVideoToLocalStorage(videoId: string): void {
	if (hasAlreadyWatchedVideo(videoId)) return;

	const watchedVideos = JSON.parse(
		localStorage.getItem(watchedVideosLocalStorageKey) ?? '[]'
	) as string[];

	if (watchedVideos.every((videoId) => availableVideos.includes(videoId))) {
		clearWatchedVideosFromLocalStorage();
	}

	localStorage.setItem(watchedVideosLocalStorageKey, JSON.stringify([...watchedVideos, videoId]));
}

function hasAlreadyWatchedVideo(videoId: string): boolean {
	return JSON.parse(localStorage.getItem(watchedVideosLocalStorageKey) ?? '[]').includes(videoId);
}

function clearWatchedVideosFromLocalStorage(): void {
	localStorage.removeItem(watchedVideosLocalStorageKey);
}

/*
 * LocalStorage methods -- END --
 */
