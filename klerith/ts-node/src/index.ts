// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/index.ts

// --- Class 79: Imports & Exports ---
import { Hero } from "./classes/Hero";

/**
 * Example hero instance representing Link.
 * @remarks
 * - Shows how to import and use a class from another file.
 * - Demonstrates object instantiation and property access.
 */
const link: Hero = new Hero("Link", 21, ["Courage"]);

// --- Usage example ---

// Class reference
console.log(Hero); // class Hero { ... }
console.log(typeof Hero); // function

// Object instance
console.log(link); // Hero { name: 'Link', age: 21, powers: Array(1) }
console.log(typeof link); // object

// Property access
console.log(link.name); // Link
console.log(typeof link.name); // string

console.log(link.age); // 21
console.log(typeof link.age); // number

console.log(link.powers); // ['Courage']
console.log(typeof link.powers); // object
