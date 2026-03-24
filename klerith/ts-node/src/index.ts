// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/index.ts

// --- Class 79: Imports & Exports ---
// import { Hero } from "./classes/Hero";

// --- Class 80: export default & export with alias ---
// import { Hero as LinkHero } from "./classes/Hero";
// import { Hero, Hero2, Hero3, Hero4, USERNAME } from "./classes/Hero";
import * as HeroClasses from "./classes/Hero";
// import { powers } from "./helpers/powers";
// import powersArray from "./helpers/powers";
// import { PowerInterface } from "./helpers/powers";
import powersArray, { PowerInterface } from "./helpers/powers";

/**
 * Example hero instance representing Link.
 * @remarks
 * - Shows how to import and use a class from another file.
 * - Demonstrates object instantiation and property access.
 */
const link: HeroClasses.Hero = new HeroClasses.Hero("Link", 21, ["Courage"]);
// const link: LinkHero = new LinkHero("Link", 21, ["Courage"]);

// --- Usage example ---

// Class reference
console.log(HeroClasses.Hero); // class Hero { ... }
console.log(typeof HeroClasses.Hero); // function

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

// Namespace-like import reference
console.log(HeroClasses); // { USERNAME: '@jdomingu19', Hero: ƒ, Hero2: ƒ, Hero3: ƒ, Hero4: ƒ, ... }
console.log(typeof HeroClasses); // object

// Iterating over exported members
for (const x in HeroClasses) {
  console.log(x);
  // Hero
  // Hero2
  // Hero3
  // Hero4
  // USERNAME
}

// Accessing individual exports
console.log(HeroClasses.Hero); // class Hero { ... }
console.log(typeof HeroClasses.Hero); // function

console.log(HeroClasses.Hero2); // class Hero2 { ... }
console.log(typeof HeroClasses.Hero2); // function

console.log(HeroClasses.Hero3); // class Hero3 { ... }
console.log(typeof HeroClasses.Hero3); // function

console.log(HeroClasses.Hero4); // class Hero4 { ... }
console.log(typeof HeroClasses.Hero4); // function

console.log(HeroClasses.USERNAME); // @jdomingu19
console.log(typeof HeroClasses.USERNAME); // string

// Default export usage example
console.log(powersArray); // (3) [{ ... }, { ... }, { ... }]
console.log(typeof powersArray); // object

for (const power of powersArray) {
  console.log(power);
  // {id: 0, description: 'Power'}
  // {id: 1, description: 'Wisdom'}
  // {id: 2, description: 'Courage'}
}
