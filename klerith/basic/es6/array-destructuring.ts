// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// es6/array-destructuring.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 54: Array Destructuring ---

  // 1. Array definition
  // - Declares a string array with hero names
  // - On editor hover => const heroesArray: string[]
  const heroesArray: string[] = [
    "Link",
    "Zelda",
    "Mipha",
    "Urbosa",
    "Daruk",
    "Revali",
  ];

  console.log(heroesArray); // [ 'Link', 'Zelda', 'Mipha', 'Urbosa', 'Daruk', 'Revali' ]
  console.log(typeof heroesArray); // object

  // 2. Traditional array access
  // - Access elements using index positions
  // - On editor hover => const link1: string
  // - On editor hover => const revali1: string
  const link1 = heroesArray[0];
  const revali1 = heroesArray[5];

  console.log(link1); // Link
  console.log(typeof link1); // string

  console.log(revali1); // Revali
  console.log(typeof revali1); // string

  // 3. Array destructuring
  // - Extracts elements directly into variables
  // - Skips unwanted elements using commas
  // - On editor hover => const link2: string
  // - On editor hover => const revali2: string
  const [link2, , , , , revali2] = heroesArray;

  console.log(link2); // Link
  console.log(typeof link2); // string

  console.log(revali2); // Revali
  console.log(typeof revali2); // string

  // 4. Rest operator in array destructuring
  // - Extracts the first element into link3
  // - Collects the remaining elements into rest as a new array
  // - On editor hover => const link3: string
  // - On editor hover => const rest: string[]
  const [link3, ...rest] = heroesArray;

  console.log(link3); // Link
  console.log(typeof link3); // string

  console.log(rest); // [ 'Zelda', 'Mipha', 'Urbosa', 'Daruk', 'Revali' ]
  console.log(typeof rest); // object
})();
