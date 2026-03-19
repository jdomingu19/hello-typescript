"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/null.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 24: Null ---
    // 1. Variable inferred as any
    // - When initialized with null, type is inferred as any
    // - On editor hover => let a: any
    var a = null;
    console.log({ a: a }); // { a: null }
    console.log(typeof a); // object
    a = undefined;
    console.log({ a: a }); // { a: undefined }
    console.log(typeof a); // undefined
    // 2. Variable explicitly typed as null
    // - Can only hold null
    // - On editor hover => let b: null
    var b = null;
    console.log({ b: b }); // { b: null }
    console.log(typeof b); // object
    // Error: Type 'undefined' is not assignable to type 'null'.
    // b = undefined;
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
//# sourceMappingURL=null.js.map