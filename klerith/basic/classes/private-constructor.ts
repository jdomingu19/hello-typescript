// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// classes/private-constructor.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 65: Private Constructor ---

  /**
   * Simple Hero class with a public constructor.
   * @remarks
   * - Allows multiple instances to be created freely.
   */
  class Hero1 {
    /**
     * Creates a new Hero1 instance.
     * @param name - The hero's name.
     */
    constructor(public name: string) {}
  }

  // --- Usage examples ---

  // Class reference
  console.log(Hero1); // [class Hero1]
  console.log(typeof Hero1); // function

  // Multiple instances can be created
  const link1: Hero1 = new Hero1("Link1");
  const link2: Hero1 = new Hero1("Link2");
  const link3: Hero1 = new Hero1("Link3");

  console.log(link1); // Hero1 {name: 'Link1'}
  console.log(link2); // Hero1 {name: 'Link2'}
  console.log(link3); // Hero1 {name: 'Link3'}

  /**
   * Hero2 class with a private constructor.
   * @remarks
   * - Implements the Singleton pattern.
   * - Only one instance of Hero2 can exist.
   * - Access is controlled via the static `callHero2` method.
   */
  class Hero2 {
    static instance: Hero2;

    /**
     * Private constructor prevents direct instantiation.
     * @param name - The hero's name.
     * @private
     */
    private constructor(public name: string) {}

    /**
     * Static factory method to create or return the single instance.
     * @param name - The hero's name to initialize the instance.
     * @returns The single Hero2 instance.
     */
    static callHero2(name: string): Hero2 {
      if (!Hero2.instance) {
        Hero2.instance = new Hero2(name);
      }
      return Hero2.instance;
    }

    /**
     * Changes the hero's name.
     * @param newName - The new name to assign.
     */
    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // --- Usage examples ---

  // Class reference
  console.log(Hero2); // [class Hero2]
  console.log(typeof Hero2); // function

  // Error: Constructor of class 'Hero2' is private and only accessible within the class declaration.
  // const link4: Hero2 = new Hero2("Link4");
  // const link5: Hero2 = new Hero2("Link5");
  // const link6: Hero2 = new Hero2("Link6");

  // Singleton instance creation via static method
  const link4: Hero2 = Hero2.callHero2("Link4");
  const link5: Hero2 = Hero2.callHero2("Link5");
  const link6: Hero2 = Hero2.callHero2("Link6");

  // All variables reference the same instance
  console.log(link4); // Hero2 {name: 'Link4'}
  console.log(link5); // Hero2 {name: 'Link4'}
  console.log(link6); // Hero2 {name: 'Link4'}

  // Changing the name affects all references
  link6.changeName("Link7");

  console.log(link4); // Hero2 {name: 'Link7'}
  console.log(link5); // Hero2 {name: 'Link7'}
  console.log(link6); // Hero2 {name: 'Link7'}
})();
