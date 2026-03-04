// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 035 Arrays of Typed Objects

// 1. Define basic info type
type HeroBasicInfo = {
  name: string;
  age: number;
};

// 2. Create array of objects typed with HeroBasicInfo
const herosWithBasicInfo: HeroBasicInfo[] = [];

// 3. Log empty array and inspect type
console.log(herosWithBasicInfo); // [ ]
console.log(typeof herosWithBasicInfo); // object

// 4. Push objects into typed array
herosWithBasicInfo.push({
  name: "Link",
  age: 21,
});

herosWithBasicInfo.push({
  name: "Zelda",
  age: 19,
});

// 5. Log array with objects and inspect type
console.log(herosWithBasicInfo); // [ { name: 'Link', age: 21 }, { name: 'Zelda', age: 19 } ]
console.log(typeof herosWithBasicInfo); // object

// 6. Invalid assignment with extra property
// Error: Object literal may only specify known properties, and 'power' does not exist in type 'HeroBasicInfo'.
// herosWithBasicInfo.push({
//   name: "abc",
//   age: 123,
//   power: "abc",
// });
