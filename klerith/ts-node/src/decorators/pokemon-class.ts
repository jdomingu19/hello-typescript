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
// function printToConsole(constructor: Function): void {
//   console.log(constructor);
// }

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
//  */
// const printToConsoleConditional = (print: boolean = false): Function => {
//   // return (): void => console.log("Hello, TypeScript!");
//   if (print) {
//     return printToConsole;
//   } else {
//     return (): void => {};
//   }
// };

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
// @printToConsoleConditional(true)
// export class PokemonAPI {
//   public publicAPI: string = "https://pokeapi.co";
//   constructor(public name: string) {}
// }

// --- Class 96: Block a Prototype ---

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
// function printToConsole(constructor: Function): void {
//   console.log(constructor);
// }

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
// const printToConsoleConditional = (print: boolean = false): Function => {
//   return print ? printToConsole : (): void => {};
// };

/**
 * Decorator that seals a class and its prototype,
 * preventing new properties from being added.
 *
 * @param constructor - The constructor function of the class.
 *
 * @remarks
 * - Uses `Object.seal` to block extensions on both the class
 *   and its prototype.
 * - Ensures that the class definition cannot be modified
 *   after being sealed.
 * - Demonstrates how decorators can enforce immutability
 *   at the prototype level.
 */
// const blockPrototype = function (constructor: Function): void {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// };

/**
 * Represents a Pokémon API class decorated with
 * `blockPrototype` and `printToConsoleConditional`.
 *
 * @remarks
 * - `@blockPrototype` seals the class and its prototype,
 *   preventing further modifications.
 * - `@printToConsoleConditional(true)` logs the constructor
 *   when the class is defined.
 * - Contains a public property `publicAPI` pointing to the
 *   PokéAPI base URL.
 * - The constructor accepts a Pokémon name to demonstrate usage.
 */
// @blockPrototype
// @printToConsoleConditional(true)
// export class PokemonAPI {
//   public publicAPI: string = "https://pokeapi.co";
//   constructor(public name: string) {}
// }

// --- Class 97: Method Decorators ---

/**
 * A simple class decorator that prints the constructor
 * function to the console when the class is defined.
 *
 * @remarks
 * - Demonstrates how decorators can intercept and extend
 *   class behavior at definition time.
 * - Useful for debugging or inspecting class metadata.
 */
// function printToConsole(constructor: Function): void {
//   console.log(constructor);
// }

/**
 * Factory decorator that conditionally applies the
 * `printToConsole` decorator based on the provided flag.
 *
 * @param print - A boolean flag to enable or disable printing.
 * @returns A decorator function that either logs the constructor
 *          or does nothing depending on the flag.
 *
 * @remarks
 * - Factory decorators allow passing arguments to control behavior.
 * - In this example, setting `print` to `true` will log the class
 *   constructor when the class is defined.
 */
// const printToConsoleConditional = (print: boolean = false): Function => {
//   return print ? printToConsole : (): void => {};
// };

/**
 * Decorator that seals a class and its prototype,
 * preventing new properties from being added.
 *
 * @param constructor - The constructor function of the class.
 *
 * @remarks
 * - Uses `Object.seal` to block extensions on both the class
 *   and its prototype.
 * - Ensures that the class definition cannot be modified
 *   after being sealed.
 */
// const blockPrototype = function (constructor: Function): void {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// };

/**
 * Method decorator that validates Pokémon IDs before
 * executing the original method.
 *
 * @returns A decorator function that wraps the target method
 *          with validation logic.
 *
 * @remarks
 * - Ensures that the provided Pokémon ID is within the valid range (1–800).
 * - If the ID is invalid, logs an error message and prevents execution.
 * - Demonstrates how method decorators can intercept and extend
 *   method behavior at runtime.
 */
// function CheckValidPokemonID() {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     // console.log({ target, propertyKey, descriptor });
//     // descriptor.value = () => console.log("Hello, Pokemon!");

//     const originalMethod = descriptor.value;

//     descriptor.value = (pokemonId: number) => {
//       if (pokemonId < 1 || pokemonId > 800) {
//         return console.error(
//           "Invalid Pokemon ID. Must be between 1 and 800...",
//         );
//       }
//       return originalMethod(pokemonId);
//     };
//   };
// }

/**
 * Represents a Pokémon API class decorated with
 * `blockPrototype` and `printToConsoleConditional`.
 *
 * @remarks
 * - `@blockPrototype` seals the class and its prototype,
 *   preventing further modifications.
 * - `@printToConsoleConditional(true)` logs the constructor
 *   when the class is defined.
 * - Includes a method `savePokemonToDatabase` decorated with
 *   `@CheckValidPokemonID()` to validate IDs before saving.
 */
