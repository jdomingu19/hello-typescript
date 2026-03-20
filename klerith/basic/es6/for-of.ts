// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// es6/for-of.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 55: For Of ---

  // 1. Type definition
  // - Defines the shape of a Hero object
  // - Properties: name and alias
  type HeroType = {
    name: string;
    alias: string;
  };

  // 2. Object creation
  // - Creates individual hero objects based on HeroType
  // - Each hero has a name and an alias
  // - On editor hover => const link: HeroType
  const link: HeroType = {
    name: "Link",
    alias: "Hero of Time",
  };

  // - On editor hover => const zelda: HeroType
  const zelda: HeroType = {
    name: "Zelda",
    alias: "Princess of Hyrule",
  };

  // - On editor hover => const revali: HeroType
  const revali: HeroType = {
    name: "Revali",
    alias: "Rito Champion",
  };

  // 3. Array of heroes
  // - Groups all hero objects into a single array
  // - On editor hover => const heroesArray: HeroType[]
  const heroesArray: HeroType[] = [link, zelda, revali];

  // 4. Traditional for loop (full object)
  // - Iterates using index positions
  // - Prints each hero object
  for (let i = 0; i < heroesArray.length; i++) {
    console.log(heroesArray[i]);
  }
  // { name: 'Link', alias: 'Hero of Time' }
  // { name: 'Zelda', alias: 'Princess of Hyrule' }
  // { name: 'Revali', alias: 'Rito Champion' }

  // 5. Traditional for loop (specific property)
  // - Iterates using index positions
  // - Prints only the name property of each hero
  for (let i = 0; i < heroesArray.length; i++) {
    console.log(heroesArray[i].name);
  }
  // Link
  // Zelda
  // Revali

  // 6. For...of loop (full object)
  // - Iterates directly over array elements
  // - On editor hover => const hero: HeroType
  // - Prints each hero object without using indices
  // - On editor hover => const hero: HeroType
  for (const hero of heroesArray) {
    console.log(hero);
  }
  // { name: 'Link', alias: 'Hero of Time' }
  // { name: 'Zelda', alias: 'Princess of Hyrule' }
  // { name: 'Revali', alias: 'Rito Champion' }

  // 7. For...of loop (specific property)
  // - Iterates directly over array elements
  // - Prints only the name property of each hero
  // - On editor hover => const hero: HeroType
  for (const hero of heroesArray) {
    console.log(hero.name);
  }
  // Link
  // Zelda
  // Revali
})();
