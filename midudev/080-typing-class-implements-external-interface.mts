// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 080 Class implementing external Interface

// 1. Import external interface definition
import type { ExternalPersonInterface } from "./types.d.ts";

// 2. Define class implementing the external interface
class Person implements ExternalPersonInterface {
  name: string;
  age: number;
  favoriteColor: string;

  constructor(name: string, age: number, favoriteColor: string) {
    this.name = name;
    this.age = age;
    this.favoriteColor = favoriteColor;
  }

  // 3. Implement method from external interface
  greetNeighbor(name: string) {
    console.log(`Hello, neighbor ${name}!`);
  }

  // 4. Getter using declared properties
  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  // 5. Setter with validation
  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// 6. Create Person object
const person1 = new Person("Jesús", 21, "Teal");
console.log(person1.introduce); // Jesús is 21 years old!

// 7. Access public property
console.log(person1.favoriteColor); // Teal

// 8. Update age with setter
person1.setAge = 22; // OK
console.log(person1.introduce); // Jesús is 22 years old!

// 9. Error demonstration with invalid age
try {
  person1.setAge = 123;
} catch (error) {
  console.log(error); // Error: Error: Age must be in a range of 0 to 120...
}

// 10. Call method from external interface
person1.greetNeighbor("John"); // Hello, neighbor John!
