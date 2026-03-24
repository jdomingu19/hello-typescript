// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// helpers/powers.ts

// --- Class 80: export default & export with alias ---

/**
 * PowerInterface defines the structure of a hero power.
 * @remarks
 * - Each power has an id and a description.
 */
export interface PowerInterface {
  id: number;
  description: string;
}

/**
 * Array of hero powers.
 * @remarks
 * - Demonstrates default export of an array.
 * - Includes Power, Wisdom, and Courage.
 */
const powers: PowerInterface[] = [
  { id: 0, description: "Power" },
  { id: 1, description: "Wisdom" },
  { id: 2, description: "Courage" },
];

// Default export of powers array
export default powers;
