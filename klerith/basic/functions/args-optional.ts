// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// functions/args-optional.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 30: Optional Function Arguments ---

  // 1. Function with optional parameter
  // - lastName is optional (may be undefined)
  // - On editor hover => const fullName: (firstName: string, lastName?: string | undefined) => string
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName}`;
  };

  console.log(fullName); // [Function: fullName]
  console.log(typeof fullName); // function

  // Call with both arguments
  const userFullName = fullName("Jesús", "Domínguez");

  console.log({ userFullName }); // { userFullName: 'Jesús Domínguez' }
  console.log(typeof userFullName); // string

  // Error: Expected 1-2 arguments, but got 0.
  // const userFullName3 = fullName();

  // Call with only firstName
  const userFullName3 = fullName("Jesús");

  console.log({ userFullName3 }); // { userFullName3: 'Jesús undefined' }
  console.log(typeof userFullName3); // string

  // 2. Function with optional parameter and default value
  // - If lastName is undefined, use "---" instead
  // - On editor hover => const fullNameDefault: (firstName: string, lastName?: string | undefined) => string
  const fullNameDefault = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "---"}`;
  };

  console.log(fullNameDefault); // [Function: fullNameDefault]
  console.log(typeof fullNameDefault); // function

  // Call with both arguments
  const userFullName4 = fullNameDefault("Jesús", "Domínguez");

  console.log({ userFullName4 }); // { userFullName4: 'Jesús Domínguez' }
  console.log(typeof userFullName4); // string

  // Error: Expected 1-2 arguments, but got 0.
  // const userFullName5 = fullNameDefault();

  // Call with only firstName
  const userFullName6 = fullNameDefault("Jesús");

  console.log({ userFullName6 }); // { userFullName6: 'Jesús ---' }
  console.log(typeof userFullName6); // string

  // 3. Function with explicit undefined check
  // - Uses conditional logic to handle missing lastName
  // - On editor hover => const fullNameDefault2: (firstName: string, lastName?: string | undefined) => string
  const fullNameDefault2 = (firstName: string, lastName?: string): string => {
    // if (typeof lastName === "undefined") {
    //   return firstName;
    // } else {
    //   return `${firstName} ${lastName}`;
    // }
    let username =
      typeof lastName === "undefined" ? firstName : `${firstName} ${lastName}`;
    return username;
  };

  console.log(fullNameDefault2); // [Function: fullNameDefault2]
  console.log(typeof fullNameDefault2); // function

  // Call with both arguments
  const userFullName7 = fullNameDefault2("Jesús", "Domínguez");

  console.log({ userFullName7 }); // { userFullName7: 'Jesús Domínguez' }
  console.log(typeof userFullName7); // string

  // Error: Expected 1-2 arguments, but got 0.
  // const userFullName8 = fullNameDefault();

  // Call with only firstName
  const userFullName9 = fullNameDefault2("Jesús");

  console.log({ userFullName9 }); // { userFullName9: 'Jesús' }
  console.log(typeof userFullName9); // string

  // 4. Function with optional numeric parameters (any type)
  // - On editor hover => const addNumbers: (a?: any, b?: any, c?: any) => any
  const addNumbers = (
    a?: number | any,
    b?: number | any,
    c?: number | any,
  ): number | any => {
    return a + b + c;
  };

  console.log(addNumbers()); // NaN
  console.log(addNumbers(1)); // NaN
  console.log(addNumbers(1, 2)); // NaN
  console.log(addNumbers(1, 2, 3)); // 6

  // 5. Function with default values using 'undefined as any'
  // - On editor hover => const addNumbers2: (a?: number, b?: number, c?: number) => number
  const addNumbers2 = (
    a: number = undefined as any,
    b: number = undefined as any,
    c: number = undefined as any,
  ): number => {
    return a + b + c;
  };

  console.log(addNumbers2()); // NaN
  console.log(addNumbers2(1)); // NaN
  console.log(addNumbers2(1, 2)); // NaN
  console.log(addNumbers2(1, 2, 3)); // 6

  // 6. Function with nullish coalescing operator
  // - On editor hover => const addNumbers3: (a?: number | undefined, b?: number | undefined, c?: number | undefined) => number
  const addNumbers3 = (a?: number, b?: number, c?: number): number => {
    return (
      (a ?? (undefined as any)) +
      (b ?? (undefined as any)) +
      (c ?? (undefined as any))
    );
  };

  console.log(addNumbers3()); // NaN
  console.log(addNumbers3(1)); // NaN
  console.log(addNumbers3(1, 2)); // NaN
  console.log(addNumbers3(1, 2, 3)); // 6

  // 7. Function with explicit undefined type in parameters
  // - On editor hover => const addNumbers4: (a?: number | undefined, b?: number | undefined, c?: number | undefined) => number
  const addNumbers4 = (
    a?: number | undefined,
    b?: number | undefined,
    c?: number | undefined,
  ) => {
    return (
      (a ?? (undefined as any)) +
      (b ?? (undefined as any)) +
      (c ?? (undefined as any))
    );
  };

  console.log(addNumbers4()); // NaN
  console.log(addNumbers4(1)); // NaN
  console.log(addNumbers4(1, 2)); // NaN
  console.log(addNumbers4(1, 2, 3)); // 6
})();
