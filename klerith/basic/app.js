"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// app.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 8: Hello, TypeScript! ---
    // 1. TypeScript infers the type as string automatically
    // let msg1: string
    var msg1 = "Hello, TypeScript!";
    console.log(msg1); // Hello, TypeScript!
    console.log(typeof msg1); // string
    // 2. Explicit type annotation ensures msg2 must always be a string
    // let msg2: string
    var msg2 = "Hello, TypeScript!";
    console.log(msg2); // Hello, TypeScript!
    console.log(typeof msg2); // string
    // 3. Inferred as a string literal type because it's a constant
    // const msg3: "Hello, TypeScript!";
    var msg3 = "Hello, TypeScript!";
    console.log(msg3); // Hello, TypeScript!
    console.log(typeof msg3); // string
    // 4. Explicit annotation as string, not literal type
    // const msg4: "Hello, TypeScript!";
    var msg4 = "Hello, TypeScript!";
    console.log(msg4); // Hello, TypeScript!
    console.log(typeof msg4); // string
    // --- Class 10: Watch Mode on TypeScript ---
    // 1. Object with typed properties and a method using arrow function
    var hero = {
        name: "Link",
        age: 21,
        greet: function () {
            return "Hello, this is ".concat(hero.name, "!");
        },
    };
    // 2. Accessing object properties and methods
    console.log(hero); // { name: 'Link', age: 21, greet: [Function: greet] }
    console.log(hero.name); // Link
    console.log(hero.age); // 21
    console.log(hero.greet); // [Function: greet]
    console.log(hero.greet()); // Hello, this is Link!
    // 3. Updating object property with correct type
    hero.age = 22;
    console.log(hero); // { name: 'Link', age: 22, greet: [Function: greet] }
    console.log(hero.age); // 22
    // 4. Type safety prevents assigning incompatible types
    // Error: Type 'string' is not assignable to type 'number'.
    // hero.age = "22";
    // --- Class 14: Infer Types and Strict Mode ---
    // 1. Type inference with const and let
    // On editor hover => const a: 10
    // const a is inferred as literal type 10
    var a = 10;
    // On editor hover => let b: number
    // let b is inferred as number
    var b = 10;
    // 2. Explicit type annotations
    // On editor hover => const c: number
    var c = 10;
    // On editor hover => let d: number
    var d = 10;
    // 3. Variable without initialization defaults to 'any'
    // On editor hover => let e: any
    var e;
    e = "abc";
    e = 123;
    e = true;
    e = null;
    e = undefined;
    e = {};
    e = [];
    // 4. Declaring variable with explicit type enforces type safety
    // On editor hover => let f: string
    var f;
    f = "abc";
    // f = 123; Error: Type 'number' is not assignable to type 'string'.
    // f = true; Error: Type 'boolean' is not assignable to type 'string'.
    // f = null; Error:Type 'undefined' is not assignable to type 'string'.
    // f = undefined; Error: Type 'undefined' is not assignable to type 'string'.
    // f = {}; Error: Type '{}' is not assignable to type 'string'.
    // f = []; Error: Type 'never[]' is not assignable to type 'string'.
    // 5. Function without parameter type defaults to 'any'
    // Error: Parameter 'message' implicitly has an 'any' type.
    // function sayHello(message) {
    //   console.log(message);
    // }
    // 6. Function with explicit parameter type enforces type safety
    function sayHello(message) {
        console.log(message);
    }
    sayHello("Hello, TypeScript!"); // Hello, TypeScript!
    // 7. Type safety prevents passing arguments of incorrect type
    // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
    // sayHello(123);
})();
