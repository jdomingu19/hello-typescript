// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 022 Typing Optional Properties With Chaining

(() => {
  // 1. Define type alias with optional properties
  type Hero = {
    id?: number;
    name: string;
    age: number;
    isActive?: boolean;
  };

  // 2. Create object without optional id property
  let link1: Hero = {
    name: "Link",
    age: 21,
    isActive: true,
  };

  // 3. Log object and inspect type
  console.log(link1); // { name: 'Link', age: 21, isActive: true }
  console.log(typeof link1); // object

  // 4. Use optional chaining to safely access undefined property
  console.log(link1.id?.toString()); // undefined

  // 5. Add optional property id dynamically
  link1.id = 123;
  console.log(link1); // { name: 'Link', age: 21, isActive: true, id: 123 }
  console.log(typeof link1); // object

  // 6. Function with typed parameter and return type alias
  function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return { name, age, isActive: true };
  }

  const link2 = createHero({ name: "Link", age: 21 });

  // 7. Log object and inspect type
  console.log(link2); // { name: 'Link', age: 21, isActive: true }
  console.log(typeof link2); // object

  // 8. Use optional chaining on object without id
  console.log(link2.id?.toString()); // undefined

  // 9. Add optional property id dynamically
  link2.id = 123;
  console.log(link2); // { name: 'Link', age: 21, isActive: true, id: 123 }
  console.log(typeof link2); // object

  // 10. Compare objects by reference
  console.log(link1 == link2); // false
  console.log(link1 === link2); // false

  // 11. Compare objects by property values
  console.log(link1.name == link2.name); // true
  console.log(link1.age == link2.age); // true
  console.log(link1.isActive == link2.isActive); // true
  console.log(link1.id == link2.id); // true

  console.log(link1.name === link2.name); // true
  console.log(link1.age === link2.age); // true
  console.log(link1.isActive === link2.isActive); // true
  console.log(link1.id === link2.id); // true
})();
