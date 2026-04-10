// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 030 Intersection Types

(() => {
  // 1. Define template literal type for UUID-like structure
  type HeroId = `${string}-${string}-${string}-${string}-${string}`;

  // 2. Define string literal union for power scale
  type HeroPowerScale = "power" | "wisdom" | "courage" | "triforce";

  // 3. Define type alias for basic hero info
  type HeroBasicInfo = {
    name: string;
    age: number;
  };

  // 4. Define type alias for additional hero properties
  type HeroProperties = {
    readonly id?: HeroId;
    isActive?: boolean;
    powerScale?: HeroPowerScale;
  };

  // 5. Combine type aliases using intersection type
  type Hero = HeroBasicInfo & HeroProperties;

  // 6. Create object with all properties
  let link1: Hero = {
    id: crypto.randomUUID(),
    name: "Link",
    age: 21,
    isActive: true,
    powerScale: "triforce",
  };

  // 7. Log object and inspect type
  console.log(link1); // { id: '13673956-1552-4d86-8e5c-3b87e528a557', name: 'Link', age: 21, isActive: true, powerScale: 'triforce' }
  console.log(typeof link1); // object

  // 8. Function returning object typed with intersection type
  function createHero(input: HeroBasicInfo): Hero {
    const { name, age } = input;
    return {
      id: crypto.randomUUID(),
      name,
      age,
      isActive: true,
      powerScale: "triforce",
    };
  }

  // 9. Create object using function with type alias
  const link2 = createHero({ name: "Link", age: 21 });

  // 10. Log object and inspect type
  console.log(link2); // { id: 'e4a13b5f-b5eb-4d2f-bbc2-d7195d2a88a1', name: 'Link', age: 21, isActive: true, powerScale: 'triforce' }
  console.log(typeof link2); // object
})();
