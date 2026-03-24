// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// src/interfaces/hero.ts

// --- Class 86: Generic Interfaces ---

/**
 * HeroInterface defines the structure of a Hero object.
 *
 * @remarks
 * - Represents characters considered heroes in the application.
 * - Includes properties relevant to heroic roles only.
 */
export interface HeroInterface {
  /** The hero's name */
  name: string;

  /** The hero's title or role */
  title: string;

  /** Indicates if the hero is currently active */
  isActive: boolean;
}
