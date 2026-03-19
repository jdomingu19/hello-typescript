"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// exercise-1/app.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 26: Exercise 1 ---
    // 1. Types
    var link = "Hero of Time";
    var zelda = "Princess of Hyrule";
    var isActive = true;
    console.log({ link: link }); // { link: 'Hero of Time' }
    console.log({ zelda: zelda }); // { zelda: 'Princess of Hyrule' }
    console.log({ isActive: isActive }); // { isActive: true }
    console.log(typeof link); // string
    console.log(typeof zelda); // string
    console.log(typeof isActive); // boolean
    // 2. Tuples
    var heroTuple = [link, zelda];
    var villainToDefeat = ["Ganondorf", 5, true];
    console.log({ heroTuple: heroTuple }); // { heroTuple: [ 'Hero of Time', 'Princess of Hyrule' ] }
    console.log({ villainToDefeat: villainToDefeat }); // { villainToDefeat: [ 'Ganondorf', 5, true ] }
    console.log(typeof heroTuple); // object
    console.log(typeof villainToDefeat); // object
    // 3. Arrays
    var heroAllies = ["Mipha", "Daruk", "Revali", "Urbosa"];
    console.log({ heroAllies: heroAllies }); // { heroAllies: [ 'Mipha', 'Daruk', 'Revali', 'Urbosa' ] }
    console.log(typeof heroAllies); // object
    // 4. Enums
    var CharacterPower;
    (function (CharacterPower) {
        CharacterPower[CharacterPower["ganondorf"] = 0] = "ganondorf";
        CharacterPower[CharacterPower["revali"] = 1] = "revali";
        CharacterPower[CharacterPower["link"] = 5] = "link";
        CharacterPower[CharacterPower["zelda"] = 100] = "zelda";
    })(CharacterPower || (CharacterPower = {}));
    var linkPower = CharacterPower.link;
    var zeldaPower = CharacterPower.zelda;
    var revaliPower = CharacterPower.revali;
    var ganondorfPower = CharacterPower.ganondorf;
    console.log(CharacterPower); // { 0: 'ganondorf', 1: 'revali', 5: 'link', 100: 'zelda', link: 5, zelda: 100, revali: 1, ganondorf: 0 }
    console.log({ linkPower: linkPower }); // { linkPower: 5 }
    console.log({ zeldaPower: zeldaPower }); // { zeldaPower: 100 }
    console.log({ revaliPower: revaliPower }); // { revaliPower: 1 }
    console.log({ ganondorfPower: ganondorfPower }); // { ganondorfPower: 0 }
    // 5. Function return
    function useTriforce() {
        return "Using Triforce!";
    }
    function prayGoddess() {
        console.log("Dear Goddess Hylia...");
    }
    console.log(useTriforce); // function useTriforce() { return "Using Triforce!"; }
    console.log(useTriforce()); // Using Triforce!
    console.log(prayGoddess); // function useTriforce() { console.log("Goddess Hylia..."); }
    prayGoddess(); // Dear Goddess Hylia...
    // 6. Type Assertions
    var power = "100";
    var powerLength = power.length;
    // const powerLength2: number = (<string>power).length; // Use `value as type` instead
    console.log({ power: power }); // { power: '100' }
    console.log(typeof power); // string
    console.log({ powerLength: powerLength }); // { powerLength: 3 }
    console.log(typeof powerLength); // number
})();
//# sourceMappingURL=app.js.map