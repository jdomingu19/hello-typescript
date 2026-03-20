"use strict";
(function () {
    var msg1 = "Hello, TypeScript!";
    console.log(msg1);
    console.log(typeof msg1);
    var msg2 = "Hello, TypeScript!";
    console.log(msg2);
    console.log(typeof msg2);
    var msg3 = "Hello, TypeScript!";
    console.log(msg3);
    console.log(typeof msg3);
    var msg4 = "Hello, TypeScript!";
    console.log(msg4);
    console.log(typeof msg4);
    var hero = {
        name: "Link",
        age: 21,
        greet: function () {
            return "Hello, this is ".concat(hero.name, "!");
        },
    };
    console.log(hero);
    console.log(hero.name);
    console.log(hero.age);
    console.log(hero.greet);
    console.log(hero.greet());
    hero.age = 22;
    console.log(hero);
    console.log(hero.age);
    var a = 10;
    var b = 10;
    var c = 10;
    var d = 10;
    var e;
    e = "abc";
    e = 123;
    e = true;
    e = null;
    e = undefined;
    e = {};
    e = [];
    var f;
    f = "abc";
    function sayHello(message) {
        console.log(message);
    }
    sayHello("Hello, TypeScript!");
})();
//# sourceMappingURL=app.js.map