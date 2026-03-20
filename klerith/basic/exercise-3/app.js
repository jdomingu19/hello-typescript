"use strict";
(function () {
    var _a;
    var link = {
        name: "Link",
        alias: "Hero of Time",
        age: 21,
        isActive: true,
    };
    console.log(link);
    console.log(typeof link);
    var zelda = {
        name: "Zelda",
        alias: "Princess of Hyrule",
        age: 4,
        isActive: true,
        prayGoddess: function () {
            console.log("Dear Goddess Hylia...");
        },
    };
    console.log(zelda);
    console.log(typeof zelda);
    console.log(zelda.prayGoddess);
    (_a = zelda.prayGoddess) === null || _a === void 0 ? void 0 : _a.call(zelda);
    var villains = [
        {
            name: "Ganondorf",
            age: 1000,
            isAlive: true,
        },
        {
            name: "Vaati",
            age: 200,
            isAlive: false,
        },
        {
            name: "Majora",
            age: undefined,
            isAlive: true,
        },
    ];
    console.log(villains);
    console.log(typeof villains);
    var book1 = {
        title: "The Monk Who Sold His Ferrari",
        pages: 215,
    };
    console.log(book1);
    console.log(typeof book1);
    var developer1 = {
        skills: ["TypeScript", "React Native", "Expo"],
        isActive: true,
    };
    console.log(developer1);
    console.log(typeof developer1);
    var abc;
    abc = book1;
    console.log(abc);
    console.log(typeof abc);
    abc = developer1;
    console.log(developer1);
    console.log(typeof developer1);
})();
//# sourceMappingURL=app.js.map