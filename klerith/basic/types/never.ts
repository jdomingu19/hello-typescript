// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/never.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 23: Never ---

  // 1. Function declared to return never but with reachable end point
  // - Error: A function returning 'never' cannot have a reachable end point.
  // - On editor hover => const myFunction1: () => never
  // const myFunction1 = (): never => {};

  // 2. Function that always throws an error
  // - Correct usage of never: function never returns a value
  // - On editor hover => const myFunction2: (message: string) => never
  const myFunction2 = (message: string): never => {
    throw new Error(message);
  };

  // Uncaught Error if not handled
  try {
    myFunction2("Something went wrong!");
  } catch (error) {
    console.log(error); // Error: Something went wrong!
  }

  // 3. Function with condition that never executes
  // - Error: A function returning 'never' cannot have a reachable end point.
  // - On editor hover => const myFunction3: (message: string) => never
  // const myFunction3 = (message: string): never => {
  //   if (false) {
  //     throw new Error(message);
  //   }
  // };

  // 4. Function returning undefined with never type
  // - Error: Type 'undefined' is not assignable to type 'never'.
  // - On editor hover => const myFunction4: (message: string) => never
  // const myFunction4 = (message: string): never => {
  //   if (false) {
  //     throw new Error(message);
  //   }
  //   return;
  // };

  // 5. Function returning undefined explicitly with never type
  // - Error: Type 'undefined' is not assignable to type 'never'.
  // - On editor hover => const myFunction5: (message: string) => never
  // const myFunction5 = (message: string): never => {
  //   if (false) {
  //     throw new Error(message);
  //   }
  //   return undefined;
  // };

  // 6. Function with union return type never | undefined
  // - On editor hover => const myFunction6: (message: string) => undefined
  const myFunction6 = (message: string): never | undefined => {
    if (false) {
      throw new Error(message);
    }
    return;
  };

  console.log(myFunction6("Something went wrong!")); // undefined
  console.log(typeof myFunction6("Something went wrong!")); // undefined

  // 7. Function with union return type never | void
  // - On editor hover => const myFunction7: (message: string) => void
  const myFunction7 = (message: string): never | void => {
    if (false) {
      throw new Error(message);
    }
    return;
  };

  console.log(myFunction7("Something went wrong!")); // undefined
  console.log(typeof myFunction7("Something went wrong!")); // undefined

  // 8. Function with union return type never | number
  // - On editor hover => const myFunction8: (message: string) => number
  const myFunction8 = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  console.log(myFunction8("Something went wrong!")); // 1
  console.log(typeof myFunction8("Something went wrong!")); // number
})();
