"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// functions/functions.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 28: Basic Functions ---
    // 1. Named function returning a string
    // - Declared with function keyword
    // On editor hover => (local function) getHeroName1(): string
    var hero = "Link";
    function getHeroName1() {
        return hero;
    }
    console.log(getHeroName1); // [Function: getHeroName1]
    console.log(typeof getHeroName1); // function
    console.log(getHeroName1()); // Link
    console.log(typeof getHeroName1()); // string
    // 2. Arrow function returning a string
    // - Declared with arrow syntax
    // - On editor hover => const getHeroName2: () => string
    var getHeroName2 = function () {
        return hero;
    };
    console.log(getHeroName2); // [Function: getHeroName2]
    console.log(typeof getHeroName2); // function
    console.log(getHeroName2()); // Link
    console.log(typeof getHeroName2()); // string
    // 3. Assigning function return values to variables
    // - Both functions return a string, so variables are typed as string
    var heroName1 = getHeroName1();
    var heroName2 = getHeroName2();
    console.log(heroName1); // Link
    console.log(typeof heroName1); // string
    console.log(heroName2); // Link
    console.log(typeof heroName2); // string
})();
