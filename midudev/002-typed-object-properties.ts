// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 002 Typed Object Properties

(() => {
  const person = {
    name: "Jesús",
    age: 21,
    alias: "@jdomingu19",
  };

  console.log(person.name); // Jesús
  console.log(person.age); // 21
  console.log(person.alias); // @jdomingu19

  // Error: Property 'favoriteColor' does not exist on type
  // '{ name: string; age: number; alias: string; }'.
  // console.log(person.favoriteColor);
})();
