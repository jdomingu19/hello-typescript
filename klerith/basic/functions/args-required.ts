// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// functions/args-required.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 29: Required Function Arguments ---

  // 1. Function with required parameters
  // - In TypeScript, function arguments are required by default
  // - If you don’t provide them, the compiler will throw an error
  // - On editor hover => const fullName: (firstName: string, lastName: string) => string
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  console.log(fullName); // [Function: fullName]
  console.log(typeof fullName); // function

  const userFullName = fullName("Jesús", "Domínguez");

  console.log({ userFullName }); // { userFullName: 'Jesús Domínguez' }
  console.log(typeof userFullName); // string

  // 2. Calling function without required arguments
  // Error: Expected 2 arguments, but got 0.
  // const userFullName3 = fullName();

  // Error: Expected 2 arguments, but got 1.
  // const userFullName3 = fullName("Jesús");

  // Error: Expected 2 arguments, but got 1.
  // const userFullName2 = fullName("Domínguez");
})();
