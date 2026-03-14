"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(function () {
    // --- Class 16: Numbers ---
    // 1. Type inference with numeric literal
    // - Inferred as literal type 42 because it's a const
    // - TypeScript knows the exact value and type
    // - On editor hover => const myNumber: 42
    var myNumber = 42;
    console.log({ myNumber: myNumber }); // { myNumber: 42 }
    console.log(typeof myNumber); // number
    // 2. Explicit type annotation for number
    // - Declared as type number, not literal
    // - More flexible, allows reassignment with other numeric values
    // - On editor hover => const myTypedNumber: number
    var myTypedNumber = 42;
    console.log({ myTypedNumber: myTypedNumber }); // { myTypedNumber: 42 }
    console.log(typeof myNumber); // number
    // 3. Variable without initialization defaults to 'any'
    // - Value is undefined until assigned
    // - TypeScript warns when comparing with typed numbers
    // - On editor hover => let someUndefinedValue: any
    var someUndefinedValue;
    console.log({ someUndefinedValue: someUndefinedValue }); // { someUndefinedValue: undefined }
    console.log(typeof someUndefinedValue); // undefined
    var userNumber = 42;
    console.log({ userNumber: userNumber }); // { userNumber: 42 }
    console.log(typeof userNumber); // number
    // Error: 'someUndefinedValue' is possibly 'undefined'.
    // TypeScript prevents unsafe comparison between undefined and number
    // if (someUndefinedValue < userNumber) {
    //   console.log(`${someUndefinedValue} is less than ${userNumber}`);
    // } else {
    //   // On the .js file it outputs "'someUndefinedValue' is possibly 'undefined'."
    //   console.log(`${someUndefinedValue} is greater than ${userNumber}`);
    // }
    // 4. Safe numeric comparison
    // - Declared as number, initialized with 26
    // - Comparison works correctly because both are numbers
    // - On editor hover => let absoluteNumber: number
    var absoluteNumber = 26;
    console.log({ absoluteNumber: absoluteNumber }); // { absoluteNumber: undefined }
    console.log(typeof absoluteNumber); // number
    if (absoluteNumber < userNumber) {
        // On the .js file it outputs "26 is less than 42"
        console.log("".concat(absoluteNumber, " is less than ").concat(userNumber));
    }
    else {
        console.log("".concat(absoluteNumber, " is greater than ").concat(userNumber));
    }
    // 5. Converting string to number
    // - Using Number() constructor to parse numeric string
    // - Result is a valid number type
    // - On editor hover => let objectNumber: number
    var objectNumber = Number("42");
    console.log({ objectNumber: objectNumber }); // { objectNumber: 42 }
    console.log(typeof objectNumber); // number
    // 6. Invalid numeric conversion
    // - Parsing non-numeric string results in NaN
    // - Still typed as number, but value is Not-a-Number
    // - On editor hover => let nanNumber: number
    var nanNumber = Number("42abc");
    console.log({ nanNumber: nanNumber }); // { nanNumber: NaN }
    console.log(typeof nanNumber); // number
})();
