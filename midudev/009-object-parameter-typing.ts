// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 009 Object Parameter Typing

(() => {
  // 1. Function without parameter typing (error)
  // function greetUser1({ name, age }) {
  //   // Binding element 'name' implicitly has an 'any' type.
  //   // Binding element 'age' implicitly has an 'any' type.
  //   console.log(`${name} is ${age} years old!`);
  // }

  // 2. Function with inline object type annotation
  function greetUser2({ name, age }: { name: string; age: number }) {
    console.log(`${name} is ${age} years old!`);
  }

  // 3. Function with typed object parameter
  function greetUser3(person: { name: string; age: number }) {
    const { name, age } = person;
    console.log(`${name} is ${age} years old!`);
  }

  // 4. Function returning string from typed object
  function greetUser4({ name, age }: { name: string; age: number }) {
    return `${name} is ${age} years old!`;
  }

  // 5. Function with explicit return type string
  function greetUser5({ name, age }: { name: string; age: number }): string {
    return `${name} is ${age} years old!`;
  }

  // 6. Call function without type safety
  // greetUser1({ name: "Jesús", age: 21 }); // ...
  // greetUser1({ name: 123, age: "abc" }); // ...

  // 7. Call function with inline object type annotation
  greetUser2({ name: "Jesús", age: 21 }); // Jesús is 21 years old!
  // greetUser2({ name: 123, age: "abc" }); // ...

  // 8. Call function with typed object parameter
  greetUser3({ name: "Jesús", age: 21 }); // Jesús is 21 years old!
  // greetUser3({ name: 123, age: "abc" }); // ...

  // 9. Call function returning string from typed object
  console.log(greetUser4({ name: "Jesús", age: 21 })); // Jesús is 21 years old!
  // console.log(greetUser4({ name: 123, age: "abc" })); // ...

  // 10. Call function with explicit return type string
  console.log(greetUser5({ name: "Jesús", age: 21 })); // Jesús is 21 years old!
  // console.log(greetUser5({ name: 123, age: "abc" })); // ...

  // 11. Assign return value to number variable (error)
  let getNumber: number;
  // getNumber = greetUser4({ name: "Jesús", age: 21 }); // Type 'string' is not assignable to type 'number'.
  // console.log(getNumber); // Variable 'getNumber' is used before being assigned.
  // console.log(typeof getNumber); // Variable 'getNumber' is used before being assigned.

  // 12. Assign return value to string variable
  let getString: string;
  getString = greetUser4({ name: "Jesús", age: 21 });
  console.log(getString); // Jesús is 21 years old!
  console.log(typeof getString); // string

  // 13. Assign return value from explicit string function to number variable (error)
  // getNumber = greetUser5({ name: "Jesús", age: 21 }); // Type 'string' is not assignable to type 'number'.
  // console.log(getNumber); // Variable 'getNumber' is used before being assigned.
  // console.log(typeof getNumber); // Variable 'getNumber' is used before being assigned.

  // 14. Assign return value from explicit string function to string variable
  getString = greetUser5({ name: "Jesús", age: 21 });
  console.log(getString); // Jesús is 21 years old!
  console.log(typeof getString); // string
})();
