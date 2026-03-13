# Basic TypeScript

## Learned Commands

**Install TypeScript globally** – Installs the TypeScript compiler (`tsc`) as a global dependency, making it available from any project or directory.

```bash
npm install -g typescript
```

**Compile a TypeScript file** – Transpiles a `.ts` file into plain JavaScript (`.js`) that can run in browsers or Node.js.

```bash
tsc app.ts
```

**Initialize a TypeScript project** – Creates a `tsconfig.json` file with default compiler options, enabling project-wide configuration and consistent builds.

```bash
tsc --init
```

**Compile all TypeScript files in the project** – Transpiles every `.ts` file defined in the project into `.js` files at once, instead of compiling them individually (e.g., `tsc app.ts`).

```bash
tsc
```

**Enable watch mode for automatic recompilation** – Continuously monitors `.ts` files for changes and recompiles them into `.js` automatically whenever modifications are detected.

```bash
tsc --watch
```

```bash
tsc -w
```

> Made with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
