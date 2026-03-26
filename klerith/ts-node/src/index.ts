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
const cubone = new PokemonAPI("Cubone");

console.log(cubone); // PokemonAPI {name: 'Cubone', publicAPI: 'https://pokeapi.co'}
console.log(typeof cubone); // object
