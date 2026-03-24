// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/generics/generics.ts

// --- Class 84: Generics Introduction ---

/**
 * Prints any argument to the console.
 * @param argument - The value to print (any type).
 * @remarks Demonstrates lack of type safety when using `any`.
 */
export const printObject = (argument: any): void => {
  console.log(argument);
};

/**
 * Generic function that returns the argument provided.
 * @param argument - The value to return (any type).
 * @returns The same argument passed in.
 * @remarks
 * - Currently uses `any`, which loses type safety.
 * - Will be improved in later lessons with proper generics.
 */
// export function genericFunction(argument: any): any {
//   return argument;
// }

// --- Class 85: Generic Functions ---

/**
 * Generic function that returns the argument provided.
 * @typeParam T - The type of the argument.
 * @param argument - The value to return.
 * @returns The same argument passed in, preserving its type.
 * @remarks
 * - Provides type safety compared to using `any`.
 * - Allows TypeScript to infer the correct type and available methods.
 */
export function genericFunction<T>(argument: T): T {
  return argument;
}

/**
 * Generic arrow function that returns the argument provided.
 * @typeParam T - The type of the argument.
 * @param argument - The value to return.
 * @returns The same argument passed in, preserving its type.
 * @remarks
 * - Equivalent to genericFunction but written as an arrow function.
 * - Demonstrates flexibility in defining generic functions.
 */
export const genericArrowFunction = <T>(argument: T): T => argument;
