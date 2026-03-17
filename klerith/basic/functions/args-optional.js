"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// functions/args-optional.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 30: Optional Function Arguments ---
    // 1. Function with optional parameter
    // - lastName is optional (may be undefined)
    // - On editor hover => const fullName: (firstName: string, lastName?: string | undefined) => string
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    console.log(fullName); // [Function: fullName]
    console.log(typeof fullName); // function
    // Call with both arguments
    var userFullName = fullName("Jesús", "Domínguez");
    console.log({ userFullName: userFullName }); // { userFullName: 'Jesús Domínguez' }
    console.log(typeof userFullName); // string
    // Error: Expected 1-2 arguments, but got 0.
    // const userFullName3 = fullName();
    // Call with only firstName
    var userFullName3 = fullName("Jesús");
    console.log({ userFullName3: userFullName3 }); // { userFullName3: 'Jesús undefined' }
    console.log(typeof userFullName3); // string
    // 2. Function with optional parameter and default value
    // - If lastName is undefined, use "---" instead
    // - On editor hover => const fullNameDefault: (firstName: string, lastName?: string | undefined) => string
    var fullNameDefault = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "---");
    };
    console.log(fullNameDefault); // [Function: fullNameDefault]
    console.log(typeof fullNameDefault); // function
    // Call with both arguments
    var userFullName4 = fullNameDefault("Jesús", "Domínguez");
    console.log({ userFullName4: userFullName4 }); // { userFullName4: 'Jesús Domínguez' }
    console.log(typeof userFullName4); // string
    // Error: Expected 1-2 arguments, but got 0.
    // const userFullName5 = fullNameDefault();
    // Call with only firstName
    var userFullName6 = fullNameDefault("Jesús");
    console.log({ userFullName6: userFullName6 }); // { userFullName6: 'Jesús ---' }
    console.log(typeof userFullName6); // string
    // 3. Function with explicit undefined check
    // - Uses conditional logic to handle missing lastName
    // - On editor hover => const fullNameDefault2: (firstName: string, lastName?: string | undefined) => string
    var fullNameDefault2 = function (firstName, lastName) {
        // if (typeof lastName === "undefined") {
        //   return firstName;
        // } else {
        //   return `${firstName} ${lastName}`;
        // }
        var username = typeof lastName === "undefined" ? firstName : "".concat(firstName, " ").concat(lastName);
        return username;
    };
    console.log(fullNameDefault2); // [Function: fullNameDefault2]
    console.log(typeof fullNameDefault2); // function
    // Call with both arguments
    var userFullName7 = fullNameDefault2("Jesús", "Domínguez");
    console.log({ userFullName7: userFullName7 }); // { userFullName7: 'Jesús Domínguez' }
    console.log(typeof userFullName7); // string
    // Error: Expected 1-2 arguments, but got 0.
    // const userFullName8 = fullNameDefault();
    // Call with only firstName
    var userFullName9 = fullNameDefault2("Jesús");
    console.log({ userFullName9: userFullName9 }); // { userFullName9: 'Jesús' }
    console.log(typeof userFullName9); // string
    // 4. Function with optional numeric parameters (any type)
    // - On editor hover => const addNumbers: (a?: any, b?: any, c?: any) => any
    var addNumbers = function (a, b, c) {
        return a + b + c;
    };
    console.log(addNumbers()); // NaN
    console.log(addNumbers(1)); // NaN
    console.log(addNumbers(1, 2)); // NaN
    console.log(addNumbers(1, 2, 3)); // 6
    // 5. Function with default values using 'undefined as any'
    // - On editor hover => const addNumbers2: (a?: number, b?: number, c?: number) => number
    var addNumbers2 = function (a, b, c) {
        if (a === void 0) { a = undefined; }
        if (b === void 0) { b = undefined; }
        if (c === void 0) { c = undefined; }
        return a + b + c;
    };
    console.log(addNumbers2()); // NaN
    console.log(addNumbers2(1)); // NaN
    console.log(addNumbers2(1, 2)); // NaN
    console.log(addNumbers2(1, 2, 3)); // 6
    // 6. Function with nullish coalescing operator
    // - On editor hover => const addNumbers3: (a?: number | undefined, b?: number | undefined, c?: number | undefined) => number
    var addNumbers3 = function (a, b, c) {
        return ((a !== null && a !== void 0 ? a : undefined) +
            (b !== null && b !== void 0 ? b : undefined) +
            (c !== null && c !== void 0 ? c : undefined));
    };
    console.log(addNumbers3()); // NaN
    console.log(addNumbers3(1)); // NaN
    console.log(addNumbers3(1, 2)); // NaN
    console.log(addNumbers3(1, 2, 3)); // 6
    // 7. Function with explicit undefined type in parameters
    // - On editor hover => const addNumbers4: (a?: number | undefined, b?: number | undefined, c?: number | undefined) => number
    var addNumbers4 = function (a, b, c) {
        return ((a !== null && a !== void 0 ? a : undefined) +
            (b !== null && b !== void 0 ? b : undefined) +
            (c !== null && c !== void 0 ? c : undefined));
    };
    console.log(addNumbers4()); // NaN
    console.log(addNumbers4(1)); // NaN
    console.log(addNumbers4(1, 2)); // NaN
    console.log(addNumbers4(1, 2, 3)); // 6
})();
