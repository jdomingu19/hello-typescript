"use strict";
(function () {
    var myNumber = 42;
    console.log({ myNumber: myNumber });
    console.log(typeof myNumber);
    var myTypedNumber = 42;
    console.log({ myTypedNumber: myTypedNumber });
    console.log(typeof myNumber);
    var someUndefinedValue;
    console.log({ someUndefinedValue: someUndefinedValue });
    console.log(typeof someUndefinedValue);
    var userNumber = 42;
    console.log({ userNumber: userNumber });
    console.log(typeof userNumber);
    var absoluteNumber = 26;
    console.log({ absoluteNumber: absoluteNumber });
    console.log(typeof absoluteNumber);
    if (absoluteNumber < userNumber) {
        console.log("".concat(absoluteNumber, " is less than ").concat(userNumber));
    }
    else {
        console.log("".concat(absoluteNumber, " is greater than ").concat(userNumber));
    }
    var objectNumber = Number("42");
    console.log({ objectNumber: objectNumber });
    console.log(typeof objectNumber);
    var nanNumber = Number("42abc");
    console.log({ nanNumber: nanNumber });
    console.log(typeof nanNumber);
})();
//# sourceMappingURL=numbers.js.map