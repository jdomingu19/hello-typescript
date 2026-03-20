"use strict";
(function () {
    var hero = "Link";
    function getHeroName1() {
        return hero;
    }
    console.log(getHeroName1);
    console.log(typeof getHeroName1);
    console.log(getHeroName1());
    console.log(typeof getHeroName1());
    var getHeroName2 = function () {
        return hero;
    };
    console.log(getHeroName2);
    console.log(typeof getHeroName2);
    console.log(getHeroName2());
    console.log(typeof getHeroName2());
    var heroName1 = getHeroName1();
    var heroName2 = getHeroName2();
    console.log(heroName1);
    console.log(typeof heroName1);
    console.log(heroName2);
    console.log(typeof heroName2);
})();
//# sourceMappingURL=functions.js.map