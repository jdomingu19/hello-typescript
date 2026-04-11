// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 063 Type Narrowing with Union Types

(() => {
  // 1. Define function with union parameter
  function showLength(object: number | string): any {
    // 2. Error demonstration
    // Error: Property 'length' does not exist on type 'string | number'.
    // Property 'length' does not exist on type 'number'.
    // return object.length;
  }

  // 3. Call function with number
  console.log(showLength(123)); // undefined

  // 4. Call function with string
  console.log(showLength("123")); // undefined

  // 5. Error demonstration
  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
  // console.log(showLength(true));
})();
