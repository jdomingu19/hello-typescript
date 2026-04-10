// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 023 Typing Readonly Properties

(() => {
  // 1. Define type alias with readonly optional property
  type Hero = {
    readonly id?: number;
    name: string;
    age: number;
    isActive?: boolean;
  };

  // 2. Create object without readonly property
  let link1: Hero = {
    name: "Link",
    age: 21,
    isActive: true,
  };

  // 3. Log object and inspect type
  console.log(link1); // { name: 'Link', age: 21, isActive: true }
  console.log(typeof link1); // object
  console.log(link1.id?.toString()); // undefined

  // 4. Attempt to assign readonly property (error)
  // Error: Cannot assign to 'id' because it is a read-only property.
  // link1.id = 123;

  // 5. Function with typed parameter and return type alias
  function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return { name, age, isActive: true };
  }

  const link2 = createHero({ name: "Link", age: 21 });

  // 6. Log object and inspect type
  console.log(link2); // { name: 'Link', age: 21, isActive: true }
  console.log(typeof link2); // object
  console.log(link2.id?.toString()); // undefined

  // 7. Attempt to assign readonly property (error)
  // Error: Cannot assign to 'id' because it is a read-only property.
  // link2.id = 123;
})();
