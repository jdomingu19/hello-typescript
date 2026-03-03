// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 021 Typing Optional Properties

// 1. Define type alias with optional property
type Hero = {
  name: string;
  age: number;
  isActive?: boolean;
};

// 2. Create object with optional property included
let link1: Hero = {
  name: "Link",
  age: 21,
  isActive: true,
};

// 3. Function with typed parameter and return type alias
function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age, isActive: true };
}

// 4. Create object using function with type alias
const link2 = createHero({ name: "Link", age: 21 });

// 5. Log objects and inspect type
console.log(link1); // { name: 'Link', age: 21, isActive: true }
console.log(typeof link1); // object

console.log(link2); // { name: 'Link', age: 21, isActive: true }
console.log(typeof link2); // object

// 6. Compare objects by reference
console.log(link1 == link2); // false
console.log(link1 === link2); // false

// 7. Compare objects by property values
console.log(link1.name == link2.name); // true
console.log(link1.age == link2.age); // true
console.log(link1.isActive == link2.isActive); // true

console.log(link1.name === link2.name); // true
console.log(link1.age === link2.age); // true
console.log(link1.isActive === link2.isActive); // true
