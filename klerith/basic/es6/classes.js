// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// es6/classes.js

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 56: ES6 Classes ---

  // 1. Empty class declaration
  // - Defines a class with no properties or methods
  // - Instantiating creates an empty object of type Hero1
  class Hero1 {}

  const link1 = new Hero1();

  console.log(link1); // Hero1 {}
  console.log(typeof link1); // object

  // 2. Class with declared properties (no constructor)
  // - Properties exist but are undefined until assigned
  class Hero2 {
    name;
    powers;
  }

  const link2 = new Hero2();

  console.log(link2); // Hero2 { name: undefined, powers: undefined }
  console.log(typeof link2); // object

  // 3. Class with constructor (no default values)
  // - Constructor assigns values to properties
  // - If no arguments are passed, properties remain undefined
  class Hero3 {
    name;
    powers;

    constructor(name, powers) {
      this.name = name;
      this.powers = powers;
    }
  }

  const link3 = new Hero3();

  console.log(link3); // Hero3 { name: undefined, powers: undefined }
  console.log(typeof link3); // object

  // 4. Class with constructor and default values
  // - Provides fallback values when no arguments are passed
  class Hero4 {
    name;
    powers;

    constructor(name = "No name", powers = []) {
      this.name = name;
      this.powers = powers;
    }
  }

  const link4 = new Hero4();

  console.log(link4); // Hero4 { name: 'No name', powers: [] }
  console.log(typeof link4); // object

  // 5. Class with constructor only (implicit properties)
  // - Properties are created dynamically via constructor
  class Hero5 {
    constructor(name = "No name", powers = []) {
      this.name = name;
      this.powers = powers;
    }
  }

  const link5 = new Hero5();

  console.log(link5); // Hero5 { name: 'No name', powers: [] }
  console.log(typeof link5); // object

  // 6. Inheritance with extends (fixed values)
  // - FlyingHero1 inherits from Hero5
  // - Calls super() with a fixed name
  // - Adds new property isFlying
  class FlyingHero1 extends Hero5 {
    isFlying;

    constructor() {
      super("Rivali");
      this.isFlying = true;
    }
  }

  const rivali1 = new FlyingHero1();

  console.log(rivali1); // FlyingHero1 { name: 'Rivali', powers: [], isFlying: true }
  console.log(typeof rivali1); // object

  // 7. Inheritance with extends (custom values)
  // - FlyingHero2 inherits from Hero5
  // - Calls super() with arguments passed to constructor
  // - Adds isFlying property
  class FlyingHero2 extends Hero5 {
    isFlying;

    constructor(name, powers) {
      super(name, powers);
      this.isFlying = true;
    }
  }

  const rivali2 = new FlyingHero2("Rivali");

  console.log(rivali2); // FlyingHero2 { name: 'Rivali', powers: [], isFlying: true }
  console.log(typeof rivali2); // object

  // 8. Inheritance with extends (implicit property declaration)
  // - FlyingHero3 inherits from Hero5
  // - Adds isFlying property without explicit declaration
  class FlyingHero3 extends Hero5 {
    constructor(name, powers) {
      super(name, powers);
      this.isFlying = true;
    }
  }

  const rivali3 = new FlyingHero3("Rivali");

  console.log(rivali3); // FlyingHero3 { name: 'Rivali', powers: [], isFlying: true }
  console.log(typeof rivali3); // object
})();
