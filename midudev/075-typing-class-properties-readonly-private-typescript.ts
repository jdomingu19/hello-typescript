// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 075 Class Properties with TypeScript private

(() => {
  // 1. Define class with readonly and TypeScript private field
  class Person {
    // 2. Declare properties
    readonly name: string; // cannot be reassigned after initialization
    private age: number; // TypeScript private field (only checked at compile time)
    favoriteColor: string = "Teal";

    constructor(name: string, age: number) {
      this.name = name; // allowed here
      this.age = age; // private field initialization
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

  // 8. Error demonstration with readonly property
  // Error: Cannot assign to 'name' because it is a read-only property.
  // person1.name = "abc";

  // 9. Error demonstration with TypeScript private field
  // Error: Property 'age' is private and only accessible within class 'Person'.
  // console.log(person1.age);
})();
