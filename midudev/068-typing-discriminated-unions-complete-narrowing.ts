// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 068 Discriminated Unions with Complete Narrowing

/// 1. Define Sonic interface
interface Sonic {
  company: "Sega";
  name: string;
  run: () => void;
}

// 2. Define Link interface
interface Link {
  company: "Nintendo";
  name: string;
  attack: () => void;
}

// 3. Define union type Character
type Character = Sonic | Link;

// 4. Define function with union parameter
function play(character: Character): void {
  // 5. Common properties accessible
  console.log(character.name);
  console.log(character.company);

  // 6. Narrow type using discriminant property
  if (character.company === "Sega") {
    character.run(); // This is a Sonic
    return;
  }

  // 7. Narrow type using discriminant property
  character.attack(); // This is a Link
}

// 8. Create Sonic object
const sonic1: Sonic = {
  company: "Sega",
  name: "Sonic the Hedgehog",
  run() {
    console.log(`${this.name} is running!`);
  },
};

// 9. Call play with Sonic
play(sonic1);
// Sonic the Hedgehog
// Sega
// Sonic the Hedgehog is running!

// 10. Call run directly
sonic1.run();
// Sonic the Hedgehog is running!

// 11. Create Link object
const link1: Link = {
  company: "Nintendo",
  name: "Link Hero of Time",
  attack() {
    console.log(`${this.name} is attacking!`);
  },
};

// 12. Call play with Link
play(link1);
// Link Hero of Time
// Nintendo
// Link Hero of Time is attacking!

// 13. Call attack directly
link1.attack();
// Link Hero of Time is attacking!
