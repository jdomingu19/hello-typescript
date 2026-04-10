// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 008 Function Type Inference

(() => {
  // 1. Function without parameter type
  // Error: Parameter 'name' implicitly has an 'any' type.
  // function greetUser1(name) {
  //   console.log(`Hello, ${name}!`);
  // }

  // 1.1 Function with parameter type any
  function greetUser2(name: any) {
    console.log(`(greetUser2) Hello, ${name}!`);
  }

  // 1.2 Function with parameter type string
  function greetUser3(name: string) {
    console.log(`(greetUser3) Hello, ${name}!`);
  }

  // 1.3 Function with parameter type string and void return
  function greetUser4(name: string): void {
    console.log(`(greetUser4) Hello, ${name}!`);
  }

  // 2. Call functions with string argument
  // greetUser1("Jesús"); // ...
  greetUser2("Jesús"); // (greetUser2) Hello, Jesús!
  greetUser3("Jesús"); // (greetUser3) Hello, Jesús!
  greetUser4("Jesús"); // (greetUser4) Hello, Jesús!

  // 3. Call functions with number argument
  // greetUser1(123); // ...
  greetUser2(456); // (greetUser2) Hello, 456!
  // greetUser3(123); // Argument of type 'number' is not assignable to parameter of type 'string'.
  // greetUser4(456); // Argument of type 'number' is not assignable to parameter of type 'string'.

  // 4. Inspect functions as values
  // console.log(greetUser1); // ...
  // console.log(typeof greetUser1); // ...

  console.log(greetUser2); // [Function: greetUser2]
  console.log(typeof greetUser2); // function

  console.log(greetUser3); // [Function: greetUser3]
  console.log(typeof greetUser3); // function

  console.log(greetUser4); // [Function: greetUser4]
  console.log(typeof greetUser4); // function
})();
