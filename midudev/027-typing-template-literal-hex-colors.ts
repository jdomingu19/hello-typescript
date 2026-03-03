// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 027 Template Literal Types for Hexadecimal Colors

// 1. Define template literal type for hexadecimal color strings
type HexadecimalColor = `#${string}`;

// 2. Invalid assignment without '#' prefix
// Error: Type '"006152"' is not assignable to type '`#${string}`'.
// const color1: HexadecimalColor = "006152";

// 3. Valid assignments with '#' prefix
const color1: HexadecimalColor = "#006152";
const color2: HexadecimalColor = "#006152";

// 4. Log values and inspect type
console.log(color1); // #006152
console.log(typeof color1); // string

console.log(color2); // #006152
console.log(typeof color2); // string
