import { UniqueCollector } from "./collector.ts";
export { UniqueCollector } from "./collector.ts";
/**
 * Return unique array elements without any duplicated elements.
 * @template {unknown} T
 * @param {...readonly T[]} items Arrays that need to have unique elements.
 * @returns {T[]} An array with unique elements.
 * @example
 * ```ts
 * uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
 * //=> [{ foo: "bar" }, { bar: "gaz" }]
 * ```
 */
export function uniqueArray<T>(...items: readonly (readonly T[])[]): T[] {
	const collector: UniqueCollector<T> = new UniqueCollector<T>();
	for (const item of items) {
		for (const element of item) {
			collector.collect(element);
		}
	}
	return Array.from(collector.values());
}
export default uniqueArray;
/**
 * Determine whether the array is contain unique elements.
 * @param {readonly unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isArrayUnique(item: readonly unknown[]): boolean {
	return (item.length === uniqueArray(item).length);
}
