// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/generics/get-pokemon.ts

// --- Class 88: Async Generics with Promises ---
// Demonstrating how to use async functions with generics
// and handle Promises with then/catch/finally.

import axios from "axios";

// --- Class 89: Mapping HTTP Response ---
// import { PokemonAPIInterface, PokemonInterface } from "../interfaces";

// --- Class 90: Mapping HTTP Response with Quicktype Extension ---
import {
  PokemonAPIInterface,
  PokemonAPIQuicktypeInterface,
  PokemonInterface,
} from "../interfaces";

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
// export const getPokemon = async (pokemonId: number) => {
//   // Example debug logs (commented out)
//   // console.log("Hello, Pokemon!");
//   // throw new Error("Something went wrong...");

//   const resp = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
//   );

//   console.log(resp);

//   return resp;
// };

// --- Class 89: Mapping HTTP Response ---

// export const getPokemon = async (
//   pokemonId: number,
// ): Promise<PokemonInterface> => {
//   const resp = await axios.get<PokemonInterface>(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
//   );

//   console.log(resp.data.name);
//   console.log(resp.data.picture);

//   // Error: Property 'food' does not exist on type 'PokemonInterface'.
//   // console.log(resp.data.food);

//   return resp.data;
// };

// export const getPokemon = async (
//   pokemonId: number,
// ): Promise<PokemonAPIInterface> => {
//   const resp = await axios.get<PokemonAPIInterface>(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
//   );

//   console.log(resp.data);

//   // Error: Property 'picture' does not exist on type 'PokemonAPIInterface'.
//   // console.log(resp.data.picture);

//   // Error: Property 'food' does not exist on type 'PokemonAPIInterface'.
//   // console.log(resp.data.food);

//   return resp.data;
// };

// export const getPokemon = async (
//   pokemonId: number,
// ): Promise<PokemonAPIInterface> => {
//   const { data } = await axios.get<PokemonAPIInterface>(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
//   );

//   return data;
// };

// --- Class 90: Mapping HTTP Response with Quicktype Extension ---

/**
 * Fetches detailed Pokémon data from the PokéAPI v2.
 *
 * @param pokemonId - The numeric ID of the Pokémon to fetch.
 * @returns A Promise resolving to a `PokemonAPIQuicktypeInterface` object
 *          containing the full mapped response from the API.
 *
 * @remarks
 * - This function demonstrates how to map an HTTP response into a strongly
 *   typed interface generated with Quicktype.
 * - Ensures type safety when consuming external API data in TypeScript.
 * - Uses Axios to perform the HTTP request and automatically infers the
 *   response type.
 */
export const getPokemon = async (
  pokemonId: number,
): Promise<PokemonAPIQuicktypeInterface> => {
  const { data } = await axios.get<PokemonAPIQuicktypeInterface>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );

  return data;
};
