// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 078 Class Properties with protected

(() => {
  // 1. Define class with private and protected fields
  class Person {
    private readonly name: string; // private + readonly: only set in constructor
    private age: number; // private: only accessible inside the class
    // 2. Protected property (accessible in subclasses)
    protected favoriteColor: string = "Teal";

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

  // 10. Error demonstration with protected property
  // Error: Property 'favoriteColor' is protected and only accessible within class 'Person' and its subclasses.
  // console.log(person1.favoriteColor);

  // 11. Define subclass with access to protected property
  class Child extends Person {
    favoriteToy: string;

    constructor(name: string, age: number, favoriteToy: string) {
      super(name, age);
      this.favoriteToy = favoriteToy;
    }

    // 12. Method accessing protected property
    getColor(): string {
      return this.favoriteColor;
    }
  }

  // 13. Create Child object
  const child1 = new Child("Elie", 2, "Teddy");
  console.log(child1.introduce); // Elie is 2 years old!

  // 14. Update age with setter
  child1.setAge = 3; // OK
  console.log(child1.introduce); // Elie is 3 years old!

  // 15. Error demonstration with invalid age
  try {
    child1.setAge = 123;
  } catch (error) {
    console.log(error); // Error: Error: Age must be in a range of 0 to 120...
  }

  // 16. Error demonstration with private property
  // Error: Property 'name' is private and only accessible within class 'Person'.
  // child1.name = "abc";

  // 17. Error demonstration with private field
  // Error: Property 'age' is private and only accessible within class 'Person'.
  // console.log(child1.age);

  // 18. Access protected property via subclass method
  console.log(child1.getColor); // [Function: getColor]
  console.log(child1.getColor()); // Teal
})();
