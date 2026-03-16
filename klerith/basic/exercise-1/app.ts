// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// exercise-1/app.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 26: Exercise 1 ---

  // 1. Types
  const link: string = "Hero of Time";
  const zelda: string = "Princess of Hyrule";
  const isActive: boolean = true;

  console.log({ link }); // { link: 'Hero of Time' }
  console.log({ zelda }); // { zelda: 'Princess of Hyrule' }
  console.log({ isActive }); // { isActive: true }

  console.log(typeof link); // string
  console.log(typeof zelda); // string
  console.log(typeof isActive); // boolean

  // 2. Tuples
  const heroTuple: [string, string] = [link, zelda];
  const villainToDefeat: [string, number, boolean] = ["Ganondorf", 5, true];

  console.log({ heroTuple }); // { heroTuple: [ 'Hero of Time', 'Princess of Hyrule' ] }
  console.log({ villainToDefeat }); // { villainToDefeat: [ 'Ganondorf', 5, true ] }

  console.log(typeof heroTuple); // object
  console.log(typeof villainToDefeat); // object

  // 3. Arrays
  const heroAllies: string[] = ["Mipha", "Daruk", "Revali", "Urbosa"];

  console.log({ heroAllies }); // { heroAllies: [ 'Mipha', 'Daruk', 'Revali', 'Urbosa' ] }

  console.log(typeof heroAllies); // object

  // 4. Enums
  enum CharacterPower {
    ganondorf = 0,
    revali = 1,
    link = 5,
    zelda = 100,
  }

  const linkPower = CharacterPower.link;
  const zeldaPower = CharacterPower.zelda;
  const revaliPower = CharacterPower.revali;
  const ganondorfPower = CharacterPower.ganondorf;

  console.log(CharacterPower); // { 0: 'ganondorf', 1: 'revali', 5: 'link', 100: 'zelda', link: 5, zelda: 100, revali: 1, ganondorf: 0 }

  console.log({ linkPower }); // { linkPower: 5 }
  console.log({ zeldaPower }); // { zeldaPower: 100 }
  console.log({ revaliPower }); // { revaliPower: 1 }
  console.log({ ganondorfPower }); // { ganondorfPower: 0 }

  // 5. Function return
  function useTriforce(): string {
    return "Using Triforce!";
  }

  function prayGoddess(): void {
    console.log("Dear Goddess Hylia...");
  }

  console.log(useTriforce); // function useTriforce() { return "Using Triforce!"; }
  console.log(useTriforce()); // Using Triforce!

  console.log(prayGoddess); // function useTriforce() { console.log("Goddess Hylia..."); }
  prayGoddess(); // Dear Goddess Hylia...

  // 6. Type Assertions
  const power: any = "100";
  const powerLength: number = (power as string).length;
  // const powerLength2: number = (<string>power).length; // Use `value as type` instead

  console.log({ power }); // { power: '100' }
  console.log(typeof power); // string

  console.log({ powerLength }); // { powerLength: 3 }
  console.log(typeof powerLength); // number
})();
