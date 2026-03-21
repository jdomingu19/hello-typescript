// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// classes/short-properties-syntax.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 60: Short Properties Syntax ---

  // 1. Class definition using parameter properties
  // - Instead of declaring properties separately and assigning them in the constructor,
  //   TypeScript allows defining them directly in the constructor parameters.
  // - Access modifiers (private, public, protected) in the constructor automatically
  //   create and initialize the properties.
  class Hero {
    // Static property
    // - Belongs to the class itself, not to instances
    static age: number = 21;

    // Constructor with parameter properties
    // - private name: only accessible inside the class
    // - public powers: accessible from outside the class
    // - public isActive?: optional property (may be undefined)
    constructor(
      private name: string,
      public powers: string[],
      public isActive: boolean = true,
    ) {}
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
