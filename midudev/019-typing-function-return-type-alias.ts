// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 019 Typing Function Return With Type Alias

// 1. Define type alias for object structure
type Hero = {
  name: string;
  age: number;
};

// 2. Function returning object typed with alias
function createHero(name: string, age: number): Hero {
  return { name, age };
}

const link = createHero("Link", 21);

// 3. Log object and inspect type
console.log(link); // { name: 'Link', age: 21 }
console.log(typeof link); // object

// 4. Access object properties with type safety
console.log(link.name); // Link
console.log(link.age); // 21
