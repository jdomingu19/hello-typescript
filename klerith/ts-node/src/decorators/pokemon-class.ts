// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// decorators/pokemon-class.ts

// --- Class 94: Class Decorators ---

/**
 * A simple class decorator that prints the constructor
 * function to the console when the class is defined.
 *
 * @remarks
 * - Demonstrates how decorators can intercept and extend
 *   class behavior at definition time.
 * - In this example, the decorator logs the constructor
 *   itself, showing how metadata can be accessed.
 * - Decorators must be enabled in `tsconfig.json` with
 *   `"experimentalDecorators": true`.
 */
// function printToConsole(constructor: Function): void {
//   console.log(constructor);
//   // Example: Uncomment to instantiate inside decorator
//   // console.log(new constructor("Marowak"));
// }

/**
 * Represents a Pokémon API class decorated with `printToConsole`.
 *
 * @remarks
 * - The decorator will log the constructor when the class is loaded.
 * - This class contains a public property `publicAPI` pointing to
 *   the PokéAPI base URL.
 * - The constructor accepts a Pokémon name to demonstrate usage.
 */
// @printToConsole
// export class PokemonAPI {
//   public publicAPI: string = "https://pokeapi.co";

//   constructor(public name: string) {}
// }

// --- Class 95: Factory Decorators ---

/**
 * A simple decorator that prints the constructor
 * function to the console when the class is defined.
 *
 * @remarks
 * - This decorator is used as the base implementation
 *   for conditional printing in the factory decorator.
 * - It demonstrates how decorators can intercept class
 *   definitions and log metadata.
 */
function printToConsole(constructor: Function): void {
  console.log(constructor);
}

/**
 * Factory decorator that conditionally applies the
 * `printToConsole` decorator based on the provided flag.
 *
 * @param print - A boolean flag to enable or disable printing.
 * @returns A decorator function that either logs the constructor
 *          or does nothing depending on the flag.
 *
 * @remarks
 * - Demonstrates how to create decorator factories in TypeScript.
 * - Factory decorators allow passing arguments to control behavior.
 * - In this example, setting `print` to `true` will log the class
 *   constructor when the class is defined.
 */
const printToConsoleConditional = (print: boolean = false): Function => {
  // return (): void => console.log("Hello, TypeScript!");
  if (print) {
    return printToConsole;
  } else {
    return (): void => {};
  }
};

/**
 * Represents a Pokémon API class decorated with
 * `printToConsoleConditional`.
 *
 * @remarks
 * - When decorated with `@printToConsoleConditional(true)`,
 *   the constructor will be logged to the console at definition time.
 * - Contains a public property `publicAPI` pointing to the
 *   PokéAPI base URL.
 * - The constructor accepts a Pokémon name to demonstrate usage.
 */
@printToConsoleConditional(true)
export class PokemonAPI {
  public publicAPI: string = "https://pokeapi.co";
  constructor(public name: string) {}
}
