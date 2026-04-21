import { invokeDenoNodeJSTransformer } from "DNT";
import { parse as parseJSONC } from "STD_JSONC";
const jsrManifest = parseJSONC(await Deno.readTextFile("./jsr.jsonc"));
await invokeDenoNodeJSTransformer({
	copyEntries: [
		"LICENSE.md",
		"README.md"
	],
	//@ts-ignore Lazy type.
	entrypointsScript: jsrManifest.exports,
	generateDeclarationMap: true,
	metadata: {
		//@ts-ignore Lazy type.
		name: jsrManifest.name,
		//@ts-ignore Lazy type.
		version: jsrManifest.version,
		description: "A module to return unique array elements without any duplicated elements by ignore their reference points.",
		keywords: [
			"array",
			"unique"
		],
		homepage: "https://github.com/hugoalh/unique-array-es#readme",
		bugs: {
			url: "https://github.com/hugoalh/unique-array-es/issues"
		},
		license: "MIT",
		author: "hugoalh",
		repository: {
			type: "git",
			url: "git+https://github.com/hugoalh/unique-array-es.git"
		},
		private: false,
		publishConfig: {
			access: "public"
		}
	},
	outputDirectory: "dist/npm-npm",
	outputDirectoryPreEmpty: true
});
