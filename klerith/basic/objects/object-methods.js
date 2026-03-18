"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// objects/typing-objects.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 38: Object Methods ---
    // 1. Object with method definition
    // - Explicit type annotation includes a method greet: () => void
    // - On editor hover =>
    // let hero: {
    //   name: string;
    //   age: number;
    //   isActive: boolean;
    //   powers?: string[] | undefined;
    //   greet: () => void);
    // }
    var hero = {
        name: "Link",
        age: 21,
        isActive: true,
        greet: function () {
            console.log("Hello, this is ".concat(this.name, "!"));
        },
    };
    console.log(hero); // { name: 'Link', age: 21, isActive: true, greet: [Function: greet] }
    console.log(typeof hero); // object
    hero.greet(); // Hello, this is Link!
    // 2. Reassignment including optional property and method
    // - Provides all required properties (name, age, isActive)
    // - Adds optional property powers with a string array
    // - Includes greet method to satisfy type definition
    // - On editor hover =>
    // let hero: {
    //   name: string;
    //   age: number;
    //   isActive: boolean;
    //   powers?: string[] | undefined;
    //   greet: () => void);
    // }
    hero = {
        name: "Link",
        age: 21,
        isActive: true,
        powers: ["Courage"],
        greet: function () {
            console.log("Hello, this is ".concat(this.name, "!"));
        },
    };
    console.log(hero); // { name: 'Link', age: 21, isActive: true, powers: [ 'Courage' ], greet: [Function: greet] }
    console.log(typeof hero); // object
    hero.greet(); // Hello, this is Link!
    // 3. Reassignment with same structure and method
    // - Must include all required properties and the greet method
    // - Adds optional property powers with a different value
    // - On editor hover =>
    // let hero: {
    //   name: string;
    //   age: number;
    //   isActive: boolean;
    //   powers?: string[] | undefined;
    //   greet: () => void);
    // }
    hero = {
        name: "Zelda",
        age: 19,
        isActive: true,
        powers: ["Wisdom"],
        greet: function () {
            console.log("Hello, this is ".concat(this.name, "!"));
        },
    };
    console.log(hero); // { name: 'Zelda', age: 19, isActive: true, powers: [ 'Wisdom' ], greet: [Function: greet] }
    console.log(typeof hero); // object
    hero.greet(); // Hello, this is Zelda!
})();
