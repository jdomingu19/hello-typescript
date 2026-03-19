// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// exercise-3/app.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 43: Exercise 3 ---

  // 1. Objects

  // 1.1 Object definition with explicit type annotation
  // - Required properties: name, alias, age, isActive
  const link: {
    name: string;
    alias: string;
    age: number;
    isActive: boolean;
  } = {
    name: "Link",
    alias: "Hero of Time",
    age: 21,
    isActive: true,
  };

  console.log(link); // { name: 'Link', alias: 'Hero of Time', age: 21, isActive: true }
  console.log(typeof link); // object

  // 1.2 Object definition with optional method
  // - Includes prayGoddess?: () => void
  // - Optional property must be invoked with ?. to avoid runtime errors
  const zelda: {
    name: string;
    alias: string;
    age: number;
    isActive: boolean;
    prayGoddess?: () => void;
  } = {
    name: "Zelda",
    alias: "Princess of Hyrule",
    age: 4,
    isActive: true,
    prayGoddess() {
      console.log("Dear Goddess Hylia...");
    },
  };

  console.log(zelda); // { name: 'Zelda', alias: 'Princess of Hyrule', age: 19, isActive: true, prayGoddess: [Function: prayGoddess] }
  console.log(typeof zelda); // object

  console.log(zelda.prayGoddess); // [Function: prayGoddess]
  zelda.prayGoddess?.(); // Dear Goddess Hylia...

  // 1.3 Array of objects
  // - Each object must include name, age, isAlive
  // - age can be number or undefined
  const villains: {
    name: string;
    age: number | undefined;
    isAlive: boolean;
  }[] = [
    {
      name: "Ganondorf",
      age: 1000,
      isAlive: true,
    },
    {
      name: "Vaati",
      age: 200,
      isAlive: false,
    },
    {
      name: "Majora",
      age: undefined,
      isAlive: true,
    },
  ];

  console.log(villains);
  // [
  //   { name: "Ganondorf", age: 1000, isAlive: true },
  //   { name: "Vaati", age: 200, isAlive: false },
  //   { name: "Majora", age: undefined, isAlive: true }
  // ]
  console.log(typeof villains); // object

  // 2. Type

  // 2.1 Type alias definition for BookType
  // - Includes title and pages
  type BookType = {
    title: string;
    pages: number;
  };

  const book1: BookType = {
    title: "The Monk Who Sold His Ferrari",
    pages: 215,
  };

  console.log(book1); // { title: 'The Monk Who Sold His Ferrari', pages: 215 }
  console.log(typeof book1); // object

  // 2.2 Type alias definition for DeveloperType
  // - Includes skills array and isActive
  type DeveloperType = {
    skills: string[];
    isActive: boolean;
  };

  const developer1: DeveloperType = {
    skills: ["TypeScript", "React Native", "Expo"],
    isActive: true,
  };

  console.log(developer1); // { skills: [ 'TypeScript', 'React Native', 'Expo' ], isActive: true }
  console.log(typeof developer1); // object

  // 3. Union Types

  // 3.1 Union type variable
  // - Can hold either BookType or DeveloperType
  let abc: BookType | DeveloperType;

  // 3.2 Assign BookType
  abc = book1; // OK
  console.log(abc); // { title: 'The Monk Who Sold His Ferrari', pages: 215 }
  console.log(typeof abc); // object

  // 3.3 Assign DeveloperType
  abc = developer1; // OK
  console.log(developer1); // { skills: [ 'TypeScript', 'React Native', 'Expo' ], isActive: true }
  console.log(typeof developer1); // object

  // 3.4 Invalid assignment
  // Error: Type 'number' is not assignable to type 'BookType | DeveloperType'.
  // abc = 42;
})();
