// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/void.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 22: Void ---

  // 1. Function without return type
  // - Inferred as (): void
  // - Returns undefined implicitly
  // - On editor hover => (local function) myFunction1(): void
  function myFunction1() {}

  console.log({ myFunction1 }); // { myFunction1: [Function: myFunction1] }
  console.log(typeof myFunction1); // function

  const a = myFunction1();

  console.log({ a }); // { a: undefined }
  console.log(typeof a); // undefined

  // 2. Arrow function without return type
  // - Inferred as (): void
  // - Returns undefined implicitly
  // - On editor hover => const myFunction2: () => void
  const myFunction2 = () => {};

  console.log({ myFunction2 }); // { myFunction2: [Function: myFunction2] }
  console.log(typeof myFunction2); // function

  const b = myFunction2();

  console.log({ b }); // { b: undefined }
  console.log(typeof b); // undefined

  // 3. Function explicitly annotated with void
  // - Equivalent to no return
  // - On editor hover => (local function) myFunction3(): void
  function myFunction3(): void {}

  console.log({ myFunction3 }); // { myFunction3: [Function: myFunction3] }
  console.log(typeof myFunction3); // function

  const c = myFunction3();

  console.log({ c }); // { c: undefined }
  console.log(typeof c); // undefined

  // 4. Arrow function explicitly annotated with void
  // - On editor hover => const myFunction4: () => void
  const myFunction4 = (): void => {};

  console.log({ myFunction4 }); // { myFunction4: [Function: myFunction4] }
  console.log(typeof myFunction4); // function

  const d = myFunction4();

  console.log({ d }); // { d: undefined }
  console.log(typeof d); // undefined

  // 5. Function with explicit return statement but no value
  // - Still returns undefined
  // - On editor hover => (local function) myFunction5(): void
  function myFunction5() {
    return;
  }

  console.log({ myFunction5 }); // { myFunction5: [Function: myFunction5] }
  console.log(typeof myFunction5); // function

  const e = myFunction5();

  console.log({ e }); // { e: undefined }
  console.log(typeof e); // undefined

  // 6. Arrow function with explicit return but no value
  // - On editor hover => const myFunction6: () => void
  const myFunction6 = () => {
    return;
  };

  console.log({ myFunction6 }); // { myFunction6: [Function: myFunction6] }
  console.log(typeof myFunction6); // function

  const f = myFunction6();

  console.log({ f }); // { f: undefined }
  console.log(typeof f); // undefined

  // 7. Function annotated with void and explicit return
  // - On editor hover => (local function) myFunction7(): void
  function myFunction7(): void {
    return;
  }

  console.log({ myFunction7 }); // { myFunction7: [Function: myFunction7] }
  console.log(typeof myFunction7); // function

  const g = myFunction7();

  console.log({ g }); // { g: undefined }
  console.log(typeof g); // undefined

  // 8. Arrow function annotated with void and explicit return
  // - On editor hover => const myFunction8: () => void
  const myFunction8 = (): void => {
    return;
  };

  console.log({ myFunction8 }); // { myFunction8: [Function: myFunction8] }
  console.log(typeof myFunction8); // function

  const h = myFunction8();

  console.log({ h }); // { h: undefined }
  console.log(typeof h); // undefined

  // 9. Function returning undefined explicitly
  // - Allowed because void accepts undefined
  // - On editor hover => (local function) myFunction9(): void
  function myFunction9(): void {
    return undefined;
  }

  console.log({ myFunction9 }); // { myFunction9: [Function: myFunction9] }
  console.log(typeof myFunction9); // function

  const i = myFunction7();

  console.log({ i }); // { i: undefined }
  console.log(typeof i); // undefined

  // 10. Arrow function returning undefined explicitly
  // - On editor hover => const myFunction10: () => void
  const myFunction10 = (): void => {
    return undefined;
  };

  console.log({ myFunction10 }); // { myFunction10: [Function: myFunction10] }
  console.log(typeof myFunction10); // function

  const j = myFunction10();

  console.log({ j }); // { j: undefined }
  console.log(typeof j); // undefined

  // 11. Function returning null
  // - Error: Type 'null' is not assignable to type 'void'.
  // - On editor hover => (local function) myFunction9(): void
  // function myFunction11(): void {
  //   return null;
  // }

  // 12. Arrow function returning null
  // - Error: Type 'null' is not assignable to type 'void'.
  // - On editor hover => const myFunction12: () => void
  // const myFunction12 = (): void => {
  //   return null;
  // };

  // 13. Comparison between undefined and null
  // - == considers them equal
  // - === distinguishes them
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  console.log(undefined != null); // false
  console.log(undefined !== null); // true
})();
