"use strict";
(function () {
    var hero = {
        name: "Link",
        age: 21,
        isActive: true,
        greet: function () {
            console.log("Hello, this is ".concat(this.name, "!"));
        },
    };
    console.log(hero);
    console.log(typeof hero);
    hero.greet();
    hero = {
        name: "Link",
        age: 21,
        isActive: true,
        powers: ["Courage"],
        greet: function () {
            console.log("Hello, this is ".concat(this.name, "!"));
        },
    };
    console.log(hero);
    console.log(typeof hero);
    hero.greet();
    hero = {
        name: "Zelda",
        age: 19,
        isActive: true,
        powers: ["Wisdom"],
        greet: function () {
            console.log("Hello, this is ".concat(this.name, "!"));
        },
    };
    console.log(hero);
    console.log(typeof hero);
    hero.greet();
})();
//# sourceMappingURL=object-methods.js.map