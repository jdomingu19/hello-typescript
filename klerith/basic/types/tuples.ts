// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/tuples.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 20: Tuples ---

  // 1. Basic tuple with fixed types
  // - Tuple enforces order and type of elements
  // - First element must be string, second must be number
  // - On editor hover => const tupleArray1: [string, number]
  const tupleArray1: [string, number] = ["Link", 21];

  console.log({ tupleArray1 }); // { tupleArray1: [ 'Link', 21 ] }
  console.log(typeof tupleArray1); // object

  // Ok: reassigning values with correct types
  tupleArray1[0] = "Hero of Time";
  tupleArray1[1] = 22;

  console.log({ tupleArray1 }); // { tupleArray1: [ 'Hero of Time', 22 ] }
  console.log(typeof tupleArray1); // object

  // Type mismatch
  // Error: Type 'number' is not assignable to type 'string'.
  // tupleArray1[0] = 22;

  // Error: Type 'string' is not assignable to type 'number'.
  // tupleArray1[1] = "Hero of Time";

  // 2. Extended tuple with three elements
  // - Tuple enforces exact length and types
  // - First element string, second number, third boolean
  // - On editor hover => const tupleArray2: [string, number]
  const tupleArray2: [string, number, boolean] = ["Link", 21, false];

  console.log({ tupleArray2 }); // { tupleArray2: [ 'Link', 21, false ] }
  console.log(typeof tupleArray2); // object

  // Ok: reassigning values with correct types
  tupleArray2[0] = "Hero of Time";
  tupleArray2[1] = 22;
  tupleArray2[2] = true;

  console.log({ tupleArray2 }); // { tupleArray2: [ 'Hero of Time', 22, true ] }
  console.log(typeof tupleArray2); // object

  // Type mismatch
  // Error: Type 'boolean' is not assignable to type 'string'.
  // tupleArray2[0] = true;

  // Error: Type 'string' is not assignable to type 'number'.
  // tupleArray2[1] = "Hero of Time";

  // Error: Type 'number' is not assignable to type 'boolean'.
  // tupleArray2[2] = 22;
})();
