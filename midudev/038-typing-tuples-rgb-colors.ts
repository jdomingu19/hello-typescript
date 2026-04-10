// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 038 Tuples for RGB Colors

(() => {
  // 1. Define tuple type for RGB values
  type RGB = [number, number, number];

  // 2. Invalid assignment with wrong types
  // Error: Type 'string' is not assignable to type 'number'.
  // const rgb1: RGB = ["1", 2, 3];

  // 3. Invalid assignment with too many elements
  // Error: Type '[number, number, number, number]' is not assignable to type 'RGB'.
  //  Source has 4 element(s) but target allows only 3.
  // const rgb2: RGB = [1, 2, 3, 4];

  // 4. Valid assignment with exactly three numbers
  const rgb3: RGB = [0, 97, 82];

  // 5. Log tuple and inspect type
  console.log(rgb3); // [ 0, 97, 82 ]
  console.log(typeof rgb3); // object

  // 6. Destructure tuple into individual values
  const [red, green, blue] = rgb3;

  console.log(`R: ${red}, G: ${green}, B: ${blue},`);

  // 7. Function converting RGB tuple to hexadecimal string
  function toHex([r, g, b]: RGB): string {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }

  // 8. Use function with tuple
  let hexColor = toHex(rgb3);

  // 9. Log hexadecimal color and inspect type
  console.log(hexColor); // #06152
  console.log(typeof hexColor); // object
})();
