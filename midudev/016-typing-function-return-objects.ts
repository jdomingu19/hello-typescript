// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 016 Typing Function Return Objects

(() => {
  // 1. Function returning an object with inferred type { name: string; age: number }
  function createHero(name: string, age: number) {
    return { name, age };
  }

  // 2. Create object using function return value
  const link = createHero("Link", 21);

  // 3. Log object and inspect type
  console.log(link); // { name: 'Link', age: 21 }
  console.log(typeof link); // object
})();
