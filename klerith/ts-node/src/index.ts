// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/index.ts

// --- Class 94: Class Decorators ---

import { PokemonAPI } from "./decorators/pokemon-class";

/**
 * Example usage of the `PokemonAPI` class with decorators enabled.
 *
 * @remarks
 * - Instantiates a new `PokemonAPI` object with the name "Cubone".
 * - Logs the object and its type to the console.
 * - Demonstrates how decorators execute at class definition time,
 *   while the instance behaves normally at runtime.
 */
// const cubone = new PokemonAPI("Cubone");

// console.log(cubone); // PokemonAPI {name: 'Cubone', publicAPI: 'https://pokeapi.co'}
// console.log(typeof cubone); // object

// --- Class 96: Block a Prototype ---

// Logs the prototype object of the class
// console.log(PokemonAPI.prototype); // { constructor: class PokemonAPI, [[Prototype]]: Object }
// console.log(typeof PokemonAPI.prototype); // object

// Attempting to add a new property to a sealed prototype
// Error: Property 'sprites' does not exist on type 'PokemonAPI'.
// PokemonAPI.prototype.sprites = {
//   front_default:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
// };

// Runtime error: Uncaught TypeError: Cannot add property sprites, object is not extensible
// (PokemonAPI.prototype as any).sprites = {
//   front_default:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
// };

// --- Class 97: Method Decorators ---

// Without validation (commented out for clarity)
// cubone.savePokemonToDatabase(104); // Pokemon saved to database successfully! 104
// cubone.savePokemonToDatabase(-104); // Pokemon saved to database successfully! -104

// With validation using method decorators
// cubone.savePokemonToDatabase(104); // Pokemon saved to database successfully! 104
// cubone.savePokemonToDatabase(-104); // Invalid Pokemon ID. Must be between 1 and 800...

// --- Class 98: Property Decorators ---

const cubone = new PokemonAPI("Cubone");

console.log(cubone); // PokemonAPI {name: 'Cubone', publicAPI: 'https://pokeapi.co'}
console.log(typeof cubone); // object
cubone.savePokemonToDatabase(104); // Pokemon saved to database successfully! 104

// Using just private keyword on class
// Even though publicAPI is private you can change its value at runtime
// cubone.publicAPI = "https://github.com";

// Using property decorators
// Runtime error: Uncaught TypeError: Cannot assign to read only property 'publicAPI' of object '#<PokemonAPI>'
// cubone.publicAPI = "https://github.com";
