// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// Type Declaration Files

// 1. Define an external interface
export interface ExternalPersonInterface {
  name: string;
  age: number;
  greetNeighbor: (neighborName: string) => void;
}

// 2. Define an external type
export type ExternalPersonType = {
  name: string;
  age: number;
  greetNeighbor: (neighborName: string) => void;
};

// 3. Error demonstration
// Error: Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.
// const someFunction = () => {
//   console.log("Do something");
// };
