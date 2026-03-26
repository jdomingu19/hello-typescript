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
function printToConsole(constructor: Function): void {
  console.log(constructor);
  // Example: Uncomment to instantiate inside decorator
  // console.log(new constructor("Marowak"));
}

/**
 * Represents a Pokémon API class decorated with `printToConsole`.
 *
 * @remarks
 * - The decorator will log the constructor when the class is loaded.
 * - This class contains a public property `publicAPI` pointing to
 *   the PokéAPI base URL.
 * - The constructor accepts a Pokémon name to demonstrate usage.
 */
@printToConsole
export class PokemonAPI {
  public publicAPI: string = "https://pokeapi.co";

  constructor(public name: string) {}
}