// @blockPrototype
// @printToConsoleConditional(true)
// export class PokemonAPI {
//   /** Base URL for the PokeAPI */
//   public publicAPI: string = "https://pokeapi.co";

//   /**
//    * Creates a new instance of `PokemonAPI`.
//    *
//    * @param name - The name of the Pokémon.
//    */
//   constructor(public name: string) {}

//   /**
//    * Saves a Pokémon to the database.
//    *
//    * @param pokemonID - The Pokémon ID to save.
//    * @remarks
//    * - Decorated with `@CheckValidPokemonID()` to ensure
//    *   the ID is valid before execution.
//    * - Logs a success message if the ID passes validation.
//    */
//   @CheckValidPokemonID()
//   public savePokemonToDatabase(pokemonID: number): void {
//     console.log(`Pokemon saved to database successfully! ${pokemonID}`);
//   }
// }

// --- Class 98: Property Decorators ---

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
  return print ? printToConsole : (): void => {};
};

/**
 * Decorator that seals a class and its prototype,
 * preventing new properties from being added.
 *
 * @param constructor - The constructor function of the class.
 *
 * @remarks
 * - Uses `Object.seal` to block extensions on both the class
 *   and its prototype.
 * - Ensures that the class definition cannot be modified
 *   after being sealed.
 */
const blockPrototype = function (constructor: Function): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

/**
 * Method decorator that validates Pokémon IDs before
 * executing the original method.
 *
 * @returns A decorator function that wraps the target method
 *          with validation logic.
 *
 * @remarks
 * - Ensures that the provided Pokémon ID is within the valid range (1–800).
 * - If the ID is invalid, logs an error message and prevents execution.
 * - Demonstrates how method decorators can intercept and extend
 *   method behavior at runtime.
 */
function CheckValidPokemonID() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (pokemonId: number) => {
      if (pokemonId < 1 || pokemonId > 800) {
        return console.error(
          "Invalid Pokemon ID. Must be between 1 and 800...",
        );
      }
      return originalMethod(pokemonId);
    };
  };
}

/**
 * Property decorator that controls whether a property
 * can be reassigned at runtime.
 *
 * @param isWritable - Flag indicating if the property should remain writable.
 *                     Defaults to `true`. If set to `false`, the property
 *                     becomes read-only after its first assignment.
 * @returns A property descriptor with custom getter and setter logic.
 *
 * @remarks
 * - Demonstrates how property decorators can intercept and redefine
 *   property behavior in TypeScript.
 * - Uses `Object.defineProperty` to enforce immutability when `isWritable`
 *   is set to `false`.
 * - The getter logs the current context and returns a placeholder string.
 * - The setter logs the assigned value and applies the writable restriction.
 */
function readonlyProperty(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, "getter");
        return "Some Pokemon";
      },
      set(this, value) {
        console.log(this, value);
        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

/**
 * Represents a Pokémon API class decorated with
 * property, class, and method decorators.
 *
 * @remarks
 * - `@blockPrototype` seals the class and its prototype.
 * - `@printToConsoleConditional(true)` logs the constructor at definition time.
 * - `@readonlyProperty()` enforces immutability on `publicAPI`.
 * - `@CheckValidPokemonID()` validates Pokémon IDs before saving.
 */
@blockPrototype
@printToConsoleConditional(true)
export class PokemonAPI {
  // Even though publicAPI is private you can change its value on runtime
  // private publicAPI: string = "https://pokeapi.co";

  /**
   * Base URL for the PokéAPI.
   *
   * @remarks
   * - Decorated with `@readonlyProperty()` to prevent reassignment.
   * - Attempting to reassign will throw a runtime error.
   */
  @readonlyProperty()
  public publicAPI: string = "https://pokeapi.co";

  /**
   * Creates a new instance of `PokemonAPI`.
   *
   * @param name - The name of the Pokémon.
   */
  constructor(public name: string) {}

  /**
   * Saves a Pokémon to the database.
   *
   * @param pokemonID - The Pokémon ID to save.
   * @remarks
   * - Decorated with `@CheckValidPokemonID()` to ensure
   *   the ID is valid before execution.
   * - Logs a success message if the ID passes validation.
   */
  @CheckValidPokemonID()
  public savePokemonToDatabase(pokemonID: number): void {
    console.log(`Pokemon saved to database successfully! ${pokemonID}`);
  }
}
