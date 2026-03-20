"use strict";
(function () {
    var link = {
        name: "Link",
        age: 21,
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link);
    console.log(typeof link);
    console.log(link.greet);
    console.log(link.greet());
    var zelda = {
        name: "Zelda",
        age: 19,
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(zelda);
    console.log(typeof zelda);
    console.log(zelda.greet);
    console.log(zelda.greet());
    link = {
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
    zelda = {
        name: "Zelda",
        age: 19,
        powers: ["Wisdom"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(zelda);
    console.log(typeof zelda);
    console.log(zelda.greet);
    console.log(zelda.greet());
})();
//# sourceMappingURL=type.js.map