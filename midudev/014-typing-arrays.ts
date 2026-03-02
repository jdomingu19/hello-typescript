// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 014 Typing Arrays

// 1. Array with inferred type string[]
const names1 = ["Jesús", "John", "Joseph"];

names1.forEach((name) => {
  console.log(`arrow function: ${name.toUpperCase()}`); // JESÚS, JOHN, JOSEPH
});

names1.forEach(function (name) {
  console.log(`function: ${name.toUpperCase()}`); // JESÚS, JOHN, JOSEPH
});

// 2. Array with explicit type annotation string[]
const names2: string[] = ["Jesús", "John", "Joseph"];

names2.forEach((name) => {
  console.log(`arrow function: ${name.toUpperCase()}`); // JESÚS, JOHN, JOSEPH
});

names2.forEach(function (name) {
  console.log(`function: ${name.toUpperCase()}`); // JESÚS, JOHN, JOSEPH
});
