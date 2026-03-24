// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/exercise-5/Hero.ts

// --- Class 81: Exercise 5 ---
import powersArray from "./powers";

/**
 * Hero class represents a character with a name, age, and a powerId.
 * @remarks
 * - Demonstrates default export of a class.
 * - Includes a getter method to resolve power description from an array.
 */
class Hero {
  /**
   * Creates a new Hero instance.
   * @param name - The hero's name.
   * @param age - The hero's age.
   * @param powerId - The id of the hero's power.
   */
  constructor(
    public name: string,
    public age: number,
    public powerId: number,
  ) {}

  /**
   * Getter that returns the description of the hero's power.
   * @remarks
   * - Searches powersArray for a matching id.
   * - Returns "not found" if no match exists.
   */
  get getPowerDescription(): string {
    return (
      powersArray.find((power) => power.id === this.powerId)?.description ||
      "not found"
    );
  }
}

// Default export of Hero class
export default Hero;
