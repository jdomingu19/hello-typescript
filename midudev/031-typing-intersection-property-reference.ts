// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 031 Intersection With Property Reference

// 1. Define basic info type
type HeroBasicInfo = {
  name: string;
  age: number;
};

// 2. Define properties type with nested object
type HeroProperties = {
  address: {
    planet: string;
    location: string;
  };
};

// 3. Combine types using intersection (&)
type Hero = HeroBasicInfo & HeroProperties;

// 4. Create object using property type reference
const heroAddress: HeroProperties["address"] = {
  planet: "Earth",
  location: "Hyrule",
};

// 5. Create object with intersection type
let link1: Hero = {
  name: "Link",
  age: 21,
  address: heroAddress,
};

// 6. Log object and inspect type
console.log(link1); // { name: 'Link', age: 21, address: { planet: 'Earth', location: 'Hyrule' } }
console.log(typeof link1); // object

// 7. Function returning object with intersection type
function createHero(hero: Hero): Hero {
  const { name, age, address } = hero;
  return {
    name,
    age,
    address,
  };
}

// 8. Create object using function with intersection type
const link2 = createHero({
  name: "Link",
  age: 21,
  address: heroAddress,
});

// 9. Log object and inspect type
console.log(link2); // { name: 'Link', age: 21, address: { planet: 'Earth', location: 'Hyrule' } }
console.log(typeof link2); // object
