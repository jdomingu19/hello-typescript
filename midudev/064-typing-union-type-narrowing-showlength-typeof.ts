// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 064 Type Narrowing with typeof

(() => {
  // 1. Define function with union parameter
  function showLength(object: number | string): number {
    // 2. Narrow type to string
    if (typeof object === "string") {
      return object.length;
    }

    // 3. Narrow type to number
    return object.toString().length;
  }

  // 4. Call function with number
  console.log(showLength(123)); // 3

  // 5. Call function with string
  console.log(showLength("123")); // 3

  // 6. Error demonstration
  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
  // console.log(showLength(true));
})();
