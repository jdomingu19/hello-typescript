// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 077 Class Properties with private, readonly, and public

// 1. Define class with different property modifiers
class Person {
  private readonly name: string; // private + readonly: only set in constructor
  private age: number; // private: only accessible inside the class
  // 2. Public property (default in TypeScript)
  public favoriteColor: string = "Teal"; // fields are public by default

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 3. Getter using declared properties
  get introduce() {
    return `${this.name} is ${this.age} years old!`;
  }

  // 4. Setter with validation
  set setAge(newAge: number) {
    if (newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error("Age must be in a range of 0 to 120...");
    }
  }
}

// 5. Create Person object
const person1 = new Person("Jesús", 21);
console.log(person1.introduce); // Jesús is 21 years old!

// 6. Update age with setter
person1.setAge = 22; // OK
console.log(person1.introduce); // Jesús is 22 years old!

// 7. Error demonstration with invalid age
try {
  person1.setAge = 123;
} catch (error) {
  console.log(error); // Error: Error: Age must be in a range of 0 to 120...
}

// 8. Error demonstration with private readonly property
// Error: Property 'name' is private and only accessible within class 'Person'.
// person1.name = "abc";

// 9. Error demonstration with private field
// Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(person1.age);

// 10. Public property accessible directly
console.log(person1.favoriteColor); // Teal

// 11. Change public property directly
person1.favoriteColor = "abc";
console.log(person1.favoriteColor); // abc
