// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 025 Typing Readonly UUID Properties

// 1. Define type alias with readonly optional UUID property
type Hero = {
  readonly id?: string;
  name: string;
  age: number;
  isActive?: boolean;
};

// 2. Create object with readonly UUID property
let link1: Hero = {
  id: crypto.randomUUID(),
  name: "Link",
  age: 21,
  isActive: true,
};

// 3. Log object and inspect type
console.log(link1); // { id: '92bb7828-09f7-4842-8359-cfa8c68798e1', name: 'Link', age: 21, isActive: true }
console.log(typeof link1); // object

console.log(link1.id); // 92bb7828-09f7-4842-8359-cfa8c68798e1
console.log(typeof link1.id); // string

console.log(link1.id?.toString()); // 92bb7828-09f7-4842-8359-cfa8c68798e1
console.log(typeof link1.id?.toString()); // string

// 4. Function returning object with readonly UUID property
function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

// 5. Create object using function with type alias
const link2 = createHero({ name: "Link", age: 21 });

// 6. Log object and inspect type
console.log(link2); // { id: 'd548d1c3-a759-48f7-a988-57a37f6dce27', name: 'Link', age: 21, isActive: true }
console.log(typeof link2); // object

console.log(link2.id); // d548d1c3-a759-48f7-a988-57a37f6dce27
console.log(typeof link2.id); // string

console.log(link2.id?.toString()); // d548d1c3-a759-48f7-a988-57a37f6dce27
console.log(typeof link2.id?.toString()); // string
