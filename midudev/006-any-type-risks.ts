// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 006 Any Type Risks

// 1. Initialize object with any type
let obj: any = { x: 0 };

console.log(obj); // { x: 0 }
console.log(typeof obj); // object

// 2. Call non-existent function on object
// obj.foo(); // TypeError: obj.foo is not a function
// obj(); TypeError: obj is not a function

// 3. Add new property dynamically
obj.bar = 100;

console.log(obj); // { x: 0, bar: 100 }
console.log(typeof obj); // object

// 4. Reassign with different type
obj = "hello";

console.log(obj); // hello
console.log(typeof obj); // string

// 5. Assign string to number variable
const n: number = obj;

console.log(n); // hello
console.log(typeof n); // string
