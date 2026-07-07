# Unique Array (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[DistBoard @hugoalh](https://hugoalh.github.io/distboard/unique_array_ecmascript)
● [GitHub](https://github.com/hugoalh/unique-array-es)
● [JSR](https://jsr.io/@hugoalh/unique-array)
● [NPM](https://www.npmjs.com/package/@hugoalh/unique-array)

An ECMAScript module to return unique array elements without any duplicated elements by ignore their reference points.

## 🎯 Runtime Targets

Any runtime which support ECMAScript should able to use this; These runtimes are officially supported:

- **[Bun](https://bun.sh/)** >= v1.1.0
- **[Deno](https://deno.land/)** >= v2.1.0
- **[NodeJS](https://nodejs.org/)** >= v20.9.0

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources & Entrypoints

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/unique-array-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/unique-array[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/unique-array[@{Tag}]
  ```

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |
| `./array` | `./array.ts` | Utility for array. |
| `./collector` | `./collector.ts` | Collector. |

> [!NOTE]
> - Different runtimes have vary support for the sources and entrypoints, visit the runtime documentation for more information.
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## 🧩 APIs

- ```ts
  class UniqueCollector<T> {
    collect(item: T): boolean;
    getCount(): bigint;
    getSize(): number;
    has(item: T): boolean;
    values(): SetIterator<T>;
  }
  ```
- ```ts
  function uniqueArray<T>(item: readonly T[]): T[];
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/unique-array)

## ✍️ Examples

- ```ts
  uniqueArray([{ foo: "bar" }, { foo: "bar" }, { bar: "gaz" }]);
  //=> [{ foo: "bar" }, { bar: "gaz" }]
  ```
