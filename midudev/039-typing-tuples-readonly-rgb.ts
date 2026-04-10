// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 039 Readonly Tuples for RGB Colors

(() => {
  // 1. Define tuple type with readonly modifier
  type RGB = readonly [number, number, number];

  // 2. Valid assignments with exactly three numbers
  const blackColor: RGB = [0, 0, 0];
  const whiteColor: RGB = [255, 255, 255];

  // 3. Invalid assignment with empty array
  // Error: Type '[]' is not assignable to type 'RGB'.
  //   Source has 0 element(s) but target requires 3.
  // const blackColor: RGB = [];
  // const whiteColor: RGB = [];

  // 4. Invalid mutation with push (readonly prevents modification)
  // Property 'push' does not exist on type 'RGB'.
  // blackColor.push(0);
  // whiteColor.push(255);
})();
