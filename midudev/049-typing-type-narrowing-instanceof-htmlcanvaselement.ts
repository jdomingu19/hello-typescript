// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 049 Type Narrowing with instanceof

// 1. getElementById returns HTMLElement | null
const myCanvas = document.getElementById("button");

// 2. Narrow type by checking against null and using instanceof
if (myCanvas != null && myCanvas instanceof HTMLCanvasElement) {
  // 3. TypeScript now infers myCanvas as HTMLCanvasElement
  const ctx = myCanvas.getContext("2d");
}
