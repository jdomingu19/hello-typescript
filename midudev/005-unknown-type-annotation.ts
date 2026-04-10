// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 005 Unknown Type Annotation

(() => {
  // 1. Declare variable with unknown type
  let unknownValue: unknown = "Hello, TypeScript!";

  console.log(unknownValue); // Hello, TypeScript!
  console.log(typeof unknownValue); // string

  // console.log(unknownValue.toUpperCase()); // 'unknownValue' is of type 'unknown'.
  // console.log(unknownValue.toLowerCase()); // 'unknownValue' is of type 'unknown'.

  // 2. Reassign with different type
  unknownValue = 123;

  console.log(unknownValue); // 123
  console.log(typeof unknownValue); // number

  // console.log(unknownValue.toUpperCase()); // TypeError: unknownValue.toUpperCase is not a function
  // console.log(unknownValue.toLowerCase()); // TypeError: unknownValue.toLowerCase is not a function

  // console.log(unknownValue.toExponential(3)); // 'unknownValue' is of type 'unknown'.
})();
