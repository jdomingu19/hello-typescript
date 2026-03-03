// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 020 Typing Function Parameters With Type Alias

// 1. Define type alias for object structure
type Hero = {
  name: string;
  age: number;
};

// 2. Function with typed parameter and return type alias
function createHero3(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

// 3. Create object using function with type alias
const link = createHero3({ name: "Link", age: 21 });

// 4. Log object and inspect type
console.log(link); // { name: 'Link', age: 21 }
console.log(typeof link); // object
