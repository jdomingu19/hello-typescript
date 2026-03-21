"use strict";
(() => {
    class Hero {
        constructor(name, powers, isActive) {
            this.name = name;
            this.powers = powers;
            this.isActive = isActive !== null && isActive !== void 0 ? isActive : true;
        }
    }
    Hero.age = 21;
    console.log(Hero);
    console.log(typeof Hero);
    const link = new Hero("Link", ["Courage"]);
    console.log(link);
    console.log(typeof link);
    console.log(link.powers);
    console.log(link.isActive);
    console.log(Hero.age);
})();
(() => {
    class Hero {
        constructor(name, powers, isActive = true) {
            this.name = name;
            this.powers = powers;
            this.isActive = isActive;
        }
    }
    Hero.age = 21;
    console.log(Hero);
    console.log(typeof Hero);
    const link = new Hero("Link", ["Courage"]);
    console.log(link);
    console.log(typeof link);
    console.log(link.powers);
    console.log(link.isActive);
    console.log(Hero.age);
})();
//# sourceMappingURL=main.js.map