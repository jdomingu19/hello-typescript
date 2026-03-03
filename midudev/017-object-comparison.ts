// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 017 Object Comparison

// 1. Object with inferred type { name: string; age: number }
let link1 = {
  name: "Link",
  age: 21,
};

// 2. Function returning an object with inferred type { name: string; age: number }
function createHero(name: string, age: number) {
  return { name, age };
}

const link2 = createHero("Link", 21);

// 3. Log objects and inspect type
console.log(link1); // { name: 'Link', age: 21 }
console.log(typeof link1); // object

console.log(link2); // { name: 'Link', age: 21 }
console.log(typeof link2); // object

// 4. Compare objects by reference
console.log(link1 == link2); // false
console.log(link1 === link2); // false

// 5. Compare objects by property values
console.log(link1.name == link2.name); // true
console.log(link1.age == link2.age); // true

console.log(link1.name === link2.name); // true
console.log(link1.age === link2.age); // true
