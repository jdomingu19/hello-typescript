// Hello, TypeScript! @jdomingu19
// Playground 003: Convert String Into a Number

// 1. Convert string to number using unary plus operator
console.log("123"); // "123"
console.log(typeof "123"); // string

console.log(+"123"); // 123
console.log(typeof +"123"); // number

// 2. Convert string to number using Number() constructor
console.log("123"); // "123"
console.log(typeof "123"); // string

console.log(Number("123")); // 123
console.log(typeof Number("123")); // number

// 3. Parse integer from string using parseInt with radix 10
console.log("123.456"); // "123.456"
console.log(typeof "123.456"); // string

console.log(parseInt("123.456")); // 123
console.log(typeof parseInt("123.456")); // number

// 4. Parse floating-point number from string using parseFloat
console.log("123.456"); // "123.456"
console.log(typeof "123.456"); // string

console.log(parseFloat("123.456")); // 123.456
console.log(typeof parseFloat("123.456")); // number

// 5. Example of invalid conversion returning NaN
console.log("abc"); // "abc"
console.log(typeof "abc"); // string

console.log(+"abc"); // NaN
console.log(typeof +"abc"); // number

console.log(Number("abc")); // NaN
console.log(typeof Number("abc")); // number

console.log(parseInt("abc")); // NaN
console.log(typeof parseInt("abc")); // number

console.log(parseFloat("abc")); // NaN
console.log(typeof parseFloat("abc")); // number

// 6. Demonstrate how different parsing methods handle non‑numeric strings with extra characters
console.log("123px"); // "123px"
console.log(typeof "123px"); // string

console.log(+"123px"); // NaN
console.log(typeof +"123px"); // number

console.log(Number("123px")); // NaN
console.log(typeof Number("123px")); // number

console.log(parseInt("123px")); // 123
console.log(typeof parseInt("123px")); // number

console.log(parseFloat("123px")); // 123
console.log(typeof parseFloat("123px")); // number
