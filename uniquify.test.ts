import { deepStrictEqual } from "node:assert";
import {
	uniqueArray,
	uniqueIterate,
	uniqueIterateSync
} from "./uniquify.ts";
Deno.test("Array 0/0", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([]), []);
});
Deno.test("Array 1/2 1", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([
		{ type: { id: "_ETGENUS" } },
		{ type: { id: "_ETGENUS" } }
	]), [
		{ type: { id: "_ETGENUS" } }
	]);
});
Deno.test("Array 1/2 2", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2, 3])
	]), [
		new Set([1, 2, 3])
	]);
});
Deno.test("Array 2/2", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([
		{
			id: "_1p7ZED73OF98VbT1SzSkjn",
			type: { id: "_ETGENUS" },
			name: "Thuja",
			friendlyId: "g-thuja",
		},
		{
			id: "_567qzghxZmeQ9pw3q09bd3",
			type: { id: "_ETGENUS" },
			name: "Pinus",
			friendlyId: "g-pinus",
		}
	]), [
		{
			id: "_1p7ZED73OF98VbT1SzSkjn",
			type: { id: "_ETGENUS" },
			name: "Thuja",
			friendlyId: "g-thuja",
		},
		{
			id: "_567qzghxZmeQ9pw3q09bd3",
			type: { id: "_ETGENUS" },
			name: "Pinus",
			friendlyId: "g-pinus",
		}
	]);
});
Deno.test("Array 2/3 1", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([
		{ foo: "bar" },
		{ foo: "bar" },
		{ bar: "gaz" }
	]), [
		{ foo: "bar" },
		{ bar: "gaz" }
	]);
});
Deno.test("Array 2/3 2", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([
		new Set([1, 2, 3]),
		new Set([1, 2]),
		new Set([1, 2])
	]), [
		new Set([1, 2, 3]),
		new Set([1, 2])
	]);
});
Deno.test("Array 1/6", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([{}, {}, {}, {}, {}, {}]), [{}]);
});
Deno.test("Array 6/6", { permissions: "none" }, () => {
	deepStrictEqual(uniqueArray([1, 2n, "3", false, true, null]), [1, 2n, "3", false, true, null]);
});
Deno.test("Iterate 5/10", { permissions: "none" }, async () => {
	deepStrictEqual(await Array.fromAsync(uniqueIterate([1, 2, 3], new Set([1, 2, 3, 4]).values(), uniqueIterateSync([1, 4, 5]))), [1, 2, 3, 4, 5]);
});
