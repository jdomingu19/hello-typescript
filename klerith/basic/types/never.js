"use strict";
(function () {
    var myFunction2 = function (message) {
        throw new Error(message);
    };
    try {
        myFunction2("Something went wrong!");
    }
    catch (error) {
        console.log(error);
    }
    var myFunction6 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return;
    };
    console.log(myFunction6("Something went wrong!"));
    console.log(typeof myFunction6("Something went wrong!"));
    var myFunction7 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return;
    };
    console.log(myFunction7("Something went wrong!"));
    console.log(typeof myFunction7("Something went wrong!"));
    var myFunction8 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    console.log(myFunction8("Something went wrong!"));
    console.log(typeof myFunction8("Something went wrong!"));
})();
//# sourceMappingURL=never.js.map