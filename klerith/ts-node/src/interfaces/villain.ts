// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/interfaces/villain.ts

// --- Class 86: Generic Interfaces ---

/**
 * VillainInterface defines the structure of a Villain object.
 *
 * @remarks
 * - Represents characters considered villains in the application.
 * - Includes properties relevant to villainous roles only.
 */
export interface VillainInterface {
  /** The villain's name */
  name: string;

  /** The villain's title or role */
  title: string;

  /** Indicates if the villain is alive */
  isAlive: boolean;
}
