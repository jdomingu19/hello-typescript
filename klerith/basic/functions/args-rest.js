"use strict";
(function () {
    var getFullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        var nameString = restArgs.length === 0 ? firstName : "".concat(firstName, " ").concat(restArgs.join(" "));
        return nameString;
    };
    var name1 = getFullName("Johann", "Wolfgang", "von", "Goethe");
    console.log({ name1: name1 });
    console.log(typeof name1);
    var name2 = getFullName("Johann", "Wolfgang", "von");
    console.log({ name2: name2 });
    console.log(typeof name2);
    var name3 = getFullName("Johann", "Wolfgang");
    console.log({ name3: name3 });
    console.log(typeof name3);
    var name4 = getFullName("Johann");
    console.log({ name4: name4 });
    console.log(typeof name4);
})();
//# sourceMappingURL=args-rest.js.map