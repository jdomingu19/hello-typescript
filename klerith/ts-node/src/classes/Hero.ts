// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/classes/Hero.ts

// --- Class 79: Imports & Exports ---

/**
 * Hero class represents a character with a name,
 * age, and a set of powers.
 * @remarks
 * - Demonstrates how to define and export a class in TypeScript.
 * - Properties are declared with constructor shorthand.
 */
export class Hero {
  /**
   * Creates a new Hero instance.
   * @param name - The hero's name.
   * @param age - The hero's age.
   * @param powers - An array of hero powers.
   */
  constructor(
    public name: string,
    public age: number,
    public powers: string[],
  ) {}
}

// --- Class 80: export default & export with alias ---

/**
 * Additional hero classes exported for demonstration.
 * @remarks
 * - Showcases multiple named exports.
 * - Useful for demonstrating import aliasing and grouped imports.
 */
export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

/**
 * Constant representing the developer's username.
 * @remarks
 * - Demonstrates exporting constants alongside classes.
 */
export const USERNAME = "@jdomingu19";
