// Hello, TypeScript! @jdomingu19
// Playground 001: Typing Object With Readonly And Object.freeze()

(() => {
  // 1. Define type alias with readonly properties
  type Hero = {
    readonly name: string;
    readonly age: number;
    readonly isActive: boolean;
  };

  // 2. Create frozen object with type alias
  const link: Hero = Object.freeze({
    name: "Link",
    age: 21,
    isActive: true,
  });

  // 3. Log object and inspect type
  console.log(link); // { name: 'Link', age: 21, isActive: true }
  console.log(typeof link); // object

  // 4. Attempt to reassign properties (compile-time error)
  // Error: Cannot assign to 'name' because it is a read-only property.
  // link.name = "Zelda";

  // Error: Cannot assign to 'age' because it is a read-only property.
  // link.age = 22;

  // Error: Cannot assign to 'isActive' because it is a read-only property.
  // link.isActive = false;
})();
