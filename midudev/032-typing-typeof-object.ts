// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 032 typeof Operator for Object Types

(() => {
  // 1. Create object with inferred property types
  const address = {
    planet: "Earth", // planet: string
    location: "Hyrule", // location: string
  };

  // 2. Use typeof operator to extract type from object
  type Address = typeof address;

  // 3. Create object using extracted type
  const addressHero: Address = {
    planet: "Earth", // planet: string
    location: "Hyrule Castel", // location: string
  };

  // 4. Invalid assignment with wrong types
  // Error: Type 'number' is not assignable to type 'string'.
  // const addressHero: Address = {
  //   planet: 123,
  //   location: 456,
  // };

  // 5. Define Hero type with nested address
  type Hero = {
    name: string;
    age: number;
    address: {
      planet: string;
      location: string;
    };
  };

  // 6. Create object with nested address using extracted type
  let link1: Hero = {
    name: "Link",
    age: 21,
    address: addressHero,
  };

  // 7. Log object and inspect type
  console.log(link1); // { name: 'Link', age: 21, address: { planet: 'Earth', location: 'Hyrule Castel' } }
  console.log(typeof link1); // object

  // 8. Function returning object with nested address
  function createHero(hero: Hero): Hero {
    const { name, age, address } = hero;
    return {
      name,
      age,
      address,
    };
  }

  // 9. Create object using function with nested address
  const link2 = createHero({
    name: "Link",
    age: 21,
    address: addressHero,
  });

  // 10. Log object and inspect type
  console.log(link2); // { name: 'Link', age: 21, address: { planet: 'Earth', location: 'Hyrule Castel' } }
  console.log(typeof link2); // object
})();
