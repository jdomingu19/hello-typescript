"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// functions/args-rest.ts
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 32: Rest Function Arguments ---
    // 1. Function with rest parameters
    // - Rest parameters allow passing a variable number of arguments
    // - On editor hover => const getFullName: (firstName: string, ...restArgs: string[]) => string
    var getFullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        var nameString = restArgs.length === 0 ? firstName : "".concat(firstName, " ").concat(restArgs.join(" "));
        return nameString;
    };
    // 2. Call with multiple rest arguments
    var name1 = getFullName("Johann", "Wolfgang", "von", "Goethe");
    console.log({ name1: name1 }); // { name1: 'Johann Wolfgang von Goethe' }
    console.log(typeof name1); // string
    // 3. Call with three arguments
    var name2 = getFullName("Johann", "Wolfgang", "von");
    console.log({ name2: name2 }); // { name2: 'Johann Wolfgang von' }
    console.log(typeof name2); // string
    // 4. Call with two arguments
    var name3 = getFullName("Johann", "Wolfgang");
    console.log({ name3: name3 }); // { name3: 'Johann Wolfgang' }
    console.log(typeof name3); // string
    // 5. Call with only firstName
    var name4 = getFullName("Johann");
    console.log({ name4: name4 }); // { name4: 'Johann' }
    console.log(typeof name4); // string
})();
//# sourceMappingURL=args-rest.js.map