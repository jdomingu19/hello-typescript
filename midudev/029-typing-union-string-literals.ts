// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 029 Union Types With String Literal Constraints

// 1. Define template literal type for UUID-like structure and string literal union for power scale
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = "power" | "wisdom" | "courage" | "triforce";

// 2. Define type alias with optional HeroId and HeroPowerScale
type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

// 3. Create object with valid HeroPowerScale value
let link1: Hero = {
  name: "Link",
  age: 21,
  powerScale: "triforce",
};

// 4. Log object and inspect type
console.log(link1); // { name: 'Link', age: 21, powerScale: 'triforce' }
console.log(typeof link1); // object

// 5. Invalid assignment with non-union string
// Error: Type '"apples"' is not assignable to type 'HeroPowerScale | undefined'.
// link1.powerScale = "apples";

// 6. Function returning object with HeroPowerScale
function createHero(hero: Hero): Hero {
  const { name, age, powerScale } = hero;
  return {
    name,
    age,
    powerScale,
  };
}

// 7. Create object using function with valid HeroPowerScale
const link2 = createHero({ name: "Link", age: 21, powerScale: "triforce" });

// 8. Log object and inspect type
console.log(link2); // { name: 'Link', age: 21, powerScale: 'triforce' }
console.log(typeof link2); // object

// 9. Invalid assignment with non-union string
// Error: Type '"apples"' is not assignable to type 'HeroPowerScale | undefined'.
// link2.powerScale = "apples";
