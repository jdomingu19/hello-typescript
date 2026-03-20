// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// es6/object-destructuring.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 53: Object Destructuring ---

  // 1. Type definition
  // - Defines the shape of a Hero object
  // - Properties: name, age, isActive, title
  type HeroType = {
    name: string;
    age: number;
    isActive: boolean;
    title: string;
  };

  // 2. Object creation
  // - Creates a hero object based on HeroType
  // - Assigns values to all required properties
  const hero: HeroType = {
    name: "Link",
    age: 21,
    isActive: true,
    title: "Hero of Time",
  };

  // 3. Basic destructuring
  // - Extracts specific properties directly into variables
  // - name and title are pulled out of hero
  // - Extracts age and isActive into separate variables
  const { name, title } = hero;

  console.log(name, title.toUpperCase()); // Link HERO OF TIME

  const { age, isActive } = hero;

  console.log(age.toFixed(2), isActive); // 21.00 true

  // 4. Function without destructuring
  // - Receives the full object and accesses properties via dot notation
  const printHeroTitle1 = (hero: HeroType) => {
    console.log(hero.title);
  };

  printHeroTitle1(hero); // Hero of Time

  // 5. Function with destructuring in parameters
  // - Extracts title directly from the parameter object
  const printHeroTitle2 = ({ title }: HeroType) => {
    console.log(title);
  };

  printHeroTitle2(hero); // Hero of Time

  // 6. Rest operator with destructuring
  // - Extracts name and groups the remaining properties into rest
  const printHeroInfo = ({ name, ...rest }: HeroType) => {
    console.log(name);
    console.log(rest);
  };

  printHeroInfo(hero);
  // Link
  // { age: 21, isActive: true, title: 'Hero of Time' }
})();
