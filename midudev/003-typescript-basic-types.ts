// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 003 TypeScript Basic Types

(() => {
  // 1. Declare variables with type annotations
  let myString: string = "Hello, TypeScript!";

  let myNumber: number = 42;

  let myBigInt: bigint = 1231234567890123456789012345n;

  let myBoolean: boolean = true;

  let myObject = { name: "Jesús", age: 21, alias: "@jdomingu19" };

  let myUndefined: undefined;

  let mySymbol: symbol = Symbol("Symbol123");

  let myNull: null = null;

  let myArray: any[] = ["abc", 123, true, null, undefined, NaN];

  // 2. Display values and typeof results
  console.log(`value: ${myString}`); // Hello, TypeScript!
  console.log(`typeof: ${typeof myString}`); // string

  console.log(`value: ${myNumber}`); // 42
  console.log(`typeof: ${typeof myNumber}`); // number

  console.log(`value: ${myBigInt}`); // 1231234567890123456789012345
  console.log(`typeof: ${typeof myBigInt}`); // bigint

  console.log(`value: ${myBoolean}`); // true
  console.log(`typeof: ${typeof myBoolean}`); // boolean

  console.log(`value: ${myObject}`); // [object Object]
  console.log(`typeof: ${typeof myObject}`); // object

  console.log(`value: ${myUndefined}`); // undefined
  console.log(`typeof: ${typeof myUndefined}`); // undefined

  // Error: Implicit conversion of a 'symbol' to a 'string' will fail at runtime.
  // Consider wrapping this expression in 'String(...)'.
  // console.log(`value: ${mySymbol}`);
  console.log(`value: ${mySymbol.toString()}`); // Symbol(Symbol123)
  console.log(`typeof: ${typeof mySymbol}`); //symbol

  console.log(`value: ${myNull}`); // null
  console.log(`typeof: ${typeof myNull}`); // object

  console.log(`value: ${myArray}`); // abc,123,true,,,NaN
  console.log(`typeof: ${typeof myArray}`); // object

  // 3. Iterate variables with for-of loop
  let myVariables: any[] = [
    myString,
    myNumber,
    myBigInt,
    myBoolean,
    myObject,
    myUndefined,
    mySymbol,
    myNull,
    myArray,
  ];

  for (const variable of myVariables) {
    console.log(
      `(for of) value: ${typeof variable !== "symbol" ? variable : variable.toString()}`,
    ); //  (for of) value: ...
    console.log(`(for of) typeof: ${typeof variable}`); //  (for of) typeof: ...
  }
})();
