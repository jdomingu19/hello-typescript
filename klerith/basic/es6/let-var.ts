// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// es6/let-var.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 52: Let Variables ---
  // 1. var hoisting
  // - Variables declared with var are hoisted to the top of their scope
  // - They are initialized with undefined until the assignment line
  // - Accessing them before assignment returns undefined (not an error)
  // console.log(a); // undefined
  // var a = "Hello, TypeScript!";
  // 2. let temporal dead zone
  // - Variables declared with let are also hoisted, but not initialized
  // - They remain in the "temporal dead zone" until the declaration line
  // - Accessing them before declaration throws a ReferenceError
  // - Error: Block-scoped variable 'b' used before its declaration.
  // console.log(b);
  // let b = "Hello, TypeScript!";
})();
