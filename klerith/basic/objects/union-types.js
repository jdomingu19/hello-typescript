"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// objects/union-types.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 41: Union Types ---
    // 2. Object typed with HeroType
    // - On editor hover => let link: HeroType
    // - Must include all required properties and greet method
    var link = {
        name: "Link",
        age: 21,
        powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link); // { name: 'Link', age: 21, powers: [ 'Courage' ], greet: [Function: greet] }
    console.log(typeof link); // object
    console.log(link.greet); // [Function: greet]
    console.log(link.greet()); // Hello, this is Link!
    // 3. Union type variable
    // - On editor hover => let myCustomVariable: string | number | HeroType
    // - Can hold values of type string, number, or HeroType
    var myCustomVariable = "Hello, TypeScript!";
    console.log(myCustomVariable); // Hello, TypeScript!
    console.log(typeof myCustomVariable); // string
    // 4. Reassignment with number
    // - myCustomVariable now holds a number
    myCustomVariable = 42;
    console.log(myCustomVariable); // 42
    console.log(typeof myCustomVariable); // number
    // 5. Reassignment with HeroType object
    // - myCustomVariable now holds an object of type HeroType
    // - greet method explicitly typed with this: HeroType to avoid union type errors
    myCustomVariable = {
        name: "Link",
        age: 21,
        powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(myCustomVariable); // { name: 'Link', age: 21, powers: [ 'Courage' ], greet: [Function: greet] }
    console.log(typeof myCustomVariable); // object
    console.log(myCustomVariable.greet); // [Function: greet]
    console.log(myCustomVariable.greet()); // Hello, this is Link!
})();
