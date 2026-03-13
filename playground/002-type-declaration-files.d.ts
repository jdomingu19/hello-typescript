// Hello, TypeScript! @jdomingu19
// Playground 002: TypeScript Declaration Diles (.d.ts)

// 1. Define an external type
export type HeroType = {
  name: string;
  age: number;
  greet: () => void;
};

// 2. Define an external interface
export interface HeroInterface {
  name: string;
  age: number;
  greet: () => void;
}
