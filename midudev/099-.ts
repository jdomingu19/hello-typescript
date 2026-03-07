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

// . ? Type guard (es aconsejable evitarlos)
function checkIsSonic(character: Character2): character is Sonic2 {
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

  // . ?
  character.attack(); // This is a Link
  return;
}

// ?
function neverExample(x: string | number) {
  if (typeof x === "string") {
    console.log(`value: ${x} | typeof: ${typeof x}`); // string
    x.toUpperCase(); // a string method
  } else if (typeof x === "number") {
    console.log(`value: ${x} | typeof: ${typeof x}`); // number
    x.toFixed(2); // a number method
  } else {
    console.log(`value: ${x} | typeof: ${typeof x}`); // never
  }
}

// ?
// class Person {
//   constructor(name: string, age: number) {
//     // . ?
//     // Error: Property 'name' does not exist on type 'Person'.
//     // Error: Property 'age' does not exist on type 'Person'.
//     this.name = name;
//     this.age = age;
//   }

//   get introduce() {
//     // . ?
//     // Error: Property 'name' does not exist on type 'Person'.
//     // Error: Property 'age' does not exist on type 'Person'.
//     return `${this.name} is ${this.age} years old!`;
//   }

//   set setAge(newAge: number) {
//     if (newAge >= 0 && newAge <= 120) {
//       // . ?
//       // Error: Property 'age' does not exist on type 'Person'.
//       this.age = newAge;
//     } else {
//       throw new Error("Age must be in a range of 0 to 120...");
//     }
//   }
// }

// . ?
class Person2 {
  // . ?
  name: string;
  age: number;
  favoriteColor: string = "Teal";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// . ?
const person1 = new Person2("Jesús", 21);
console.log(person1.introduce); // Jesús is 21 years old!

person1.setAge = 22; // OK
console.log(person1.introduce); // Jesús is 22 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  person1.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
person1.name = "abc"; // ?
console.log(person1.introduce); // abc is 22 years old!

// . ?
class Person3 {
  // . ?
  readonly name: string;
  age: number;
  favoriteColor: string = "Teal";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// . ?
const person2 = new Person3("Jesús", 21);
console.log(person2.introduce); // Jesús is 21 years old!

person2.setAge = 22; // OK
console.log(person2.introduce); // Jesús is 22 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  person2.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
// Error: Cannot assign to 'name' because it is a read-only property.
// person2.name = "abc";

// . ?
class Person4 {
  // . ?
  readonly name: string;
  #age: number; // JavaScript private field
  favoriteColor: string = "Teal";

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  get introduce() {
    return `${this.name} is ${this.#age} years old!`;
  }

  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.#age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// . ?
const person3 = new Person4("Jesús", 21);
console.log(person3.introduce); // Jesús is 21 years old!

person3.setAge = 22; // OK
console.log(person3.introduce); // Jesús is 22 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  person3.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
// Error: Cannot assign to 'name' because it is a read-only property.
// person3.name = "abc";

// . ?
// Error: Property 'age' does not exist on type 'Person4'.
// console.log(person3.age);

// . ?
class Person5 {
  // . ?
  readonly name: string;
  private age: number; // TypeScript private field (desaparece en tiempo de ejecución)
  favoriteColor: string = "Teal";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// . ?
const person4 = new Person5("Jesús", 21);
console.log(person4.introduce); // Jesús is 21 years old!

person4.setAge = 22; // OK
console.log(person4.introduce); // Jesús is 22 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  person4.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
// Error: Cannot assign to 'name' because it is a read-only property.
// person4.name = "abc";

// . ?
// Error: Property 'age' is private and only accessible within class 'Person5'.
// console.log(person4.age);

// . ?
class Person6 {
  // . ?
  private readonly name: string; // TypeScript private field (desaparece en tiempo de ejecución)
  private age: number; // TypeScript private field (desaparece en tiempo de ejecución)
  favoriteColor: string = "Teal";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// . ?
const person5 = new Person6("Jesús", 21);
console.log(person5.introduce); // Jesús is 21 years old!

person5.setAge = 22; // OK
console.log(person5.introduce); // Jesús is 22 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  person5.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
// Error: Property 'name' is private and only accessible within class 'Person6'.
// person5.name = "abc";

// . ?
// Error: Property 'age' is private and only accessible within class 'Person6'.
// console.log(person5.age);

// . ?
class Person7 {
  private readonly name: string; // TypeScript private field (desaparece en tiempo de ejecución)
  private age: number; // TypeScript private field (desaparece en tiempo de ejecución)
  // . ?
  public favoriteColor: string = "Teal"; // fields are public my default

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// . ?
const person6 = new Person7("Jesús", 21);
console.log(person6.introduce); // Jesús is 21 years old!

person6.setAge = 22; // OK
console.log(person6.introduce); // Jesús is 22 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  person6.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
// Error: Property 'name' is private and only accessible within class 'Person7'.
// person6.name = "abc";

// . ?
// Error: Property 'age' is private and only accessible within class 'Person7'.
// console.log(person6.age);

// . ?
console.log(person6.favoriteColor); // Teal

// . ?
person6.favoriteColor = "abc";
console.log(person6.favoriteColor); // abc

// . ?
person6.favoriteColor = "Teal";
console.log(person6.favoriteColor); // Teal

// . ?
class Person8 {
  private readonly name: string; // TypeScript private field (desaparece en tiempo de ejecución)
  private age: number; // TypeScript private field (desaparece en tiempo de ejecución)
  // . ?
  protected favoriteColor: string = "Teal";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// . ?
const person7 = new Person8("Jesús", 21);
console.log(person7.introduce); // Jesús is 21 years old!

person7.setAge = 22; // OK
console.log(person7.introduce); // Jesús is 22 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  person7.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
// Error: Property 'name' is private and only accessible within class 'Person8'.
// person7.name = "abc";

// . ?
// Error: Property 'age' is private and only accessible within class 'Person8'.
// console.log(person7.age);

// . ?
// Error: Property 'favoriteColor' is protected and only accessible within class 'Person8' and its subclasses.
// console.log(person7.favoriteColor);

// . ?
class Child extends Person8 {
  favoriteToy: string;

  constructor(name: string, age: number, favoriteToy: string) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }

  // . ?
  getColor(): string {
    return this.favoriteColor;
  }
}

// . ?
const child1 = new Child("Elie", 2, "Teddy");
console.log(child1.introduce); // Elie is 2 years old!

child1.setAge = 3; // OK
console.log(child1.introduce); // Elie is 3 years old!

// . ?
// Error: Error: Age must be in a range of 0 to 120...
try {
  child1.setAge = 123;
} catch (error) {
  console.log(error);
}

// . ?
// Error: Property 'name' is private and only accessible within class 'Person8'.
// child1.name = "abc";

// . ?
// Error: Property 'age' is private and only accessible within class 'Person8'.
// console.log(child1.age);

// . ?
console.log(child1.getColor); // [Function: getColor]
console.log(child1.getColor()); // Teal
