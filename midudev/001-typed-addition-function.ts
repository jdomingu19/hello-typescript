// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 001 Typed Addition Function

// Type annotations
function addTwoNumbers(a: number, b: number) {
  return a + b;
}

console.log(addTwoNumbers(5, 6)); // 11

// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(addTwoNumbers(5, "6"));
// console.log(addTwoNumbers("5", 6));
// console.log(addTwoNumbers("5", "6"));
