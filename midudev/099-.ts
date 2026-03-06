// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 06 ?

// . ?
// function showLength1(object: number | string): any {
//   // . ?
//   // Error: Property 'length' does not exist on type 'string | number'.
//   // Property 'length' does not exist on type 'number'.
//   return object.length;
// }

// console.log(showLength1(123));
// console.log(showLength1("123"));

// . ?
function showLength2(object: number | string): number {
  // . ?
  if (typeof object === "string") {
    return object.length;
  }

  // . ?
  return object.toString().length;
}

// . ?
console.log(showLength2(123)); // 3
console.log(showLength2("123")); // 3

// ?
interface Sonic {
  company: "Sega";
  name: string;
  run: () => void;
}

// . ?
interface Link {
  company: "Nintendo";
  name: string;
  attack: () => void;
}

// . ?
type Character = Sonic | Link;

// . ?
function play1(character: Character): void {
  // . ?
  console.log(character.name);
  console.log(character.company);

  // . ?
  // Error: Property 'run' does not exist on type 'Character'.
  //  Property 'run' does not exist on type 'Link'.
  // console.log(character.run());

  // . ?
  // Error: Property 'attack' does not exist on type 'Character'.
  //  Property 'attack' does not exist on type 'Sonic'.
  // console.log(character.attack());
}

// . ?
function play2(character: Character): void {
  // . ?
  console.log(character.name);
  console.log(character.company);

  // . ?
  // Error: Property 'run' does not exist on type 'Character'.
  //  Property 'run' does not exist on type 'Link'.
  // if (typeof character.run === "function") {
  //   // . ?
  //   // Error: Property 'run' does not exist on type 'Character'.
  //   //  Property 'run' does not exist on type 'Link'.
  //   character.run();
  // }
}

// . ?
function play3(character: Character): void {
  // . ?
  console.log(character.name);
  console.log(character.company);

  // . ?
  if (character.company === "Sega") {
    character.run(); // This is a Sonic
  }

  // . ?
  // Error: Property 'attack' does not exist on type 'Character'.
  //  Property 'attack' does not exist on type 'Sonic'.
  // character.attack();
}

// . ?
function play4(character: Character): void {
  // . ?
  console.log(character.name);
  console.log(character.company);

  // . ?
  if (character.company === "Sega") {
    character.run(); // This is a Sonic
    return;
  }

  // . ?
  character.attack(); // This is a Link
}

// ?
interface Sonic2 {
  name: string;
  run: () => void;
}

// . ?
interface Link2 {
  name: string;
  attack: () => void;
}

// . ?
type Character2 = Sonic2 | Link2;

// . ? Type guard
function checkIsSonic(character: Character2): character is Sonic {
  return (character as Sonic2).run !== undefined;
}

// . ?
function play5(character: Character2): void {
  // . ?
  console.log(character.name);

  // . ?
  if (checkIsSonic(character)) {
    character.run(); // This is a Sonic
    return;
  }

  // // . ?
  // character.attack(); // This is a Link
}
