// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// objects/typing-objects.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 37: Typing Objects ---

  // 1. Explicitly typed object with optional property
  // - Declares required properties (name, age, isActive)
  // - Declares optional property powers?: string[]
  // - On editor hover =>
  // let hero: {
  //   name: string;
  //   age: number;
  //   isActive: boolean;
  //   powers?: string[] | undefined;
  // }
  let hero: {
    name: string;
    age: number;
    isActive: boolean;
    powers?: string[];
  } = {
    name: "Link",
    age: 21,
    isActive: true,
  };

  console.log(hero); // { name: 'Link', age: 21, isActive: true }
  console.log(typeof hero); // object

  // 2. Invalid reassignment with wrong types
  // - Error: Type 'number' is not assignable to type 'string'.
  // - Error: Type 'string' is not assignable to type 'number'.
  // - Error: Type 'null' is not assignable to type 'string'.
  // hero = {
  //   name: 42,
  //   age: "abc",
  //   isActive: null,
  // };

  // 3. Invalid reassignment missing required properties
  // - Error: Type '{ powers: string[]; }' is missing the following properties
  //   from type '{ name: string; age: number; isActive: boolean; powers?: string[] | undefined; }':
  //   name, age, isActive
  // hero = {
  //   powers: ["Power", "Wisdom", "Courage"],
  // };

  // 4. Valid reassignment including optional property
  // - Provides all required properties (name, age, isActive)
  // - Adds optional property powers
  // - On editor hover =>
  // let hero: {
  //   name: string;
  //   age: number;
  //   isActive: boolean;
  //   powers?: string[] | undefined;
  // }
  hero = {
    name: "Link",
    age: 21,
    isActive: true,
    powers: ["Courage"],
  };

  console.log(hero); // { name: 'Link', age: 21, isActive: true, powers: [ 'Courage' ] }
  console.log(typeof hero); // object

  // 5. Valid reassignment including optional property
  // - Provides all required properties (name, age, isActive)
  // - Adds optional property powers
  // - On editor hover =>
  // let hero: {
  //   name: string;
  //   age: number;
  //   isActive: boolean;
  //   powers?: string[] | undefined;
  // }
  hero = {
    name: "Zelda",
    age: 19,
    isActive: true,
    powers: ["Wisdom"],
  };

  console.log(hero); // { name: 'Zelda', age: 19, isActive: true, powers: [ 'Wisdom' ] }
  console.log(typeof hero); // object
})();
