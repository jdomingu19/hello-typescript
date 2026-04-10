// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 000 TypeScript Editor Errors

(() => {
  let a = "Hello, TypeScript!"; // string

  // Error: Type 'number' is not assignable to type 'string'.
  // a = 2; // number

  console.log(a); // Hello, TypeScript!
  console.log(typeof a); // string

  // Error: Property '__proto__' does not exist on type 'string'.
  // console.log(a.__proto__.constructor.name);

  console.log(a.toLocaleUpperCase()); // HELLO, TYPESCRIPT!
  console.log(a.toLocaleLowerCase()); // hello, typescript!

  // Error: Property 'toExponential' does not exist on type 'string'.
  // console.log(a.toExponential(2));

  for (const char of a) {
    console.log(char); // H, e, l, l, o, ... !
  }
})();
