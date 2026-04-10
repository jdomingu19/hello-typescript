// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 018 Typing Object With Type Aliases

(() => {
  // 1. Define type alias for object structure
  type Hero = {
    name: string;
    age: number;
  };

  // 2. Type alias cannot be used as a value
  // Error: 'Hero' only refers to a type, but is being used as a value here.
  // console.log(Hero); // ...
  // console.log(typeof Hero); // ...

  // 3. Create object using type alias
  let link: Hero = {
    name: "Link",
    age: 21,
  };

  // 4. Log object and inspect type
  console.log(link); // { name: 'Link', age: 21 }
  console.log(typeof link); // object

  // 5. Log object property values
  console.log(link.name); // Link
  console.log(link.age); // 21
})();
