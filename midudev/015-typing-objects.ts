// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 015 Typing Objects

(() => {
  // 1. Object with inferred type { name: string; age: number }
  let heroObject = {
    name: "Link",
    age: 21,
  };

  console.log(heroObject); // { name: 'Link', age: 21 }
  console.log(typeof heroObject); // object

  // 2. Type error when assigning wrong type to property
  // Error: Type 'number' is not assignable to type 'string'.
  // heroObject.name = 123;

  // 3. Type error when adding property not defined in object type
  // Error: Property 'power' does not exist on type '{ name: string; age: number; }'.
  // heroObject.power = "Triforce";
})();
