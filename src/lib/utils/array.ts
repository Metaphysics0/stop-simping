export function selectRandomElementFromArray<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)] as T;
}
