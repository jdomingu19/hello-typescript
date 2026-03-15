"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/strings.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 17: Strings ---
    var _a, _b;
    // 1. String literal type inference
    // - Inferred as literal "Hello, TypeScript!" because it's a const
    // - On editor hover => const myString: "Hello, TypeScript!"
    var myString = "Hello, TypeScript!";
    console.log({ myString: myString }); // { myString: 'Hello, TypeScript!' }
    console.log(typeof myString); // string
    // 2. Explicit string type annotation
    // - Declared as type string, not literal
    // - On editor hover => const myString2: string
    var myString2 = "Hello, Node.js!";
    console.log({ myString2: myString2 }); // { myString: 'Hello, Node.js!' }
    console.log(typeof myString2); // string
    // 3. String with single quotes and apostrophe
    // - Escaping not needed because outer quotes are double
    // - On editor hover => const myString3: string
    var myString3 = "He's often called @jdomingu19";
    console.log({ myString3: myString3 }); // { myString3: "He's often called @jdomingu19" }
    console.log(typeof myString3); // string
    // 4. String with double quotes inside single quotes
    // - On editor hover => const myString4: string
    var myString4 = 'He"s often called @jdomingu19';
    console.log({ myString4: myString4 }); // { myString4: 'He"s often called @jdomingu19' }
    console.log(typeof myString4); // string
    // 5. String with escaped apostrophe and double quotes
    // - On editor hover => const myString5: string
    var myString5 = 'He\'s often called "@jdomingu19"';
    console.log({ myString5: myString5 }); // { myString5: `He's often called "@jdomingu19"` }
    console.log(typeof myString5); // string
    // 6. Template literal string
    // - Backticks allow interpolation and multi-line strings
    // - On editor hover => const myString6: string
    var myString6 = "He's often called \"@jdomingu19\"";
    console.log({ myString6: myString6 }); // { myString6: `He's often called "@jdomingu19"` }
    console.log(typeof myString6); // string
    // 7. String declared as any
    // - Allows any type of reassignment, but unsafe
    // - On editor hover => const myString7: any
    var myString7 = "abc";
    console.log({ myString7: myString7 }); // { myString7: `He's often called "@jdomingu19"` }
    console.log(typeof myString7); // string
    // Error: Cannot assign to 'myString7' because it is a constant.
    // myString7 = true;
    // Ok, because current value is string
    console.log(myString7.toUpperCase()); // ABC
    console.log(typeof myString7.toUpperCase()); // string
    // Editor allows calling non-existent methods due to 'any'
    // myString7.toUpperCase1(); // Runtime error: Uncaught TypeError: myString7.toUpperCase1 is not a function
    // myString7.toUpperCase2(); // Runtime error: Uncaught TypeError: myString7.toUpperCase2 is not a function
    // myString7.toUpperCase3(); // Runtime error: Uncaught TypeError: myString7.toUpperCase3 is not a function
    // 9. String interpolation with alias
    // - On editor hover => const myAlias: string
    var myAlias = "@jdomingu19";
    console.log("He's often called \"".concat(myAlias, "\"")); // He's often called "@jdomingu19"
    console.log({ myAlias: myAlias }); // { myAlias: '@jdomingu19' }
    console.log(typeof myAlias); // string
    // 10. Converting number to string
    // - On editor hover => const myNumber: number
    var myNumber = 42;
    console.log({ myNumber: myNumber }); // { myNumber: 42 }
    console.log(typeof myNumber); // number
    var x = myNumber.toString();
    console.log({ x: x }); // { x: '42' }
    console.log(typeof x); // string
    console.log("".concat(myNumber, " and ").concat(myNumber.toString(), " in templated string are the same")); // 42 and 42 in templated string are the same
    // 11. String length property
    // - On editor hover => const myName: string
    var myName = "Jesús";
    console.log({ myName: myName }); // { myName: 'Jesús' }
    console.log(typeof myName); // string
    console.log(myName.length); // 5
    console.log(typeof myName.length); // number
    // 12. Accessing characters and methods
    console.log(myName.toLocaleUpperCase()); // JESÚS
    console.log(myName[0].toLocaleUpperCase()); // J
    console.log(myName[1].toLocaleUpperCase()); // E
    console.log(myName[2].toLocaleUpperCase()); // S
    console.log(myName[3].toLocaleUpperCase()); // Ú
    console.log(myName[4].toLocaleUpperCase()); // S
    // Out-of-range index returns undefined
    console.log(myName[5]); // undefined
    // Runtime Error: Uncaught TypeError: Cannot read properties of undefined (reading 'toLocaleUpperCase')
    // console.log(myName[5].toLocaleUpperCase());
    // 13. Optional chaining prevents runtime error
    console.log((_a = myName[5]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()); // undefined
    // 14. Default message when index is out of range
    // - On editor hover => let defaultMessage: string
    var defaultMessage = "String '".concat(myName, "' is indexed from 0 to ").concat(myName.length - 1);
    console.log(((_b = myName[5]) === null || _b === void 0 ? void 0 : _b.toLocaleUpperCase()) || defaultMessage); // String 'Jesús' is indexed from 0 to 4
})();
