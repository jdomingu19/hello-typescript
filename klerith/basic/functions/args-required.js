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
})();
//# sourceMappingURL=args-required.js.map