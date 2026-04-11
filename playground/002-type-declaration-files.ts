// Hello, TypeScript! @jdomingu19
// Playground 002: TypeScript Declaration Diles (.d.ts)

// 1. Import external type and interface definitions
import type {
  HeroType,
  HeroInterface,
} from "./002-type-declaration-files.d.ts";

(() => {
  // 2. Create object using external type
  const link1: HeroType = {
    name: "Link",
    age: 21,
    greet: function () {
      console.log(`Hello, this is ${this.name}!`);
    },
  };

  // 3. Inspect object and its type
  console.log(link1); // { name: 'Link', age: 21, greet: [Function: greet] }
  console.log(typeof link1); // object

  // 4. Access properties from type
  console.log(link1.name); // Link
  console.log(link1.age); // 21

  // 5. Access and call method from type
  console.log(link1.greet); // [Function: greet]
  link1.greet(); // Hello, this is Link!

  // 6. Create object using external interface
  const link2: HeroInterface = {
    name: "Link",
    age: 21,
    greet: function () {
      console.log(`Hello, this is ${this.name}!`);
    },
  };

  // 7. Inspect object and its type
  console.log(link2); // { name: 'Link', age: 21, greet: [Function: greet] }
  console.log(typeof link2); // object

  // 8. Access properties from interface
  console.log(link2.name); // Link
  console.log(link2.age); // 21

  // 9. Access and call method from interface
  console.log(link2.greet); // [Function: greet]
  link2.greet(); // Hello, this is Link!

  // 10. Compare objects and their properties
  console.log(link1 == link2); // false (different object references)
  console.log(link1 === link2); // false (strict comparison also fails)

  console.log(link1.name == link2.name); // true (same string value)
  console.log(link1.age == link2.age); // true (same number value)
  console.log(link1.greet == link2.greet); // false (different function references)

  console.log(link1.name === link2.name); // true (strict comparison of strings)
  console.log(link1.age === link2.age); // true (strict comparison of numbers)
  console.log(link1.greet === link2.greet); // false (functions are distinct objects)
})();
