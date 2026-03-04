// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 047 Type Assertion for HTMLCanvasElement

// 1. Use type assertion to tell TypeScript that the element is a canvas
const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;

// 2. Now TypeScript knows the element is a HTMLCanvasElement
const ctx = myCanvas.getContext("2d");
