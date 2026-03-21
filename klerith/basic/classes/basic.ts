// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// classes/basic.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 59: Basic TypeScript Classes ---

  // 1. Class definition with access modifiers
  // - private name: only accessible inside the class
  // - public powers: accessible from outside the class
  // - public isActive?: optional property (may be undefined)
  class Hero {
    // Properties
    private name: string;
    public powers: string[];
    public isActive?: boolean;

    // Static property
    // - Belongs to the class itself, not to instances
    static age: number = 21;

    // Constructor
    // - Initializes properties when creating a new instance
    // - isActive defaults to true if not provided
    constructor(name: string, powers: string[], isActive?: boolean) {
      this.name = name;
      this.powers = powers;
      this.isActive = isActive ?? true;
    }
  }

  // 2. Class reference
  // - Logging the class itself shows its static members
  // - typeof Hero is "function" because classes are syntactic sugar over constructor functions
  console.log(Hero); // [class Hero] { age: 21 }
  console.log(typeof Hero); // function

  // 3. Instance creation
  // - Creates a new Hero object with name and powers
  // - isActive defaults to true
  const link: Hero = new Hero("Link", ["Courage"]);

  console.log(link); // Hero { name: 'Link', powers: [ 'Courage' ], isActive: true }
  console.log(typeof link); // object

  // 4. Private property access
  // Error: Property 'name' is private and only accessible within class 'Hero'.
  // console.log(link.name);

  // 5. Public property access
  // - powers and isActive are public, so they can be accessed directly
  console.log(link.powers); // [ 'Courage' ]
  console.log(link.isActive); // true

  // 6. Static property access
  // - Accessed directly from the class, not from an instance
  console.log(Hero.age); // 21
})();
