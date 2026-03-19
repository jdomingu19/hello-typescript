"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// exercise-3/app.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 43: Exercise 3 ---
    var _a;
    // 1. Objects
    // 1.1 Object definition with explicit type annotation
    // - Required properties: name, alias, age, isActive
    var link = {
        name: "Link",
        alias: "Hero of Time",
        age: 21,
        isActive: true,
    };
    console.log(link); // { name: 'Link', alias: 'Hero of Time', age: 21, isActive: true }
    console.log(typeof link); // object
    // 1.2 Object definition with optional method
    // - Includes prayGoddess?: () => void
    // - Optional property must be invoked with ?. to avoid runtime errors
    var zelda = {
        name: "Zelda",
        alias: "Princess of Hyrule",
        age: 4,
        isActive: true,
        prayGoddess: function () {
            console.log("Dear Goddess Hylia...");
        },
    };
    console.log(zelda); // { name: 'Zelda', alias: 'Princess of Hyrule', age: 19, isActive: true, prayGoddess: [Function: prayGoddess] }
    console.log(typeof zelda); // object
    console.log(zelda.prayGoddess); // [Function: prayGoddess]
    (_a = zelda.prayGoddess) === null || _a === void 0 ? void 0 : _a.call(zelda); // Dear Goddess Hylia...
    // 1.3 Array of objects
    // - Each object must include name, age, isAlive
    // - age can be number or undefined
    var villains = [
        {
            name: "Ganondorf",
            age: 1000,
            isAlive: true,
        },
        {
            name: "Vaati",
            age: 200,
            isAlive: false,
        },
        {
            name: "Majora",
            age: undefined,
            isAlive: true,
        },
    ];
    console.log(villains);
    // [
    //   { name: "Ganondorf", age: 1000, isAlive: true },
    //   { name: "Vaati", age: 200, isAlive: false },
    //   { name: "Majora", age: undefined, isAlive: true }
    // ]
    console.log(typeof villains); // object
    var book1 = {
        title: "The Monk Who Sold His Ferrari",
        pages: 215,
    };
    console.log(book1); // { title: 'The Monk Who Sold His Ferrari', pages: 215 }
    console.log(typeof book1); // object
    var developer1 = {
        skills: ["TypeScript", "React Native", "Expo"],
        isActive: true,
    };
    console.log(developer1); // { skills: [ 'TypeScript', 'React Native', 'Expo' ], isActive: true }
    console.log(typeof developer1); // object
    // 3. Union Types
    // 3.1 Union type variable
    // - Can hold either BookType or DeveloperType
    var abc;
    // 3.2 Assign BookType
    abc = book1; // OK
    console.log(abc); // { title: 'The Monk Who Sold His Ferrari', pages: 215 }
    console.log(typeof abc); // object
    // 3.3 Assign DeveloperType
    abc = developer1; // OK
    console.log(developer1); // { skills: [ 'TypeScript', 'React Native', 'Expo' ], isActive: true }
    console.log(typeof developer1); // object
    // 3.4 Invalid assignment
    // Error: Type 'number' is not assignable to type 'BookType | DeveloperType'.
    // abc = 42;
})();
//# sourceMappingURL=app.js.map