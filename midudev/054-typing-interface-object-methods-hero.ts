// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 054 Interface and Object Methods

(() => {
  // 1. Define interface with properties and a method
  interface Hero {
    id: string;
    name: string;
    age: Number;
    greet: () => void;
  }

  // 2. Create object implementing the interface
  const link: Hero = {
    id: "1",
    name: "Link",
    age: 21,
    greet: function (): void {
      console.log(`Hello, this is ${this.name}!`);
    },
  };

  // 3. Create another object implementing the interface
  const zelda: Hero = {
    id: "2",
    name: "Zelda",
    age: 19,
    greet: function (): void {
      console.log(`Hello, this is ${this.name}!`);
    },
  };

  // 4. Call object methods
  link.greet(); // Hello, this is Link!
  zelda.greet(); // Hello, this is Zelda!
})();
