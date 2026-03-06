// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 062 Template Literal Types for HeroId

// 1. Define type alias for HeroId using template literal type
type HeroId = `${number}-${string}`;

// 2. Define type alias for Hero object
type Hero = {
  id: HeroId;
  name: string;
  age: number;
};

// 3. Create object implementing Hero type
const link1: Hero = {
  // 4. Error demonstration
  // Error: Type 'number' is not assignable to type '`${number}-${string}`'.
  // id: 123,

  // 5. Error demonstration
  // Error: Type '"123"' is not assignable to type '`${number}-${string}`'.
  // id: "123",

  id: `${123}-${123}`, // OK
  name: "Link",
  age: 21,
};

// 6. Log object and type
console.log(link1); // { id: '123-123', name: 'Link', age: 21 }
console.log(typeof link1); // object

// 7. Create another object implementing Hero type
const link2: Hero = {
  // 8. Error demonstration
  // Error: Type 'number' is not assignable to type '`${number}-${string}`'.
  // id: 123,

  // 9. Error demonstration
  // Error: Type '"123"' is not assignable to type '`${number}-${string}`'.
  // id: "123",

  id: `${123}-${"abc"}`, // OK
  name: "Link",
  age: 21,
};

// 10. Log object and type
console.log(link2); // { id: '123-abc', name: 'Link', age: 21 }
console.log(typeof link2); // object

// 11. Create another object with direct string literal
const link3: Hero = {
  // 12. Error demonstration
  // Error: Type 'number' is not assignable to type '`${number}-${string}`'.
  // id: 123,

  // 13. Error demonstration
  // Error: Type '"123"' is not assignable to type '`${number}-${string}`'.
  // id: "123",

  id: "123-123", // OK
  name: "Link",
  age: 21,
};

// 14. Log object and type
console.log(link3); // { id: '123-123', name: 'Link', age: 21 }
console.log(typeof link3); // object

// 15. Create another object with direct string literal
const link4: Hero = {
  // 16. Error demonstration
  // Error: Type 'number' is not assignable to type '`${number}-${string}`'.
  // id: 123,

  // 17. Error demonstration
  // Error: Type '"123"' is not assignable to type '`${number}-${string}`'.
  // id: "123",

  id: "123-abc", // OK
  name: "Link",
  age: 21,
};

// 18. Log object and type
console.log(link4); // { id: '123-abc', name: 'Link', age: 21 }
console.log(typeof link4); // object
