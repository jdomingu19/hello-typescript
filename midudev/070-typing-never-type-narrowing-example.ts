// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 070 Type Narrowing and never

(() => {
  // 1. Define function with union parameter
  function neverExample(x: string | number) {
    // 2. Narrow type to string
    if (typeof x === "string") {
      console.log(`value: ${x} | typeof: ${typeof x}`); // string
      x = x.toUpperCase(); // a string method
      console.log(`new value: ${x} | typeof: ${typeof x}`); // string
    }

    // 3. Narrow type to number
    else if (typeof x === "number") {
      console.log(`value: ${x} | typeof: ${typeof x}`); // number
      x = x.toFixed(2); // a number method
      console.log(`new value: ${x} | typeof: ${typeof x}`); // number
    }

    // 4. Narrow type to never (no other cases possible)
    else {
      console.log(`${x} is type never here`);
    }
  }

  // 5. Call function with string
  neverExample("abc");
  // value: abc | typeof: string
  // new value: ABC | typeof: string

  // 6. Call function with number
  neverExample(123.123);
  // value: 123.123 | typeof: number
  // new value: 123.12 | typeof: string

  // 7. Error demonstration
  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
  // neverExample(true);
})();
