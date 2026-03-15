// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/any.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 18: Any ---

  // 1. Variable declared with type any
  // - Can hold values of any type (string, number, boolean, null, etc.)
  // - Disables type safety and allows reassignment freely
  // - On editor hover => let anyVariable: any
  let anyVariable: any = "Hello, TypeScript!";
  console.log({ anyVariable }); // { anyVariable: 'Hello, TypeScript!' }
  console.log(typeof anyVariable); // string

  anyVariable = 42;
  console.log({ anyVariable }); // { anyVariable: 42 }
  console.log(typeof anyVariable); // number

  anyVariable = true;
  console.log({ anyVariable }); // { anyVariable: true }
  console.log(typeof anyVariable); // boolean

  anyVariable = null;
  console.log({ anyVariable }); // { anyVariable: null }
  console.log(typeof anyVariable); // object

  // 2. Constant with type any must be initialized
  // Error: 'anyConstant' is declared but its value is never read.
  // Error: 'const' declarations must be initialized.
  // const anyConstant: any;

  // 3. Constant without type annotation defaults to implicit any
  // Error: 'emptyConstant' is declared but its value is never read.
  // Error: 'const' declarations must be initialized.
  // Error: Variable 'emptyConstant' implicitly has an 'any' type.
  // const emptyConstant;

  // 4. Using type any disables IntelliSense
  // - Editor does not provide method suggestions
  // - Runtime errors occur if methods are misspelled or invalid
  anyVariable = "Some awesome text!";
  console.log(anyVariable.charAt(0)); // S

  // Runtime error: Uncaught TypeError: anyVariable.charat is not a function
  // console.log(anyVariable.charat(0));

  anyVariable = 123.456;
  console.log(anyVariable.toFixed(2)); // 123.46

  // Runtime error: Uncaught TypeError: anyVariable.charAt is not a function
  // console.log(anyVariable.charAt(0));

  // 5. Casting with 'as' provides type safety
  // - Editor recognizes the type and suggests valid methods
  anyVariable = "Some awesome text!";
  console.log((anyVariable as string).charAt(0)); // S

  anyVariable = 123.456;
  console.log((anyVariable as number).toFixed(2)); // 123.

  // 6. Casting with angle brackets (<type>) provides type safety
  // - Equivalent to 'as' syntax
  anyVariable = "Some awesome text!";
  console.log((<string>anyVariable).charAt(0)); // S

  anyVariable = 123.456;
  console.log((<number>anyVariable).toFixed(2)); // 123.46
})();
