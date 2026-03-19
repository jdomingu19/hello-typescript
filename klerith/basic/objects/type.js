"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// objects/type.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 40: Type ---
    // 2. Object typed with HeroType
    // - On editor hover => let link: HeroType
    // - Must include all required properties and greet method
    var link = {
        name: "Link",
        age: 21,
        // powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link); // { name: 'Link', age: 21, greet: [Function: greet] }
    console.log(typeof link); // object
    console.log(link.greet); // [Function: greet]
    console.log(link.greet()); // Hello, this is Link!
    // 3. Another object typed with HeroType
    // - On editor hover => let zelda: HeroType
    // - Same structure, different values
    var zelda = {
        name: "Zelda",
        age: 19,
        // powers: ["Wisdom"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(zelda); // { name: 'Zelda', age: 19, greet: [Function: greet] }
    console.log(typeof zelda); // object
    console.log(zelda.greet); // [Function: greet]
    console.log(zelda.greet()); // Hello, this is Zelda!
    // 4. Invalid object assignment
    // - On editor hover => let abc: HeroType
    // - Errors:
    //    * Type 'number' is not assignable to type 'string'.
    //    * Type 'boolean' is not assignable to type 'string'.
    //    * Type 'string' is not assignable to type 'string'.
    //    * Property 'greet' is missing in type '{ name: string; age: number; powers: string[]; }'
    //    * but required in type 'HeroType'.
    // let abc: HeroType = {
    //   name: 42,
    //   age: true,
    //   powers: "abc",
    // };
    // 5. Valid reassignment with optional property
    // - On editor hover => let link: HeroType
    // - Adds powers array and keeps greet method
    link = {
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
    // 6. Valid reassignment with optional property
    // - On editor hover => let zelda: HeroType
    // - Adds powers array and keeps greet method
    zelda = {
        name: "Zelda",
        age: 19,
        powers: ["Wisdom"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(zelda); // { name: 'Zelda', age: 19, powers: [ 'Wisdom' ], greet: [Function: greet] }
    console.log(typeof zelda); // object
    console.log(zelda.greet); // [Function: greet]
    console.log(zelda.greet()); // Hello, this is Zelda!
})();
