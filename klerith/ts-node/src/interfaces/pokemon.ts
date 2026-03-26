// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/interfaces/pokemon.ts

// --- Class 89: Mapping HTTP Response ---

/**
 * Represents a simplified Pokémon model used in the application.
 *
 * @remarks
 * - This interface is a lightweight abstraction compared to the full
 *   `PokemonAPIInterface` from PokéAPI.
 * - It is useful when only basic details (name and picture) are needed,
 *   for example in lists, previews, or UI components.
 */
export interface PokemonInterface {
  name: string;
  picture: string;
}
