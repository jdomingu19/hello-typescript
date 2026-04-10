// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 024 Typing Object With Object.freeze()

(() => {
  // 1. Define type alias for object structure
  type Hero = {
    id?: number;
    name: string;
    age: number;
    isActive?: boolean;
  };

  // 2. Function returning object typed with alias
  function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return { name, age, isActive: true };
  }

  // 3. Create frozen object using function return value
  const link2 = Object.freeze(createHero({ name: "Link", age: 21 }));

  // 4. Log object and inspect type
  console.log(link2); // { name: 'Link', age: 21, isActive: true }
  console.log(typeof link2); // object
  console.log(link2.id?.toString()); // undefined

  // 5. Attempt to assign property (compile-time error)
  // Error: Cannot assign to 'id' because it is a read-only property.
  // link2.id = 123;
})();
