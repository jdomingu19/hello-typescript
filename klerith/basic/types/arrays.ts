// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/arrays.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 19: Arrays ---

  // 0. Utility function to clear arrays
  // - Removes all elements using pop() until empty
  // - Accepts any[] and returns void
  function clearArray(array: any[]): void {
    let i = array.length;
    while (i >= 0) {
      array.pop();
      i--;
    }
    return;
  }

  // 1. Array of numbers inferred
  // - TypeScript infers number[] from numeric literals
  // - On editor hover => let myArray1: number[]
  let myArray1 = [1, 2, 3, 4, 5];

  console.log({ myArray1 }); // { myArray1: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray1); // object

  // 2. Array of strings inferred
  // - TypeScript infers string[] from string literals
  // - On editor hover => let myArray2: string[]
  let myArray2 = ["a", "b", "c"];

  console.log({ myArray2 }); // { myArray2: [ 'a', 'b', 'c' ] }
  console.log(typeof myArray2); // object

  // 3. Mixed array inferred
  // - TypeScript infers (string | number)[]
  // - On editor hover => let myArray3: (string | number)[]
  let myArray3 = ["1", 2, "3", 4, "5"];

  console.log({ myArray3 }); // { myArray3: [ '1', 2, '3', 4, '5' ] }
  console.log(typeof myArray3); // object

  // 4. Explicit number[] annotation
  // - Only allows numeric values
  // - On editor hover => let myArray4: number[]
  let myArray4: number[] = [1, 2, 3, 4, 5];

  console.log({ myArray4 }); // { myArray4: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray4); // object

  // Ok
  myArray4 = [6, 7, 8, 9, 10];
  console.log({ myArray4 }); // { myArray4: [ 6, 7, 8, 9, 10 ] }
  console.log(typeof myArray4); // object

  // Error: Type 'string' is not assignable to type 'number'.
  // myArray4 = ["a", "b", "c"];

  // 5. Explicit string[] annotation
  // - Only allows string values
  // - On editor hover => let myArray5: number[]
  let myArray5: string[] = ["a", "b", "c"];

  console.log({ myArray5 }); // { myArray5: [ 'a', 'b', 'c' ] }
  console.log(typeof myArray5); // object

  // Ok
  myArray5 = ["d", "e", "f"];
  console.log({ myArray5 }); // { myArray5: [ 'd', 'e', 'f' ] }
  console.log(typeof myArray5); // object

  // Error: Type 'number' is not assignable to type 'string'.
  // myArray5 = [1, 2, 3, 4, 5];

  // 6. Union of arrays
  // - Can be either number[] or string[]
  // - On editor hover => let myArray6: number[] | string[]
  let myArray6: number[] | string[] = [1, 2, 3, 4, 5];

  console.log({ myArray6 }); // { myArray6: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray6); // object

  // Ok
  myArray6 = ["a", "b", "c"];
  console.log({ myArray6 }); // { myArray6: [ 'a', 'b', 'c' ] }
  console.log(typeof myArray6); // object

  // Error:
  // Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
  //  Type '(string | number)[]' is not assignable to type 'number[]'.
  //    Type 'string | number' is not assignable to type 'number'.
  //      Type 'string' is not assignable to type 'number'.
  // myArray6 = [1, 2, 3, "a", "b", "c"];

  // 7. Array of union types
  // - Each element can be number or strings
  // - On editor hover => let myArray7: (number | string)[]
  let myArray7: (number | string)[] = [1, 2, 3, 4, 5];

  console.log({ myArray7 }); // { myArray7: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray7); // object

  // Ok
  myArray7 = ["a", "b", "c"];
  console.log({ myArray7 }); // { myArray7: [ 'a', 'b', 'c' ] }
  console.log(typeof myArray7); // object

  // Ok
  myArray7 = [1, 2, 3, "a", "b", "c"];
  console.log({ myArray7 }); // { myArray7: [ 1, 2, 3, 'a', 'b', 'c' ] }
  console.log(typeof myArray7); // object

  // 8. Constant array of numbers inferred
  // - On editor hover => const myArray8: number[]
  const myArray8 = [1, 2, 3, 4, 5];

  console.log({ myArray8 }); // { myArray8: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray8); // object

  // 9. Constant array of strings inferred
  // - On editor hover => const myArray9: string[]
  const myArray9 = ["a", "b", "c"];

  console.log({ myArray9 }); // { myArray9: [ 'a', 'b', 'c' ] }
  console.log(typeof myArray9); // object

  // 10. Constant mixed array inferred
  // - On editor hover => const myArray10: (string | number)[]
  const myArray10 = ["1", 2, "3", 4, "5"];

  console.log({ myArray10 }); // { myArray10: [ '1', 2, '3', 4, '5' ] }
  console.log(typeof myArray10); // object

  // 11. Constant with explicit number[]
  // - On editor hover => const myArray11: number[]
  const myArray11: number[] = [1, 2, 3, 4, 5];

  console.log({ myArray11 }); // { myArray11: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray11); // object

  // Ok
  clearArray(myArray11);
  myArray11.push(6, 7, 8, 9, 10);

  console.log({ myArray11 }); // { myArray11: [ 6, 7, 8, 9, 10 ] }
  console.log(typeof myArray11); // object

  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  // myArray11.push("a", "b", "c");

  // 12. Constant with explicit string[]
  // - On editor hover => const myArray12: number[]
  const myArray12: string[] = ["a", "b", "c"];

  console.log({ myArray12 }); // { myArray12: [ 'a', 'b', 'c' ] }
  console.log(typeof myArray12); // object

  // Ok
  clearArray(myArray12);
  myArray12.push("d", "e", "f");

  console.log({ myArray12 }); // { myArray12: [ 'd', 'e', 'f' ] }
  console.log(typeof myArray12); // object

  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  // myArray12.push(1, 2, 3, 4, 5);

  // 13. Constant with union of arrays
  // - On editor hover => const myArray13: number[] | string[]
  const myArray13: number[] | string[] = [1, 2, 3, 4, 5];

  console.log({ myArray13 }); // { myArray13: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray13); // object

  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  // myArray13.push("a", "b", "c");

  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  // myArray13.push(1, 2, 3, "a", "b", "c");

  // 14. Constant with array of union types
  // - On editor hover => const myArray14: (number | string)[]
  const myArray14: (number | string)[] = [1, 2, 3, 4, 5];

  console.log({ myArray14 }); // { myArray14: [ 1, 2, 3, 4, 5 ] }
  console.log(typeof myArray14); // object

  // Ok
  clearArray(myArray14);

  myArray14.push("a", "b", "c");
  console.log({ myArray14 }); // { myArray14: [ 'a', 'b', 'c' ] }
  console.log(typeof myArray14); // object

  // Ok
  clearArray(myArray14);
  myArray14.push(1, 2, 3, "a", "b", "c");

  console.log({ myArray14 }); // { myArray14: [ 1, 2, 3, 'a', 'b', 'c' ] }
  console.log(typeof myArray14); // object

  // 15. Iterating arrays with forEach
  // - Callback receives element, index, and array
  // - On editor hover => const stringArray: string[]
  const stringArray: string[] = ["a", "b", "c"];

  // - On editor hover => callbackfn: (value: string, index: number, array: string[]) => void
  stringArray.forEach((name) => {
    console.log(name.toLocaleUpperCase()); // A, B, C, ...
  });

  // - On editor hover => const numberArray: number[]
  const numberArray: number[] = [1, 2, 3, 4, 5];

  // - On editor hover => callbackfn: (value: number, index: number, array: number[]) => void
  numberArray.forEach((name) => {
    console.log(name.toFixed(1)); // 1.0, 2.0, 3.0, 4.0, 5.0 ...
  });
})();
