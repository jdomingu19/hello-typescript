// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 061 Type Aliases for Stronger Typing

// 1. Define type alias for HeroId
type HeroId = string;

// 2. Define type alias for Hero object
type Hero = {
  id: HeroId;
  name: string;
  age: number;
};

// 3. Create object implementing Hero type
const link: Hero = {
  // 4. Error demonstration
  // Error: Type 'number' is not assignable to type 'string'.
  // id: 123,

  id: "123",
  name: "Link",
  age: 21,
};

// 5. Log object and type
console.log(link); // { id: '123', name: 'Link', age: 21 }
console.log(typeof link); // object
