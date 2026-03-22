// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// classes/abstract.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 64: Abstract Class ---

  /**
   * Abstract base class representing a generic Hero.
   * @remarks
   * - Cannot be instantiated directly.
   * - Serves as a blueprint for subclasses like Link and Zelda.
   */
  abstract class Hero {
    /**
     * Creates a new Hero instance.
     * @param name - The hero's name.
     * @param age - The hero's age.
     * @param isActive - Whether the hero is active.
     */
    constructor(
      public name: string,
      public age: number,
      public isActive: boolean,
    ) {}
  }

  /**
   * Subclass representing Link.
   * @remarks
   * - Extends Hero and adds specific behavior.
   */
  class Link extends Hero {
    /**
     * Simulates Link training.
     * @returns A string describing Link's training action.
     */
    train(): string {
      return `${this.name} is training!`;
    }
  }

  /**
   * Subclass representing Zelda.
   * @remarks
   * - Extends Hero and adds specific behavior.
   */
  class Zelda extends Hero {
    /**
     * Simulates Zelda praying to the Goddess Hylia.
     * @returns A prayer string.
     */
    prayGoddess(): string {
      return "Dear Goddess Hylia...";
    }
  }

  // --- Usage examples ---

  // Class reference
  console.log(Hero); // [class Hero] {}
  console.log(typeof Hero); // function

  // Subclass reference
  console.log(Link); // [class Link] {}
  console.log(typeof Link); // function

  console.log(Zelda); // [class Zelda] {}
  console.log(typeof Zelda); // function

  // Error: Cannot create an instance of an abstract class.
  // const link1: Hero = new Hero("Link", 21, true);
  // const zelda2: Hero = new Hero("Zelda", 19, true);

  // Instance of Link
  const link2: Link = new Link("Link", 21, true);

  console.log(link2); // Link { name: 'Link', age: 21, isActive: true }
  console.log(typeof link2); // object

  console.log(link2.train); // [Function: train]
  console.log(link2.train()); // Link is training!

  // Instance of Zelda
  const zelda2: Zelda = new Zelda("Zelda", 19, true);

  console.log(zelda2); // Zelda { name: 'Zelda', age: 19, isActive: true }
  console.log(typeof zelda2); // object

  console.log(zelda2.prayGoddess); // [Function: prayGoddess]
  console.log(zelda2.prayGoddess()); // Dear Goddess Hylia...

  // Function using abstract type as parameter
  const printHeroName = (hero: Hero): void => {
    console.log(hero.name);
  };

  printHeroName(link2); // Link
  printHeroName(zelda2); // Zelda
})();
