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
        static showPowers() {
            return this.name;
        }
        constructor(name, powers, isActive = true) {
            this.name = name;
            this.powers = powers;
            this.isActive = isActive;
        }
        greet() {
            return `Hello, this is ${this.name}!`;
        }
        prayGoddess() {
            return "Dear Goddess Hylia...";
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
    console.log(link.greet);
    console.log(link.greet());
    console.log(Hero.showPowers);
    console.log(Hero.showPowers());
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