// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// excluded-folder/some-file.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 49: Include & Exclude Folders/Scripts ---
  type HeroType = {
    name: string;
    age: number;
    greet: () => string;
  };

  let link: HeroType = {
    name: "Link",
    age: 21,
    greet() {
      return `Hello, this is ${this.name}!`;
    },
  };

  console.log(link); // { name: 'Link', age: 21, greet: [Function: greet] }
  console.log(typeof link); // object
  console.log(link.greet()); // Hello, this is Link!
})();
