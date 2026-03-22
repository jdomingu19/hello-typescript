// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// classes/getters-setters.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 63: Getters & Setters ---

  /**
   * Represents a Hero with encapsulated name, age, and activity status.
   * @remarks
   * - Demonstrates how to use getters and setters in TypeScript.
   * - `name` is private and accessed only through `getName` and `setName`.
   */
  class Hero {
    /**
     * Creates a new Hero instance.
     * @param name - The hero's name (private).
     * @param age - The hero's age (public).
     * @param isActive - Whether the hero is active (public).
     */
    constructor(
      private name: string,
      public age: number,
      public isActive: boolean,
    ) {}

    /**
     * Getter for the hero's name.
     * @returns A formatted string with the hero's name.
     */
    get getName(): string {
      return `The name's ${this.name}!`;
    }

    /**
     * Setter for the hero's name.
     * @param name - The new name to assign to the hero.
     */
    set setName(name: string) {
      this.name = name;
    }
  }

  // --- Usage examples ---

  // Class reference
  console.log(Hero); // [class Hero] {}
  console.log(typeof Hero); // function

  // Instance creation
  const link: Hero = new Hero("abc", 21, true);

  console.log(link); // Hero {name: 'abc', age: 21, isActive: true}
  console.log(typeof link); // object

  // Getter usage
  console.log(link.getName); // The name's abc!

  // Setter usage
  console.log((link.setName = "Link")); // Link
  console.log(link.getName); // The name's Link!
})();
