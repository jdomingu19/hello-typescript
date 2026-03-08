// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 071 Class Properties Error Demonstration

// 1. Define class without property declarations
// class Person {
//   constructor(name: string, age: number) {
//     // 2. Error demonstration
//     // Error: Property 'name' does not exist on type 'Person'.
//     // Error: Property 'age' does not exist on type 'Person'.
//     this.name = name;
//     this.age = age;
//   }

//   get introduce() {
//     // 3. Error demonstration
//     // Error: Property 'name' does not exist on type 'Person'.
//     // Error: Property 'age' does not exist on type 'Person'.
//     return `${this.name} is ${this.age} years old!`;
//   }

//   set setAge(newAge: number) {
//     if (newAge >= 0 && newAge <= 120) {
//       // 4. Error demonstration
//       // Error: Property 'age' does not exist on type 'Person'.
//       this.age = newAge;
//     } else {
//       throw new Error("Age must be in a range of 0 to 120...");
//     }
//   }
// }
