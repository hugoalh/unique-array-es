import { notDeepStrictEqual } from "node:assert";
class Uniquify<T> {
	#storage: Set<T> = new Set<T>();
	for(value: T): boolean {
		if (this.#storage.size > 0) {
			for (const element of this.#storage.values()) {
				try {
					notDeepStrictEqual(element, value);
				} catch {
					return false;
				}
			}
		}
		this.#storage.add(value);
		return true;
	}
}
/**
 * Return unique iterate elements without any duplicated elements, asynchronously.
 * @template {unknown} T
 * @param {...readonly (readonly T[] | AsyncIterable<T> | AsyncIterableIterator<T> | AsyncIterator<T> | Iterable<T> | IterableIterator<T> | Iterator<T>)} items Iterates that need to have unique elements.
 * @returns {AsyncGenerator<T>} An iterate with unique elements.
 */
export async function* uniqueIterate<T>(...items: readonly (readonly T[] | AsyncIterable<T> | AsyncIterableIterator<T> | AsyncIterator<T> | Iterable<T> | IterableIterator<T> | Iterator<T>)[]): AsyncGenerator<T> {
	const uniquify: Uniquify<T> = new Uniquify<T>();
	for (const item of items) {
		//@ts-ignore Mix iterators.
		for await (const itemElement of item) {
			if (uniquify.for(itemElement)) {
				yield itemElement;
			}
		}
	}
}
/**
 * Return unique iterate elements without any duplicated elements, synchronously.
 * @template {unknown} T
 * @param {...readonly (readonly T[] | Iterable<T> | IterableIterator<T> | Iterator<T>)} items Iterates that need to have unique elements.
 * @returns {Generator<T>} An iterate with unique elements.
 */
export function* uniqueIterateSync<T>(...items: readonly (readonly T[] | Iterable<T> | IterableIterator<T> | Iterator<T>)[]): Generator<T> {
	const uniquify: Uniquify<T> = new Uniquify<T>();
	for (const item of items) {
		//@ts-ignore Mix iterators.
		for (const itemElement of item) {
			if (uniquify.for(itemElement)) {
				yield itemElement;
			}
		}
	}
}
/**
 * Return unique array elements without any duplicated elements.
 * @template {unknown} T
 * @param {...readonly (readonly T[])} items Arrays that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 * @example
 * ```ts
 * uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
 * //=> [{ foo: "bar" }, { bar: "gaz" }]
 * ```
 */
export function uniqueArray<T>(...items: readonly (readonly T[])[]): T[] {
	return Array.from(uniqueIterateSync(...items));
}
export default uniqueArray;
