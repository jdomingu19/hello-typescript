// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 050 Type Narrowing with instanceof (Concise)

// 1. getElementById returns HTMLElement | null
const myCanvas = document.getElementById("button");

// 2. Use instanceof directly (no need for explicit null check)
// TypeScript automatically excludes null when using instanceof
if (myCanvas instanceof HTMLCanvasElement) {
  // 3. TypeScript infers myCanvas as HTMLCanvasElement
  const ctx = myCanvas.getContext("2d");
}
