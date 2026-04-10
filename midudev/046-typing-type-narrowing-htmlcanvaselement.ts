// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 046 Type Narrowing for HTMLCanvasElement

(() => {
  // 1. getElementById returns HTMLElement | null
  const myCanvas = document.getElementById("canvas");

  // 2. Invalid direct access (possible null)
  // Error: 'myCanvas' is possibly 'null'.
  // const ctx1 = myCanvas.getContext("2d");

  // 3. Invalid optional chaining (wrong type)
  // Error: Property 'getContext' does not exist on type 'HTMLElement'.
  // const ctx2 = myCanvas?.getContext("2d");

  // 4. Invalid null check (still HTMLElement type)
  // Error: Property 'getContext' does not exist on type 'HTMLElement'.
  // if (myCanvas != null) {
  //   const ctx3 = myCanvas.getContext("2d");
  // }
})();
