// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 007 Type Inference

(() => {
  // 1. Declare constants without type annotations
  const a = 1;
  const b = 2;

  // 2. Infer type from arithmetic operation
  const c = a + b;

  // 3. Display values and inferred types
  console.log(a); // 1
  console.log(typeof a); // number

  console.log(b); // 2
  console.log(typeof b); // number

  console.log(c); // 3
  console.log(typeof c); // number
})();
