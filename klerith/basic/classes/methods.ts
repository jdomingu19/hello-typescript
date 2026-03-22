// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// classes/methods.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 61: Methods ---

  // 1. Class definition with methods
  // - Includes static and instance methods
  // - Demonstrates public vs private access
  class Hero {
    static age: number = 21;

    // Static method
    // - Belongs to the class itself, not to instances
    // - Can be called directly from the class
    static showPowers(): string {
      return this.name;
    }

    constructor(
      private name: string,
      public powers: string[],
      public isActive: boolean = true,
    ) {}

    // Public method
    // - Accessible from outside the class
    // - Can use private properties internally
    public greet(): string {
      return `Hello, this is ${this.name}!`;
    }

    // Private method
    // - Only accessible inside the class
    // - Cannot be called from outside
    private prayGoddess(): string {
      return "Dear Goddess Hylia...";
    }
  }

  // 2. Class reference
  console.log(Hero); // [class Hero] { age: 21 }
  console.log(typeof Hero); // function

  // 3. Instance creation
  const link: Hero = new Hero("Link", ["Courage"]);

  console.log(link); // Hero { name: 'Link', powers: [ 'Courage' ], isActive: true }
  console.log(typeof link); // object

  // 4. Private property access
  // Error: Property 'name' is private and only accessible within class 'Hero'.
  // console.log(link.name);

  // 5. Public property access
  console.log(link.powers); // [ 'Courage' ]
  console.log(link.isActive); // true

  // 6. Static property access
  console.log(Hero.age); // 21

  // 7. Public method access
  // - greet is a public method, so it can be called directly
  console.log(link.greet); // [Function: greet]
  console.log(link.greet()); // Hello, this is Link!

  // 8. Private method access
  // Error: Property 'prayGoddess' is private and only accessible within class 'Hero'.
  // console.log(link.prayGoddess);
  // console.log(link.prayGoddess());

  // 9. Static method access
  // - showPowers is a static method, so it is called directly from the class
  console.log(Hero.showPowers); // [Function: showPowers]
  console.log(Hero.showPowers()); // Hero
})();
