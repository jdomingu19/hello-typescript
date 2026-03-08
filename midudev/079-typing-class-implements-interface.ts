// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 079 Class implementing an Interface

// 1. Define interface with required properties and methods
interface PersonInterface {
  name: string;
  age: number;
  favoriteColor: string;
  greetNeighbor: (name: string) => void;
}

// 2. Define class implementing the interface
class Person implements PersonInterface {
  name: string;
  age: number;
  favoriteColor: string;

  constructor(name: string, age: number, favoriteColor: string) {
    this.name = name;
    this.age = age;
    this.favoriteColor = favoriteColor;
  }

  // 3. Implement method from interface
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
const person = new Person("Jesús", 21, "Teal");
console.log(person.introduce); // Jesús is 21 years old!

// 7. Access public property
console.log(person.favoriteColor); // Teal

// 8. Update age with setter
person.setAge = 22; // OK
console.log(person.introduce); // Jesús is 22 years old!

// 9. Error demonstration with invalid age
try {
  person.setAge = 123;
} catch (error) {
  console.log(error); // Error: Error: Age must be in a range of 0 to 120...
}

// 10. Call method from interface
person.greetNeighbor("John"); // Hello, neighbor John!
