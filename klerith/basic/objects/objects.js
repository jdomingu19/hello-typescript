"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// objects/objects.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 36: Basic Objects ---
    // 1. Object literal with inferred type
    // - TypeScript infers the structure from the initial properties
    // - On editor hover =>
    // let hero: {
    //   name: string;
    //   age: number;
    //   isActive: boolean;
    // }
    var hero = {
        name: "Link",
        age: 21,
        isActive: true,
    };
    console.log(hero); // { name: 'Link', age: 21, isActive: true }
    console.log(typeof hero); // object
    // 2. Invalid reassignment with extra property
    // - Error: Object literal may only specify known properties,
    // and 'powers' does not exist in type '{ name: string; age: number; isActive: boolean; }'.
    // hero = {
    //   powers: ["Power", "Wisdom", "Courage"],
    // };
    // 3. Valid reassignment with same structure
    // - Must include all required properties: name, age, isActive
    // - On editor hover =>
    // let hero: {
    //   name: string;
    //   age: number;
    //   isActive: boolean;
    // }
    hero = {
        name: "Zelda",
        age: 19,
        isActive: true,
    };
    console.log(hero); // { name: 'Zelda', age: 19, isActive: true }
    console.log(typeof hero); // object
})();
