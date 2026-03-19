"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// functions/function-type.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 33: Function Type ---
    // 1. Functions with explicit type signatures
    // - On editor hover => const addTwoNumbers: (a: number, b: number) => number
    var addTwoNumbers = function (a, b) { return a + b; };
    // - On editor hover => const greetUser: (name: string) => string
    var greetUser = function (name) { return "Hello, ".concat(name, "!"); };
    // - On editor hover => const showMessage: () => string
    var showMessage = function () { return "Hello, TypeScript!"; };
    // 2. Variable with type 'any'
    // - On editor hover => let anyVariable: any
    var anyVariable;
    anyVariable = "abc";
    console.log({ anyVariable: anyVariable }); // { anyVariable: 'abc' }
    console.log(typeof anyVariable); // string
    anyVariable = 42;
    console.log({ anyVariable: anyVariable }); // { anyVariable: 42 }
    console.log(typeof anyVariable); // number
    anyVariable = true;
    console.log({ anyVariable: anyVariable }); // { anyVariable: true }
    console.log(typeof anyVariable); // boolean
    // 3. Assigning functions to 'any' variable
    // - On editor hover => let anyVariable: any
    anyVariable = addTwoNumbers;
    // - On editor hover => let anyVariable: (a: number, b: number) => number
    console.log(anyVariable(5, 6)); // 11
    // - On editor hover => let anyVariable: any
    anyVariable = greetUser;
    // - On editor hover => let anyVariable: (a: number, b: number) => number
    console.log(anyVariable("Jesús")); // Hello, Jesús!
    // - On editor hover => let anyVariable: any
    anyVariable = showMessage;
    // - On editor hover => let anyVariable: (a: number, b: number) => number
    console.log(anyVariable()); // Hello, TypeScript!
    // 4. Variable explicitly typed as Function
    // - On editor hover => let functionVariable: Function
    var functionVariable;
    // Error: Type 'string' is not assignable to type 'Function'.
    // functionVariable = "abc";
    // Error: Type 'string' is not assignable to type 'Function'.
    // functionVariable = 42;
    // Error: Type 'boolean' is not assignable to type 'Function'.
    // functionVariable = true;
    // Assigning functions works correctly
    // - On editor hover => let functionVariable: Function
    functionVariable = addTwoNumbers;
    // - On editor hover => let functionVariable: (a: number, b: number) => number
    console.log(functionVariable(5, 6)); // 11
    // - On editor hover => let functionVariable: Function
    functionVariable = greetUser;
    // - On editor hover => let functionVariable: (a: number, b: number) => number
    console.log(functionVariable("Jesús")); // Hello, Jesús!
    // - On editor hover => let functionVariable: Function
    functionVariable = showMessage;
    // - On editor hover => let functionVariable: (a: number, b: number) => number
    console.log(functionVariable()); // Hello, TypeScript!
    // 5. Variable with specific function type (parameters and return type)
    // - On editor hover => let a: (x: number, y: number) => number
    var a;
    a = addTwoNumbers;
    console.log(a(5, 6)); // 11
    // Error: Type '(name: string) => string' is not assignable to type '(x: number, y: number) => number'.
    //  Types of parameters 'name' and 'x' are incompatible.
    //    Type 'number' is not assignable to type 'string'.
    // a = greetUser;
    // Error: Type '() => string' is not assignable to type '(x: number, y: number) => number'.
    //  Type 'string' is not assignable to type 'number'.
    // a = showMessage;
    // 6. Variable with different function type
    // - On editor hover => let b: (x: number, y: number) => number
    var b;
    // Error: Type '(a: number, b: number) => number' is not assignable to type '(x: string) => string'.
    //  Target signature provides too few arguments. Expected 2 or more, but got 1.
    // b = addTwoNumbers;
    b = greetUser;
    console.log(b("Jesús")); // Hello, Jesús!
    // showMessage matches because it ignores the argument and returns string
    b = showMessage;
    console.log(b("abc")); // Hello, TypeScript!
    // 7. Variable with no-argument function type
    // - On editor hover => let b: (x: number, y: number) => number
    var c;
    // Error: Type '(a: number, b: number) => number' is not assignable to type '() => string'.
    //  Target signature provides too few arguments. Expected 2 or more, but got 0.
    // c = addTwoNumbers;
    // Error: Type '(name: string) => string' is not assignable to type '() => string'.
    //  Target signature provides too few arguments. Expected 1 or more, but got 0.
    // c = greetUser;
    c = showMessage;
    console.log(c()); // Hello, TypeScript!
})();
//# sourceMappingURL=function-type.js.map