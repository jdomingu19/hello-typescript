// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 033 typeof and ReturnType for Functions

(() => {
  // 1. Function returning object with inferred property types
  function createHeroAddress() {
    return {
      planet: "Earth", // planet: string
      location: "Hyrule", // location: string
    };
  }

  // 2. Extract function type using typeof
  type Address1 = typeof createHeroAddress; // () => { planet: string; location: string; }

  // 3. Extract return type using ReturnType
  type Address2 = ReturnType<typeof createHeroAddress>; // { planet: string; location: string; }

  // 4. Create object using extracted return type
  const addressHero: Address2 = {
    planet: "Earth", // planet: string
    location: "Hyrule Castel", // location: string
  };

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
