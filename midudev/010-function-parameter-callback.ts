// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 010 Function Parameter As Callback

// 1. Function without parameter typing (error)
// Error: Parameter 'fn' implicitly has an 'any' type.
// const greetUser1 = (fn) => {
//   fn("Jesús");
// };

// 1.1 Call function without type safety (error)
// Error: Parameter 'name' implicitly has an 'any' type.
// greetUser1((name) => {
//   console.log(`Hello, ${name}!`);
// });

// 2. Function with typed callback parameter
const greetUser2 = (fn: (name: string) => void) => {
  fn("Jesús");
};

// 2.1 Call function with inline callback
greetUser2((name: string) => {
  console.log(`Hello, ${name}!`); // Hello, Jesús!
});

// 2.2 Call function with predefined callback
const sayHi = (name: string) => {
  console.log(`Hello, ${name}!`);
};

greetUser2(sayHi); // Hello, Jesús!
