"use strict";
(function () {
    var fullName = function (firstName, lastName, toUpperCase) {
        if (toUpperCase === void 0) { toUpperCase = false; }
        var name = typeof lastName === "undefined" ? firstName : "".concat(firstName, " ").concat(lastName);
        name = toUpperCase ? name.toUpperCase() : name;
        return name;
    };
    console.log(fullName);
    console.log(typeof fullName);
    var username1 = fullName("Jesús");
    console.log(username1);
    console.log(typeof username1);
    var username2 = fullName("Jesús", "Domínguez");
    console.log(username2);
    console.log(typeof username2);
    var username3 = fullName("Jesús", "Domínguez", false);
    console.log(username3);
    console.log(typeof username3);
    var username4 = fullName("Jesús", "Domínguez", true);
    console.log(username4);
    console.log(typeof username4);
})();
//# sourceMappingURL=args-default.js.map