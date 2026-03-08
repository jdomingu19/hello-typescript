// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 069 Type Guards with Interfaces

// 1. Define Sonic interface
interface Sonic {
  name: string;
  run: () => void;
}

// 2. Define Link interface
interface Link {
  name: string;
  attack: () => void;
}

// 3. Define union type Character
type Character = Sonic | Link;

// 4. Define type guard (better to avoid them)
function checkIsSonic(character: Character): character is Sonic {
  return (character as Sonic).run !== undefined;
}

// 5. Define function with union parameter
function play(character: Character): void {
  // 6. Common property accessible
  console.log(character.name);

  // 7. Narrow type using type guard
  if (checkIsSonic(character)) {
    character.run(); // This is a Sonic
    return;
  }

  // 8. Narrow type using type guard
  character.attack(); // This is a Link
  return;
}

// 9. Create Sonic object
const sonic1: Sonic = {
  company: "Sega",
  name: "Sonic the Hedgehog",
  run() {
    console.log(`${this.name} is running!`);
  },
};

// 10. Call play with Sonic
play(sonic1);
// Sonic the Hedgehog
// Sonic the Hedgehog is running!

// 11. Call run directly
sonic1.run();
// Sonic the Hedgehog is running!

// 12. Create Link object
const link1: Link = {
  company: "Nintendo",
  name: "Link Hero of Time",
  attack() {
    console.log(`${this.name} is attacking!`);
  },
};

// 13. Call play with Link
play(link1);
// Link Hero of Time
// Link Hero of Time is attacking!

// 14. Call attack directly
link1.attack();
// Link Hero of Time is attacking!
