// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 15: Booleans ---

  // 1. Variable without type annotation defaults to 'any' until assigned
  // - Initially undefined because no value is set
  // - Type changes dynamically when a value is assigned
  let maybeBoolean;

  console.log(maybeBoolean); // undefined
  console.log(typeof maybeBoolean); // undefined
  console.log({ maybeBoolean }); // { maybeBoolean: undefined }

  maybeBoolean = true;

  console.log(maybeBoolean); // true
  console.log(typeof maybeBoolean); // boolean
  console.log({ maybeBoolean }); // { maybeBoolean: true }

  // 2. Variable explicitly typed as boolean
  // - Must be assigned before use
  // - Only accepts true or false values
  let definitelyBoolean: boolean;
  // console.log(definitelyBoolean); // Error: Variable 'definitelyBoolean' is used before being assigned.
  // console.log(typeof definitelyBoolean); // Error: Variable 'definitelyBoolean' is used before being assigned.
  // console.log({ definitelyBoolean }); // Error: Variable 'definitelyBoolean' is used before being assigned.

  definitelyBoolean = true;

  console.log(definitelyBoolean); // true
  console.log(typeof definitelyBoolean); // boolean
  console.log({ definitelyBoolean }); // { definitelyBoolean: true }

  definitelyBoolean = false;

  console.log(definitelyBoolean); // false
  console.log(typeof definitelyBoolean); // boolean
  console.log({ definitelyBoolean }); // { definitelyBoolean: false }

  // Error: Type 'number' is not assignable to type 'boolean'.
  // definitelyBoolean = 123;

  // 3. Using boolean in conditional (ternary operator)
  // - Boolean controls which string value is assigned
  // - Demonstrates type safety and conditional logic
  let isHero: boolean = true;
  let link: string;

  link = isHero ? "Hero of Time" : "Young Villager";

  console.log({ isHero }); // { isHero: true }
  console.log({ link }); // { link: 'Hero of Time' }

  console.log(typeof { isHero }); // object
  console.log(typeof { link }); // object

  console.log(typeof isHero); // boolean
  console.log(typeof link); // string
})();
