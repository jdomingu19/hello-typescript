// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 013 Typing Void

// 1. Function without explicit return type (inferred void)
function logMessage1(message: string) {
  console.log(`message: ${message}`);
}

// 2. Function with explicit return type void
function logMessage2(message: string): void {
  console.log(`message: ${message}`);
}

// 3. Function returning undefined explicitly
function logMessage3(message: string) {
  console.log(`message: ${message}`);
  return;
}

// 4. Function with explicit void return and explicit return statement
function logMessage4(message: string): void {
  console.log(`message: ${message}`);
  return;
}

// 5. Call functions with string argument
logMessage1("Hello, TypeScript!"); // message: Hello, TypeScript!
logMessage2("Hello, TypeScript!"); // message: Hello, TypeScript!
logMessage3("Hello, TypeScript!"); // message: Hello, TypeScript!
logMessage4("Hello, TypeScript!"); // message: Hello, TypeScript!

// 6. Inspect return type of functions (all undefined)
console.log(typeof logMessage1("Hello, TypeScript!")); // undefined
console.log(typeof logMessage2("Hello, TypeScript!")); // undefined
console.log(typeof logMessage3("Hello, TypeScript!")); // undefined
console.log(typeof logMessage4("Hello, TypeScript!")); // undefined
