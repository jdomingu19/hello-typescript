// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 048 Type Narrowing with Null Check and Assertion

// 1. getElementById returns HTMLElement | null
const myCanvas = document.getElementById("canvas");

// 2. Narrow type by checking against null
if (myCanvas != null) {
  // 3. Use type assertion to treat element as HTMLCanvasElement
  const ctx = (myCanvas as HTMLCanvasElement).getContext("2d");
}
