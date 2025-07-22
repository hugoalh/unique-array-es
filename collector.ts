import { notDeepStrictEqual } from "node:assert";
/**
 * Collect unique elements into the collector.
 */
export class UniqueCollector<T> {
	get [Symbol.toStringTag](): string {
		return "UniqueCollector";
	}
	#bin: Set<T> = new Set<T>();
	#count: bigint = 0n;
	[Symbol.iterator](): SetIterator<T> {
		return this.#bin[Symbol.iterator]();
	}
	/**
	 * Collect the element into the collector.
	 * @param {T} o Element that need to collect.
	 * @returns {boolean} Whether the element is collected (i.e.: element is unique).
	 */
	collect(o: T): boolean {
		this.#count += 1n;
		const isExist: boolean = this.has(o);
		if (!isExist) {
			this.#bin.add(o);
		}
		return !isExist;
	}
	/**
	 * Get the number of collects in the collector.
	 * @returns {bigint}
	 */
	getCount(): bigint {
		return this.#count;
	}
	/**
	 * Get the number of unique elements in the collector.
	 * @returns {number}
	 */
	getSize(): number {
		return this.#bin.size;
	}
	/**
	 * Check whether the collector has the element.
	 * @param {T} o Element that need to check.
	 * @returns {boolean} Determine result.
	 */
	has(o: T): boolean {
		for (const value of this.values()) {
			if (value === o) {
				return true;
			}
			try {
				notDeepStrictEqual(value, o);
			} catch {
				return true;
			}
		}
		return false;
	}
	/**
	 * Iterate the elements in the collector.
	 * @returns {SetIterator<T>}
	 */
	values(): SetIterator<T> {
		return this.#bin.values();
	}
}
export default UniqueCollector;
