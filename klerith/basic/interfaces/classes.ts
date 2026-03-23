// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// interfaces/classes.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 71: Implementing Interfaces in Classes ---

  /**
   * HeroInterface defines the structure for a hero.
   * @remarks
   * - Includes `name` and `title` as required properties.
   * - Declares `introduce()` method to return a string introduction.
   */
  interface HeroInterface {
    name: string;
    title: string;
    introduce(): string;
  }

  /**
   * HylianInterface defines traits specific to Hylians.
   * @remarks
   * - Includes `hasPointedEars` property to distinguish them from humans.
   */
  interface HylianInterface {
    hasPointedEars: boolean;
  }

  /**
   * Link class implementing both HeroInterface and HylianInterface.
   * @remarks
   * - Demonstrates how a class can implement multiple interfaces.
   * - Provides constructor shorthand for property initialization.
   * - Implements the `introduce()` method from HeroInterface.
   */
  class Link implements HeroInterface, HylianInterface {
    // public name: string;
    // public title: string;
    // public hasPointedEars: boolean;

    // constructor(name: string, title: string, hasPointedEars: boolean) {
    //   this.name = name;
    //   this.title = title;
    //   this.hasPointedEars = hasPointedEars;
    // }

    /**
     * Creates a new Link instance.
     * @param name - The hero's name.
     * @param title - The hero's title or alias.
     * @param hasPointedEars - Whether Link has pointed ears (Hylian trait).
     */
    constructor(
      public name: string,
      public title: string,
      public hasPointedEars: boolean,
    ) {}

    /**
     * Introduces the hero by name.
     * @returns A string introduction.
     */
    introduce(): string {
      return `My name is ${this.name}!`;
    }
  }

  // --- Usage examples ---

  // Class reference
  console.log(Link); // [class Link] {}
  console.log(typeof Link); // function

  // Instance creation
  const link1 = new Link("Link", "Hero of Time", true);

  console.log(link1); // Link { name: 'Link', title: 'Hero of Time', hasPointedEars: true }
  console.log(typeof link1); // object

  // Method reference
  console.log(link1.introduce); // [Function: introduce]
  console.log(typeof link1.introduce); // function

  // Method execution
  console.log(link1.introduce()); // My name is Link!
  console.log(typeof link1.introduce()); // string
})();
