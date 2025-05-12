import { uniqueArray } from "./uniquify.ts";
/**
 * Determine whether the array is contain unique elements.
 * @param {readonly unknown[]} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isArrayUnique(item: readonly unknown[]): boolean {
	return (item.length === uniqueArray(item).length);
}
export default isArrayUnique;
