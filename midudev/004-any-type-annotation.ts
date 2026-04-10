// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 004 Any Type Annotation

(() => {
  // 1. Declare variable with any type
  let anyValue: any = "Hello, TypeScript!";

  console.log(anyValue); // Hello, TypeScript!
  console.log(typeof anyValue); // string

  console.log(anyValue.toUpperCase()); // HELLO, TYPESCRIPT!
  console.log(anyValue.toLowerCase()); // hello, typescript!

  // 2. Reassign with different type
  anyValue = 123;

  console.log(anyValue); // 123
  console.log(typeof anyValue); // number

  // console.log(anyValue.toUpperCase()); // TypeError: anyValue.toUpperCase is not a function
  // console.log(anyValue.toLowerCase()); // TypeError: anyValue.toLowerCase is not a function

  console.log(anyValue.toExponential(3)); // 1.230e+2
})();
