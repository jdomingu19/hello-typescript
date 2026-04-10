// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 034 Typing Empty Arrays

(() => {
  // 1. Empty array without explicit type (inferred as never[])
  const emptyArray1 = [];

  // Error: Argument of type '"TypeScript"' is not assignable to parameter of type 'never'.
  // emptyArray1.push("TypeScript");

  // 2. Explicitly typed as never[]
  const emptyArray2: never[] = [];

  console.log(emptyArray2); // []
  console.log(typeof emptyArray2); // object

  // Error: Argument of type '"TypeScript"' is not assignable to parameter of type 'never'.
  // emptyArray2.push("TypeScript");

  // 3. Explicitly typed as string[]
  const emptyArray3: string[] = [];

  emptyArray3.push("TypeScript");
  emptyArray3.push("Node.js");
  emptyArray3.push("React");

  console.log(emptyArray3); // [ 'TypeScript', 'Node.js', 'React' ]
  console.log(typeof emptyArray3); // object

  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  // emptyArray3.push(123);

  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
  // emptyArray3.push(true);

  // 4. Explicitly typed as Array<string>
  const emptyArray4: Array<string> = [];

  emptyArray4.push("TypeScript");
  emptyArray4.push("Node.js");
  emptyArray4.push("React");

  console.log(emptyArray4); // [ 'TypeScript', 'Node.js', 'React' ]
  console.log(typeof emptyArray4); // object

  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  // emptyArray4.push(123);

  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
  // emptyArray4.push(true);

  // 5. Union type array (string | number)[]
  const emptyArray5: (string | number)[] = [];

  emptyArray5.push("TypeScript");
  emptyArray5.push(123);
  emptyArray5.push("Node.js");
  emptyArray5.push(456);

  console.log(emptyArray5); // [ 'TypeScript', 123, 'Node.js', 456 ]
  console.log(typeof emptyArray5); // object

  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
  // emptyArray5.push(true);

  // 6. Union type array with generic syntax Array<string | number>
  const emptyArray6: Array<string | number> = [];

  emptyArray6.push("TypeScript");
  emptyArray6.push(123);
  emptyArray6.push("Node.js");
  emptyArray6.push(456);

  console.log(emptyArray6); // [ 'TypeScript', 123, 'Node.js', 456 ]
  console.log(typeof emptyArray6); // object

  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
  // emptyArray6.push(true);
})();
