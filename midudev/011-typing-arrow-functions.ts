// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 011 Typing Arrow Functions

(() => {
  // 1. Arrow function with parameter and return type
  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  // 2. Arrow function with explicit function type annotation
  const subtractTwoNumbers: (a: number, b: number) => number = (a, b) => {
    return a - b;
  };

  // 3. Call arrow functions with correct arguments
  console.log(addTwoNumbers(5, 6)); // 11
  console.log(subtractTwoNumbers(5, 6)); // -1

  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  // console.log(addTwoNumbers("5", "6")); // ...
  // console.log(subtractTwoNumbers("5", "6")); // ...
})();
