// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// interfaces/basic.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 68: Basic TypeScript Interface ---

  /**
   * Interface representing a basic Hero.
   * @remarks
   * - Defines required properties: `name` and `isActive`.
   */
  interface HeroInterface {
    name: string;
    isActive: boolean;
  }

  /**
   * Interface augmentation.
   * @remarks
   * - Adds an optional method `introduce`.
   * - Demonstrates how interfaces can be extended or merged.
   */
  interface HeroInterface {
    introduce?: () => string;
  }

  // Object implementing HeroInterface without introduce()
  const link1: HeroInterface = {
    name: "Link",
    isActive: true,
  };

  // Object implementing HeroInterface with introduce()
  const link2: HeroInterface = {
    name: "Link",
    isActive: true,
    introduce() {
      return `The name's ${this.name}!`;
    },
  };

  // --- Usage examples ---

  // Object without introduce()
  console.log(link1); // { name: 'Link', isActive: true }
  console.log(typeof link1); // object

  // Object with introduce()
  console.log(link2); // { name: 'Link', isActive: true, introduce: [Function: introduce] }
  console.log(typeof link2); // object

  // Runtime error: TypeError: link1.introduce is not a function
  // console.log(link1.introduce);
  // console.log(link1.introduce());

  // Safe usage on link2
  console.log(link2.introduce); // [Function: introduce]
  console.log(link2.introduce()); // The name's Link!
})();
