// Hello, TypeScript! @jdomingu19
// Playground 000: Exploring function properties

(() => {
  // 1. Define function with parameter and return type
  function greetUser(name: string): string {
    return `Hello, ${name}!`;
  }

  // 2. Log function reference and typeof
  console.log(greetUser); // [Function: greetUser]
  console.log(typeof greetUser); // function

  // 3. Inspect function metadata and source
  console.log(greetUser.arguments); // null (legacy property, always return null)
  console.log(greetUser.caller); // null (legacy property, always return null)
  console.log(greetUser.length); // 1 (number of parameters)
  console.log(greetUser.name); // greetUser
  console.log(greetUser.prototype); // {}
  console.log(greetUser.prototype.constructor); // [Function: greetUser]
  console.log(greetUser.prototype.constructor.name); // greetUser
  console.log(greetUser.toString()); // Shows function code (JavaScript)

  // 4. Invoke function with call and apply
  console.log(greetUser.call(null, "Jesús")); // Hello, Jesús!
  console.log(greetUser.apply(null, ["Jesús"])); // Hello, Jesús!

  // 5. Bind function with preset argument
  const boundGreet = greetUser.bind(null, "Jesús");
  console.log(boundGreet); // [Function: bound greetUser]
  console.log(typeof boundGreet); // function
  console.log(boundGreet()); // Hello, Jesús!
})();
