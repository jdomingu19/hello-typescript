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
    const heroesArray = [
        "Link",
        "Zelda",
        "Mipha",
        "Urbosa",
        "Daruk",
        "Revali",
    ];
    console.log(heroesArray);
    console.log(typeof heroesArray);
    const link1 = heroesArray[0];
    const revali1 = heroesArray[5];
    console.log(link1);
    console.log(typeof link1);
    console.log(revali1);
    console.log(typeof revali1);
    const [link2, , , , , revali2] = heroesArray;
    console.log(link2);
    console.log(typeof link2);
    console.log(revali2);
    console.log(typeof revali2);
    const [link3, ...rest] = heroesArray;
    console.log(link3);
    console.log(typeof link3);
    console.log(rest);
    console.log(typeof rest);
})();
(() => {
    const link = {
        name: "Link",
        alias: "Hero of Time",
    };
    const zelda = {
        name: "Zelda",
        alias: "Princess of Hyrule",
    };
    const revali = {
        name: "Revali",
        alias: "Rito Champion",
    };
    const heroesArray = [link, zelda, revali];
    for (let i = 0; i < heroesArray.length; i++) {
        console.log(heroesArray[i]);
    }
    for (let i = 0; i < heroesArray.length; i++) {
        console.log(heroesArray[i].name);
    }
    for (const hero of heroesArray) {
        console.log(hero);
    }
    for (const hero of heroesArray) {
        console.log(hero.name);
    }
})();
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