// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// interfaces/functions.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 72: Implementing Functions in Interfaces ---

  /**
   * AddTwoNumbersInterface defines a function signature.
   * @remarks
   * - Declares a callable type that accepts two numbers.
   * - Returns a number as the result.
   */
  interface AddTwoNumbersInterface {
    (a: number, b: number): number;
  }

  /**
   * Variable typed with AddTwoNumbersInterface.
   * @remarks
   * - Ensures any assigned function matches the interface signature.
   */
  let addTwoNumbersFunction: AddTwoNumbersInterface;

  /**
   * Implementation of the function.
   * @param a - First number.
   * @param b - Second number.
   * @returns The sum of `a` and `b`.
   */
  addTwoNumbersFunction = (a: number, b: number): number => {
    return a + b;
  };

  // --- Usage examples ---

  // Function reference
  console.log(addTwoNumbersFunction); // [Function: addTwoNumbersFunction]
  console.log(typeof addTwoNumbersFunction); // function

  // Function execution
  const result = addTwoNumbersFunction(5, 6);

  console.log(result); // 11
  console.log(typeof result); // number
})();
