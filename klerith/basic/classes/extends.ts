// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// classes/extends.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 62: Extends ---

  /**
   * Base class representing a generic Hero.
   * @remarks
   * - Contains common properties like `name`, `powers`, and `isActive`.
   * - Provides a protected `greet` method that can be reused by subclasses.
   */
  class Hero {
    /**
     * Creates a new Hero instance.
     * @param name - The hero's name (private, only accessible inside the class).
     * @param powers - The hero's powers (public, accessible outside).
     * @param isActive - Whether the hero is active. Defaults to `true`.
     */
    constructor(
      private name: string,
      public powers: string[],
      public isActive: boolean = true,
    ) {
      console.log("Hero constructor called!");
    }

    /**
     * Protected method to greet using the hero's name.
     * @returns A greeting string including the hero's name.
     * @protected
     */
    protected greet(): string {
      return `Hello, this is ${this.name}!`;
    }
  }

  /**
   * Subclass representing Link, extending the base Hero class.
   * @remarks
   * - Adds specific properties like `shields` and `swords`.
   * - Overrides `greet` to expose the protected method as public.
   */
  class Link extends Hero {
    /**
     * Creates a new Link instance.
     * @param name - The hero's name.
     * @param powers - The hero's powers.
     * @param shields - Shields owned by Link.
     * @param swords - Swords owned by Link.
     */
    constructor(
      name: string,
      powers: string[],
      public shields: string[],
      public swords: string[],
    ) {
      super(name, powers);
      console.log("Link constructor called!");
    }

    /**
     * Public override of the protected greet method.
     * @returns A greeting string including Link's name.
     */
    public greet(): string {
      return super.greet();
    }
  }

  // 2. Base class usage
  console.log(Hero); // [class Hero] {}
  console.log(typeof Hero); // function

  const link1: Hero = new Hero("Link", ["Courage"]); // Hero constructor called!

  console.log(link1); // Hero { name: 'Link', powers: [ 'Courage' ], isActive: true }
  console.log(typeof link1); // object

  // 3. Subclass usage
  console.log(Link); // [class Link] {}
  console.log(typeof Link); // function

  const link2: Link = new Link(
    "Link",
    ["Courage"],
    ["Hylian Shield"],
    ["Master Sword"],
  );
  // Hero constructor called!
  // Link constructor called!

  console.log(link2); // Link { name: 'Link', powers: [ 'courage' ], isActive: true, shields: [ 'Hylian Shield' ], swords: [ 'Master Sword' ] }
  console.log(typeof link2); // object

  // 4. Protected method access
  // Error: Property 'greet' is protected and only accessible within class 'Hero' and its subclasses.
  // console.log(link1.greet);
  // console.log(link1.greet());

  // 5. Overridden method access
  // - Link overrides greet() to make it public
  // - Now it can be called from outside
  console.log(link2.greet); // [Function: greet]
  console.log(link2.greet()); // Hello, this is Link!
})();
