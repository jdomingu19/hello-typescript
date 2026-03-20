"use strict";
(function () {
    var link = {
        name: "Link",
        age: 21,
        powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link);
    console.log(typeof link);
    console.log(link.greet);
    console.log(link.greet());
    var myCustomVariable = "Hello, TypeScript!";
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 42;
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Link",
        age: 21,
        powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable.greet);
    console.log(myCustomVariable.greet());
})();
//# sourceMappingURL=union-types.js.map