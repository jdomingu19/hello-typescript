// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// functions/args-default.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 31: Default Function Arguments ---

  // 1. Invalid combination of optional and required parameters
  // - Error: A required parameter cannot follow an optional parameter.
  // - On editor hover => const fullName: (firstName: string, lastName?: string | undefined, toUpperCase: boolean) => string
  // const fullName = (
  //   firstName: string,
  //   lastName?: string,
  //   toUpperCase: boolean,
  // ): string => {
  //   let name =
  //     typeof lastName === "undefined" ? firstName : `${firstName} ${lastName}`;
  //   name = toUpperCase ? name.toUpperCase() : name;
  //   return name;
  // };

  // 2. Correct usage with default value
  // - toUpperCase has a default value (false), so it can follow an optional parameter
  // - On editor hover => const fullName: (firstName: string, lastName?: string | undefined, toUpperCase?: boolean) => string
  const fullName = (
    firstName: string,
    lastName?: string,
    toUpperCase: boolean = false,
  ): string => {
    let name =
      typeof lastName === "undefined" ? firstName : `${firstName} ${lastName}`;
    name = toUpperCase ? name.toUpperCase() : name;
    return name;
  };

  console.log(fullName); //
  console.log(typeof fullName); //

  // Call with only firstName
  const username1 = fullName("Jesús");

  console.log(username1); // Jesús
  console.log(typeof username1); // string

  // Call with firstName and lastName
  const username2 = fullName("Jesús", "Domínguez");

  console.log(username2); // Jesús Domínguez
  console.log(typeof username2); // string

  // Call with firstName, lastName, and explicit false for toUpperCase
  const username3 = fullName("Jesús", "Domínguez", false);

  console.log(username3); // Jesús Domínguez
  console.log(typeof username3); // string

  // Call with firstName, lastName, and explicit true for toUpperCase
  const username4 = fullName("Jesús", "Domínguez", true);

  console.log(username4); // JESÚS DOMÍNGUEZ
  console.log(typeof username4); // string
})();
