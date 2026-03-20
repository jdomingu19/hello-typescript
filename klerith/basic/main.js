"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
})();
(() => {
    const hero = {
        name: "Link",
        age: 21,
        isActive: true,
        title: "Hero of Time",
    };
    const { name, title } = hero;
    console.log(name, title.toUpperCase());
    const { age, isActive } = hero;
    console.log(age.toFixed(2), isActive);
    const printHeroTitle1 = (hero) => {
        console.log(hero.title);
    };
    printHeroTitle1(hero);
    const printHeroTitle2 = ({ title }) => {
        console.log(title);
    };
    printHeroTitle2(hero);
    const printHeroInfo = (_a) => {
        var { name } = _a, rest = __rest(_a, ["name"]);
        console.log(name);
        console.log(rest);
    };
    printHeroInfo(hero);
})();
//# sourceMappingURL=main.js.map