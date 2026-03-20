"use strict";
(function () {
    function addTwoNumbers(a, b) {
        return a + b;
    }
    console.log(addTwoNumbers);
    console.log(typeof addTwoNumbers);
    console.log(addTwoNumbers(5, 6));
    var countHeroes = function (heroes) {
        return heroes.length;
    };
    var heroesArray = [
        "Link",
        "Zelda",
        "Mipha",
        "Daruk",
        "Revali",
        "Urbosa",
    ];
    console.log(countHeroes);
    console.log(typeof countHeroes);
    console.log(countHeroes(heroesArray));
    var prayGoddess = function (isPraying) {
        if (isPraying === void 0) { isPraying = true; }
        if (isPraying) {
            console.log("Dear Goddess Hylia...");
        }
    };
    console.log(prayGoddess);
    console.log(typeof prayGoddess);
    prayGoddess();
    prayGoddess(true);
    var joinHeroes = function () {
        var heroesArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            heroesArray[_i] = arguments[_i];
        }
        return heroesArray.join(", ");
    };
    console.log(joinHeroes);
    console.log(typeof joinHeroes);
    console.log(joinHeroes("Link", "Zelda", "Mipha", "Daruk", "Revali", "Urbosa"));
    var doesNothing = function (number, string, boolean, array) { };
    console.log(doesNothing);
    console.log(typeof doesNothing);
    console.log(doesNothing(42, "abc", true, []));
    var doesNothingEither;
    doesNothingEither = doesNothing;
    console.log(doesNothingEither);
    console.log(typeof doesNothingEither);
    console.log(doesNothingEither(42, "abc", true, []));
})();
//# sourceMappingURL=app.js.map