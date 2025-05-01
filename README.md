# Unique Array (ES)

[**⚖️** MIT](./LICENSE.md)

[![Deno Land: unique_array](https://img.shields.io/badge/dynamic/json?label=unique_array&labelColor=000000&logo=deno&logoColor=ffffff&style=flat&url=https%3A%2F%2Fapiland.deno.dev%2Fv2%2Fmodules%2Funique_array&query=%24.latest_version "Deno Land: unique_array")](https://deno.land/x/unique_array)
[![GitHub: hugoalh/unique-array-es](https://img.shields.io/github/v/release/hugoalh/unique-array-es?label=hugoalh/unique-array-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/unique-array-es")](https://github.com/hugoalh/unique-array-es)
[![JSR: @hugoalh/unique-array](https://img.shields.io/jsr/v/@hugoalh/unique-array?label=@hugoalh/unique-array&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/unique-array")](https://jsr.io/@hugoalh/unique-array)
[![NPM: @hugoalh/unique-array](https://img.shields.io/npm/v/@hugoalh/unique-array?label=@hugoalh/unique-array&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/unique-array")](https://www.npmjs.com/package/@hugoalh/unique-array)

An ECMAScript (JavaScript & TypeScript) module to return unique array elements without any duplicated elements by ignore their reference points.

## 🔰 Begin

### 🎯 Targets

|  | **Remote** | **JSR** | **NPM** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ❓ | ✔️ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | ❌ | ❓ | ✔️ |
| **[Deno](https://deno.land/)** >= v1.42.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | ❌ | ❓ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - Deno Land:**
  ```
  https://deno.land/x/unique_array[@{Tag}]/mod.ts
  ```
- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/unique-array-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/unique-array[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/unique-array[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

*This module does not request any runtime permission.*

## 🧩 APIs

- ```ts
  function uniqueArray<T>(...items: readonly (readonly T[])[]): T[];
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [Deno Land](https://deno.land/x/unique_array)
>   - [JSR](https://jsr.io/@hugoalh/unique-array)

## ✍️ Examples

- ```ts
  uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
  //=> [{ foo: "bar" }, { bar: "gaz" }]
  ```
