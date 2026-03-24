// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/classes/Hero.ts

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
