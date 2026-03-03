// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 028 Union Types

// 1. Declare variable with union type (number | string)
let numberOrString: number | string;

// 2. Assign number value
numberOrString = 123;
console.log(numberOrString); // 123
console.log(typeof numberOrString); // number

// 3. Assign string value
numberOrString = "abc";
console.log(numberOrString); // abc
console.log(typeof numberOrString); // string

// 4. Invalid assignment with boolean
// Error: Type 'boolean' is not assignable to type 'string | number'.
// numberOrString = true;

// 5. Invalid assignment with null
// Error: Type 'null' is not assignable to type 'string | number'.
// numberOrString = null;

// 6. Reassign number value
numberOrString = 456;
console.log(numberOrString); // 456
console.log(typeof numberOrString); // number

// 7. Reassign string value
numberOrString = "def";
console.log(numberOrString); // def
console.log(typeof numberOrString); // string
