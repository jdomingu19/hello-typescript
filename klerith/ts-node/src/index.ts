// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/index.ts

// --- Class 88: Async Generics with Promises ---
// Demonstrating how to use async functions with generics
// and handle Promises with then/catch/finally.

import { getPokemon } from "./generics/get-pokemon";

// Example with no arguments (commented out for clarity)
// getPokemon(); // Hello, Pokemon!

// Example with synchronous logging (commented out)
// console.log(getPokemon());
// // Hello, Pokemon!
// // 1

// Example with Promise handling (commented out)
// getPokemon() // Hello, Pokemon!
//   .then((resp) => console.log(resp)) // Promise {<fulfilled>: 1}
//   .catch((error) => console.log(error)) // Error: Something went wrong...
//   .finally(() => console.log("Finished")); // Finished

// Fetching Charizard (ID: 6)
getPokemon(6)
  .then((resp) => console.log(resp)) // { data: { ... }, status: 200, statusText: '', headers: AxiosHeaders, config: { ... },  ... }
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished")); // Finished

// Fetching Pikachu (ID: 25)
getPokemon(25)
  .then((resp) => console.log(resp)) // { data: { ... }, status: 200, statusText: '', headers: AxiosHeaders, config: { ... },  ... }
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished")); // Finished

// Fetching Cubone (ID: 104 )
getPokemon(104)
  .then((resp) => console.log(resp)) // { data: { ... }, status: 200, statusText: '', headers: AxiosHeaders, config: { ... },  ... }
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished")); // Finished
