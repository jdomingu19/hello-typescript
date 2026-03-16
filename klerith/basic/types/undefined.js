"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/undefined.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 25: Undefined ---
    // 1. Variable inferred as any
    // - When initialized with undefined, type is inferred as any
    // - Can later be reassigned to null or other value
    // - On editor hover => let a: any
    var a = undefined;
    console.log({ a: a }); // { a: undefined }
    console.log(typeof a); // undefined
    a = null;
    console.log({ a: a }); // { a: null }
    console.log(typeof a); // object
    // 2. Variable explicitly typed as undefined
    // - Can only hold undefined
    // - On editor hover => let b: undefined
    var b = undefined;
    console.log({ b: b }); // { b: undefined }
    console.log(typeof b); // undefined
    // Error: Type 'null' is not assignable to type 'undefined'.
    // b = null;
    // 3. Strict null checks disabled
    // - tsconfig.json => strictNullChecks: false;
    // - Variables of other types can be assigned null or undefined
    // let c: number = 42;
    // c = null; // Ok if strictNullChecks is false
    // c = undefined; // Ok if strictNullChecks is false
    // 4. Comparison between undefined and null
    // - == considers them equal (loose equality)
    // - === distinguishes them (strict equality)
    console.log(undefined == null); // true
    console.log(undefined === null); // false
    console.log(undefined != null); // false
    console.log(undefined !== null); // true
})();
