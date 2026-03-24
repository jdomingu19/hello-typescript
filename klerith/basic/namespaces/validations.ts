// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// namespaces/validations.ts

// --- Class 77: Namespaces ---
namespace Validations {
  /**
   * validateText checks if a string is longer than 3 characters.
   * @param text - The string to validate.
   * @returns true if the text length is greater than 3, otherwise false.
   */
  export const validateText = (text: string): boolean => {
    // if (text.length > 3) {
    //   return true;
    // }
    // return false;
    return text.length > 3 ? true : false;
  };

  /**
   * validateDate checks if a Date object is valid.
   * @param date - The Date object to validate.
   * @returns true if the date is valid, otherwise false.
   */
  export const validateDate = (date: Date): boolean => {
    // if (!isNaN(date.valueOf())) {
    //   return true;
    // }
    // return false;
    return !isNaN(date.valueOf()) ? true : false;
  };
}

// --- Usage example ---

// Namespace reference
console.log(Validations); // {validateText: ƒ, validateDate: ƒ}
console.log(typeof Validations); // object

// Function reference: validateText
console.log(Validations.validateText); // [Function: validateText]
console.log(typeof Validations.validateText); // function

// Function execution: validateText
console.log(Validations.validateText("ABC")); // false
console.log(typeof Validations.validateText("ABC")); // boolean

console.log(Validations.validateText("ABCDE")); // true
console.log(typeof Validations.validateText("ABCDE")); // boolean

// Function reference: validateDate
console.log(Validations.validateDate); // [Function: validateDate]
console.log(typeof Validations.validateDate); // function

// Function execution: validateDate
console.log(Validations.validateDate(new Date("invalid-date"))); // false
console.log(typeof Validations.validateDate(new Date("invalid-date"))); // boolean

console.log(Validations.validateDate(new Date())); // true
console.log(typeof Validations.validateDate(new Date())); // boolean
