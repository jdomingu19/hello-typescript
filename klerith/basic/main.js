"use strict";
(() => {
    class Hero {
        constructor(name, age, isActive) {
            this.name = name;
            this.age = age;
            this.isActive = isActive;
        }
    }
    class Link extends Hero {
        train() {
            return `${this.name} is training!`;
        }
    }
    class Zelda extends Hero {
        prayGoddess() {
            return "Dear Goddess Hylia...";
        }
    }
    console.log(Hero);
    console.log(typeof Hero);
    console.log(Link);
    console.log(typeof Link);
    console.log(Zelda);
    console.log(typeof Zelda);
    const link2 = new Link("Link", 21, true);
    console.log(link2);
    console.log(typeof link2);
    console.log(link2.train);
    console.log(link2.train());
    const zelda2 = new Zelda("Zelda", 19, true);
    console.log(zelda2);
    console.log(typeof zelda2);
    console.log(zelda2.prayGoddess);
    console.log(zelda2.prayGoddess());
    const printHeroName = (hero) => {
        console.log(hero.name);
    };
    printHeroName(link2);
    printHeroName(zelda2);
})();
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
            console.log("Hero constructor called!");
        }
        greet() {
            return `Hello, this is ${this.name}!`;
        }
    }
    class Link extends Hero {
        constructor(name, powers, shields, swords) {
            super(name, powers);
            this.shields = shields;
            this.swords = swords;
            console.log("Link constructor called!");
        }
        greet() {
            return super.greet();
        }
    }
    console.log(Hero);
    console.log(typeof Hero);
    const link1 = new Hero("Link", ["Courage"]);
    console.log(link1);
    console.log(typeof link1);
    console.log(Link);
    console.log(typeof Link);
    const link2 = new Link("Link", ["Courage"], ["Hylian Shield"], ["Master Sword"]);
    console.log(link2);
    console.log(typeof link2);
    console.log(link2.greet);
    console.log(link2.greet());
})();
(() => {
    class Hero {
        constructor(name, age, isActive) {
            this.name = name;
            this.age = age;
            this.isActive = isActive;
        }
        get getName() {
            return `The name's ${this.name}!`;
        }
        set setName(name) {
            this.name = name;
        }
    }
    console.log(Hero);
    console.log(typeof Hero);
    const link = new Hero("abc", 21, true);
    console.log(link);
    console.log(typeof link);
    console.log(link.getName);
    console.log((link.setName = "Link"));
    console.log(link.getName);
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