import { deepStrictEqual } from "node:assert";
import { UniqueCollector } from "./collector.ts";
Deno.test("1", { permissions: "none" }, () => {
	const instance = new UniqueCollector();
	instance.collect(1);
	instance.collect(2);
	instance.collect(1);
	instance.collect(3);
	deepStrictEqual(instance.getSize(), 3);
	deepStrictEqual(Array.from(instance), [1, 2, 3]);
	deepStrictEqual(Array.from(instance.values()), [1, 2, 3]);
});
