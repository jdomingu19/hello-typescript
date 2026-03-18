"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// exercise-2/app.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 34: Exercise 2 ---
    // 1. Basic Function
    // - On editor hover => (local function) addTwoNumbers(a: number, b: number): number
    function addTwoNumbers(a, b) {
        return a + b;
    }
    console.log(addTwoNumbers); // [Function: addTwoNumbers]
    console.log(typeof addTwoNumbers); // function
    console.log(addTwoNumbers(5, 6)); // 1
    // - On editor hover => const countHeroes: (heroes: string[]) => number
    var countHeroes = function (heroes) {
        return heroes.length;
    };
    var heroesArray = [
        "Link",
        "Zelda",
        "Mipha",
        "Daruk",
        "Revali",
        "Urbosa",
    ];
    console.log(countHeroes); // [Function: countHeroes]
    console.log(typeof countHeroes); // function
    console.log(countHeroes(heroesArray)); // 6
    // 2. Default Function Parameters
    // - On editor hover => const prayGoddess: (isPraying: boolean) => void
    var prayGoddess = function (isPraying) {
        if (isPraying === void 0) { isPraying = true; }
        if (isPraying) {
            console.log("Dear Goddess Hylia...");
        }
    };
    console.log(prayGoddess); // [Function: prayGoddess]
    console.log(typeof prayGoddess); // function
    prayGoddess(); // Dear Goddess Hylia...
    prayGoddess(true); // Dear Goddess Hylia...
    // 3. Rest Function Parameters
    // - On editor hover => const joinHeroes: (heroesArray: string[]) => string
    var joinHeroes = function () {
        var heroesArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            heroesArray[_i] = arguments[_i];
        }
        return heroesArray.join(", ");
    };
    console.log(joinHeroes); // [Function: joinHeroes]
    console.log(typeof joinHeroes); // function
    console.log(joinHeroes("Link", "Zelda", "Mipha", "Daruk", "Revali", "Urbosa")); // Link, Zelda, Mipha, Daruk, Revali, Urbosa
    // 4. Function Type
    // - On editor hover => const doesNothing: (number: number, texto: string, booleano: boolean, arreglo: any[]) => void
    var doesNothing = function (number, string, boolean, array) { };
    console.log(doesNothing); // [Function: doesNothing]
    console.log(typeof doesNothing); // function
    console.log(doesNothing(42, "abc", true, [])); // undefined
    // - On editor hover => let doesNothingEither: Function
    var doesNothingEither;
    doesNothingEither = doesNothing;
    console.log(doesNothingEither); // [Function: doesNothingEither]
    console.log(typeof doesNothingEither); // function
    console.log(doesNothingEither(42, "abc", true, [])); // undefined
})();
