"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    console.log(fullName);
    console.log(typeof fullName);
    var userFullName = fullName("Jesús", "Domínguez");
    console.log({ userFullName: userFullName });
    console.log(typeof userFullName);
    var userFullName3 = fullName("Jesús");
    console.log({ userFullName3: userFullName3 });
    console.log(typeof userFullName3);
    var fullNameDefault = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "---");
    };
    console.log(fullNameDefault);
    console.log(typeof fullNameDefault);
    var userFullName4 = fullNameDefault("Jesús", "Domínguez");
    console.log({ userFullName4: userFullName4 });
    console.log(typeof userFullName4);
    var userFullName6 = fullNameDefault("Jesús");
    console.log({ userFullName6: userFullName6 });
    console.log(typeof userFullName6);
    var fullNameDefault2 = function (firstName, lastName) {
        var username = typeof lastName === "undefined" ? firstName : "".concat(firstName, " ").concat(lastName);
        return username;
    };
    console.log(fullNameDefault2);
    console.log(typeof fullNameDefault2);
    var userFullName7 = fullNameDefault2("Jesús", "Domínguez");
    console.log({ userFullName7: userFullName7 });
    console.log(typeof userFullName7);
    var userFullName9 = fullNameDefault2("Jesús");
    console.log({ userFullName9: userFullName9 });
    console.log(typeof userFullName9);
    var addNumbers = function (a, b, c) {
        return a + b + c;
    };
    console.log(addNumbers());
    console.log(addNumbers(1));
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    var addNumbers2 = function (a, b, c) {
        if (a === void 0) { a = undefined; }
        if (b === void 0) { b = undefined; }
        if (c === void 0) { c = undefined; }
        return a + b + c;
    };
    console.log(addNumbers2());
    console.log(addNumbers2(1));
    console.log(addNumbers2(1, 2));
    console.log(addNumbers2(1, 2, 3));
    var addNumbers3 = function (a, b, c) {
        return ((a !== null && a !== void 0 ? a : undefined) +
            (b !== null && b !== void 0 ? b : undefined) +
            (c !== null && c !== void 0 ? c : undefined));
    };
    console.log(addNumbers3());
    console.log(addNumbers3(1));
    console.log(addNumbers3(1, 2));
    console.log(addNumbers3(1, 2, 3));
    var addNumbers4 = function (a, b, c) {
        return ((a !== null && a !== void 0 ? a : undefined) +
            (b !== null && b !== void 0 ? b : undefined) +
            (c !== null && c !== void 0 ? c : undefined));
    };
    console.log(addNumbers4());
    console.log(addNumbers4(1));
    console.log(addNumbers4(1, 2));
    console.log(addNumbers4(1, 2, 3));
})();
//# sourceMappingURL=args-optional.js.map