// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/generics/get-pokemon.ts

// --- Class 88: Async Generics with Promises ---
// Demonstrating how to use async functions with generics
// and handle Promises with then/catch/finally.

import axios from "axios";

/**
 * Fetches Pokémon data from the PokéAPI.
 *
 * @param pokemonId - The numeric ID of the Pokémon to fetch.
 * @returns A Promise resolving to the Axios response containing Pokémon data.
 *
 * @remarks
 * - Demonstrates how to use async functions with generics in TypeScript.
 * - Shows how to handle Promises with then/catch/finally.
 * - Uses Axios to perform HTTP requests.
 */
export const getPokemon = async (pokemonId: number) => {
  // Example debug logs (commented out)
  // console.log("Hello, Pokemon!");
  // throw new Error("Something went wrong...");

  const resp = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );

  console.log(resp);

  return resp;
};
