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
(function () {
    var link = "Hero of Time";
    var zelda = "Princess of Hyrule";
    var isActive = true;
    console.log({ link: link });
    console.log({ zelda: zelda });
    console.log({ isActive: isActive });
    console.log(typeof link);
    console.log(typeof zelda);
    console.log(typeof isActive);
    var heroTuple = [link, zelda];
    var villainToDefeat = ["Ganondorf", 5, true];
    console.log({ heroTuple: heroTuple });
    console.log({ villainToDefeat: villainToDefeat });
    console.log(typeof heroTuple);
    console.log(typeof villainToDefeat);
    var heroAllies = ["Mipha", "Daruk", "Revali", "Urbosa"];
    console.log({ heroAllies: heroAllies });
    console.log(typeof heroAllies);
    var CharacterPower;
    (function (CharacterPower) {
        CharacterPower[CharacterPower["ganondorf"] = 0] = "ganondorf";
        CharacterPower[CharacterPower["revali"] = 1] = "revali";
        CharacterPower[CharacterPower["link"] = 5] = "link";
        CharacterPower[CharacterPower["zelda"] = 100] = "zelda";
    })(CharacterPower || (CharacterPower = {}));
    var linkPower = CharacterPower.link;
    var zeldaPower = CharacterPower.zelda;
    var revaliPower = CharacterPower.revali;
    var ganondorfPower = CharacterPower.ganondorf;
    console.log(CharacterPower);
    console.log({ linkPower: linkPower });
    console.log({ zeldaPower: zeldaPower });
    console.log({ revaliPower: revaliPower });
    console.log({ ganondorfPower: ganondorfPower });
    function useTriforce() {
        return "Using Triforce!";
    }
    function prayGoddess() {
        console.log("Dear Goddess Hylia...");
    }
    console.log(useTriforce);
    console.log(useTriforce());
    console.log(prayGoddess);
    prayGoddess();
    var power = "100";
    var powerLength = power.length;
    console.log({ power: power });
    console.log(typeof power);
    console.log({ powerLength: powerLength });
    console.log(typeof powerLength);
})();
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
(function () {
    var fullName = function (firstName, lastName, toUpperCase) {
        if (toUpperCase === void 0) { toUpperCase = false; }
        var name = typeof lastName === "undefined" ? firstName : "".concat(firstName, " ").concat(lastName);
        name = toUpperCase ? name.toUpperCase() : name;
        return name;
    };
    console.log(fullName);
    console.log(typeof fullName);
    var username1 = fullName("Jesús");
    console.log(username1);
    console.log(typeof username1);
    var username2 = fullName("Jesús", "Domínguez");
    console.log(username2);
    console.log(typeof username2);
    var username3 = fullName("Jesús", "Domínguez", false);
    console.log(username3);
    console.log(typeof username3);
    var username4 = fullName("Jesús", "Domínguez", true);
    console.log(username4);
    console.log(typeof username4);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    console.log(fullName);
    console.log(typeof fullName);
    var userFullName = fullName("Jesús", "Domínguez");
    console.log({ userFullName: userFullName });
    console.log(typeof userFullName);
    var userFullName3 = fullName("Jesús");
    console.log({ userFullName3: userFullName3 });
    console.log(typeof userFullName3);
    var fullNameDefault = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "---");
    };
    console.log(fullNameDefault);
    console.log(typeof fullNameDefault);
    var userFullName4 = fullNameDefault("Jesús", "Domínguez");
    console.log({ userFullName4: userFullName4 });
    console.log(typeof userFullName4);
    var userFullName6 = fullNameDefault("Jesús");
    console.log({ userFullName6: userFullName6 });
    console.log(typeof userFullName6);
    var fullNameDefault2 = function (firstName, lastName) {
        var username = typeof lastName === "undefined" ? firstName : "".concat(firstName, " ").concat(lastName);
        return username;
    };
    console.log(fullNameDefault2);
    console.log(typeof fullNameDefault2);
    var userFullName7 = fullNameDefault2("Jesús", "Domínguez");
    console.log({ userFullName7: userFullName7 });
    console.log(typeof userFullName7);
    var userFullName9 = fullNameDefault2("Jesús");
    console.log({ userFullName9: userFullName9 });
    console.log(typeof userFullName9);
    var addNumbers = function (a, b, c) {
        return a + b + c;
    };
    console.log(addNumbers());
    console.log(addNumbers(1));
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    var addNumbers2 = function (a, b, c) {
        if (a === void 0) { a = undefined; }
        if (b === void 0) { b = undefined; }
        if (c === void 0) { c = undefined; }
        return a + b + c;
    };
    console.log(addNumbers2());
    console.log(addNumbers2(1));
    console.log(addNumbers2(1, 2));
    console.log(addNumbers2(1, 2, 3));
    var addNumbers3 = function (a, b, c) {
        return ((a !== null && a !== void 0 ? a : undefined) +
            (b !== null && b !== void 0 ? b : undefined) +
            (c !== null && c !== void 0 ? c : undefined));
    };
    console.log(addNumbers3());
    console.log(addNumbers3(1));
    console.log(addNumbers3(1, 2));
    console.log(addNumbers3(1, 2, 3));
    var addNumbers4 = function (a, b, c) {
        return ((a !== null && a !== void 0 ? a : undefined) +
            (b !== null && b !== void 0 ? b : undefined) +
            (c !== null && c !== void 0 ? c : undefined));
    };
    console.log(addNumbers4());
    console.log(addNumbers4(1));
    console.log(addNumbers4(1, 2));
    console.log(addNumbers4(1, 2, 3));
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    console.log(fullName);
    console.log(typeof fullName);
    var userFullName = fullName("Jesús", "Domínguez");
    console.log({ userFullName: userFullName });
    console.log(typeof userFullName);
})();
(function () {
    var getFullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        var nameString = restArgs.length === 0 ? firstName : "".concat(firstName, " ").concat(restArgs.join(" "));
        return nameString;
    };
    var name1 = getFullName("Johann", "Wolfgang", "von", "Goethe");
    console.log({ name1: name1 });
    console.log(typeof name1);
    var name2 = getFullName("Johann", "Wolfgang", "von");
    console.log({ name2: name2 });
    console.log(typeof name2);
    var name3 = getFullName("Johann", "Wolfgang");
    console.log({ name3: name3 });
    console.log(typeof name3);
    var name4 = getFullName("Johann");
    console.log({ name4: name4 });
    console.log(typeof name4);
})();
(function () {
    var addTwoNumbers = function (a, b) { return a + b; };
    var greetUser = function (name) { return "Hello, ".concat(name, "!"); };
    var showMessage = function () { return "Hello, TypeScript!"; };
    var anyVariable;
    anyVariable = "abc";
    console.log({ anyVariable: anyVariable });
    console.log(typeof anyVariable);
    anyVariable = 42;
    console.log({ anyVariable: anyVariable });
    console.log(typeof anyVariable);
    anyVariable = true;
    console.log({ anyVariable: anyVariable });
    console.log(typeof anyVariable);
    anyVariable = addTwoNumbers;
    console.log(anyVariable(5, 6));
    anyVariable = greetUser;
    console.log(anyVariable("Jesús"));
    anyVariable = showMessage;
    console.log(anyVariable());
    var functionVariable;
    functionVariable = addTwoNumbers;
    console.log(functionVariable(5, 6));
    functionVariable = greetUser;
    console.log(functionVariable("Jesús"));
    functionVariable = showMessage;
    console.log(functionVariable());
    var a;
    a = addTwoNumbers;
    console.log(a(5, 6));
    var b;
    b = greetUser;
    console.log(b("Jesús"));
    b = showMessage;
    console.log(b("abc"));
    var c;
    c = showMessage;
    console.log(c());
})();
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
(function () {
    var link = {
        name: "Link",
        age: 21,
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link);
    console.log(typeof link);
    console.log(link.greet());
})();
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
(function () {
    var hero = {
        name: "Link",
        age: 21,
        isActive: true,
    };
    console.log(hero);
    console.log(typeof hero);
    hero = {
        name: "Zelda",
        age: 19,
        isActive: true,
    };
    console.log(hero);
    console.log(typeof hero);
})();
(function () {
    var link = {
        name: "Link",
        age: 21,
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link);
    console.log(typeof link);
    console.log(link.greet);
    console.log(link.greet());
    var zelda = {
        name: "Zelda",
        age: 19,
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(zelda);
    console.log(typeof zelda);
    console.log(zelda.greet);
    console.log(zelda.greet());
    link = {
        name: "Link",
        age: 21,
        powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link);
    console.log(typeof link);
    console.log(link.greet);
    console.log(link.greet());
    zelda = {
        name: "Zelda",
        age: 19,
        powers: ["Wisdom"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(zelda);
    console.log(typeof zelda);
    console.log(zelda.greet);
    console.log(zelda.greet());
})();
(function () {
    var hero = {
        name: "Link",
        age: 21,
        isActive: true,
    };
    console.log(hero);
    console.log(typeof hero);
    hero = {
        name: "Link",
        age: 21,
        isActive: true,
        powers: ["Courage"],
    };
    console.log(hero);
    console.log(typeof hero);
    hero = {
        name: "Zelda",
        age: 19,
        isActive: true,
        powers: ["Wisdom"],
    };
    console.log(hero);
    console.log(typeof hero);
})();
(function () {
    var link = {
        name: "Link",
        age: 21,
        powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(link);
    console.log(typeof link);
    console.log(link.greet);
    console.log(link.greet());
    var myCustomVariable = "Hello, TypeScript!";
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = 42;
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Link",
        age: 21,
        powers: ["Courage"],
        greet: function () {
            return "Hello, this is ".concat(this.name, "!");
        },
    };
    console.log(myCustomVariable);
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable.greet);
    console.log(myCustomVariable.greet());
})();
(function () {
    var anyVariable = "Hello, TypeScript!";
    console.log({ anyVariable: anyVariable });
    console.log(typeof anyVariable);
    anyVariable = 42;
    console.log({ anyVariable: anyVariable });
    console.log(typeof anyVariable);
    anyVariable = true;
    console.log({ anyVariable: anyVariable });
    console.log(typeof anyVariable);
    anyVariable = null;
    console.log({ anyVariable: anyVariable });
    console.log(typeof anyVariable);
    anyVariable = "Some awesome text!";
    console.log(anyVariable.charAt(0));
    anyVariable = 123.456;
    console.log(anyVariable.toFixed(2));
    anyVariable = "Some awesome text!";
    console.log(anyVariable.charAt(0));
    anyVariable = 123.456;
    console.log(anyVariable.toFixed(2));
    anyVariable = "Some awesome text!";
    console.log(anyVariable.charAt(0));
    anyVariable = 123.456;
    console.log(anyVariable.toFixed(2));
})();
(function () {
    function clearArray(array) {
        var i = array.length;
        while (i >= 0) {
            array.pop();
            i--;
        }
        return;
    }
    var myArray1 = [1, 2, 3, 4, 5];
    console.log({ myArray1: myArray1 });
    console.log(typeof myArray1);
    var myArray2 = ["a", "b", "c"];
    console.log({ myArray2: myArray2 });
    console.log(typeof myArray2);
    var myArray3 = ["1", 2, "3", 4, "5"];
    console.log({ myArray3: myArray3 });
    console.log(typeof myArray3);
    var myArray4 = [1, 2, 3, 4, 5];
    console.log({ myArray4: myArray4 });
    console.log(typeof myArray4);
    myArray4 = [6, 7, 8, 9, 10];
    console.log({ myArray4: myArray4 });
    console.log(typeof myArray4);
    var myArray5 = ["a", "b", "c"];
    console.log({ myArray5: myArray5 });
    console.log(typeof myArray5);
    myArray5 = ["d", "e", "f"];
    console.log({ myArray5: myArray5 });
    console.log(typeof myArray5);
    var myArray6 = [1, 2, 3, 4, 5];
    console.log({ myArray6: myArray6 });
    console.log(typeof myArray6);
    myArray6 = ["a", "b", "c"];
    console.log({ myArray6: myArray6 });
    console.log(typeof myArray6);
    var myArray7 = [1, 2, 3, 4, 5];
    console.log({ myArray7: myArray7 });
    console.log(typeof myArray7);
    myArray7 = ["a", "b", "c"];
    console.log({ myArray7: myArray7 });
    console.log(typeof myArray7);
    myArray7 = [1, 2, 3, "a", "b", "c"];
    console.log({ myArray7: myArray7 });
    console.log(typeof myArray7);
    var myArray8 = [1, 2, 3, 4, 5];
    console.log({ myArray8: myArray8 });
    console.log(typeof myArray8);
    var myArray9 = ["a", "b", "c"];
    console.log({ myArray9: myArray9 });
    console.log(typeof myArray9);
    var myArray10 = ["1", 2, "3", 4, "5"];
    console.log({ myArray10: myArray10 });
    console.log(typeof myArray10);
    var myArray11 = [1, 2, 3, 4, 5];
    console.log({ myArray11: myArray11 });
    console.log(typeof myArray11);
    clearArray(myArray11);
    myArray11.push(6, 7, 8, 9, 10);
    console.log({ myArray11: myArray11 });
    console.log(typeof myArray11);
    var myArray12 = ["a", "b", "c"];
    console.log({ myArray12: myArray12 });
    console.log(typeof myArray12);
    clearArray(myArray12);
    myArray12.push("d", "e", "f");
    console.log({ myArray12: myArray12 });
    console.log(typeof myArray12);
    var myArray13 = [1, 2, 3, 4, 5];
    console.log({ myArray13: myArray13 });
    console.log(typeof myArray13);
    var myArray14 = [1, 2, 3, 4, 5];
    console.log({ myArray14: myArray14 });
    console.log(typeof myArray14);
    clearArray(myArray14);
    myArray14.push("a", "b", "c");
    console.log({ myArray14: myArray14 });
    console.log(typeof myArray14);
    clearArray(myArray14);
    myArray14.push(1, 2, 3, "a", "b", "c");
    console.log({ myArray14: myArray14 });
    console.log(typeof myArray14);
    var stringArray = ["a", "b", "c"];
    stringArray.forEach(function (name) {
        console.log(name.toLocaleUpperCase());
    });
    var numberArray = [1, 2, 3, 4, 5];
    numberArray.forEach(function (name) {
        console.log(name.toFixed(1));
    });
})();
(function () {
    var maybeBoolean;
    console.log(maybeBoolean);
    console.log(typeof maybeBoolean);
    console.log({ maybeBoolean: maybeBoolean });
    maybeBoolean = true;
    console.log(maybeBoolean);
    console.log(typeof maybeBoolean);
    console.log({ maybeBoolean: maybeBoolean });
    var definitelyBoolean;
    definitelyBoolean = true;
    console.log(definitelyBoolean);
    console.log(typeof definitelyBoolean);
    console.log({ definitelyBoolean: definitelyBoolean });
    definitelyBoolean = false;
    console.log(definitelyBoolean);
    console.log(typeof definitelyBoolean);
    console.log({ definitelyBoolean: definitelyBoolean });
    var isHero = true;
    var link;
    link = isHero ? "Hero of Time" : "Young Villager";
    console.log({ isHero: isHero });
    console.log({ link: link });
    console.log(typeof { isHero: isHero });
    console.log(typeof { link: link });
    console.log(typeof isHero);
    console.log(typeof link);
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["minimum"] = 0] = "minimum";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["maximum"] = 2] = "maximum";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel);
    console.log({ AudioLevel: AudioLevel });
    console.log(typeof AudioLevel);
    var currentAudioLevel = AudioLevel.medium;
    console.log({ currentAudioLevel: currentAudioLevel });
    console.log(typeof currentAudioLevel);
    var typedCurrentAudioLevel = AudioLevel.minimum;
    typedCurrentAudioLevel = AudioLevel.medium;
    typedCurrentAudioLevel = AudioLevel.maximum;
    typedCurrentAudioLevel = 0;
    typedCurrentAudioLevel = 1;
    typedCurrentAudioLevel = 2;
    var AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["minimum"] = 0] = "minimum";
        AudioLevel2[AudioLevel2["medium"] = 50] = "medium";
        AudioLevel2[AudioLevel2["maximum"] = 100] = "maximum";
    })(AudioLevel2 || (AudioLevel2 = {}));
    console.log(AudioLevel2);
    console.log({ AudioLevel2: AudioLevel2 });
    console.log(typeof AudioLevel2);
    var currentAudioLevel2 = AudioLevel2.medium;
    console.log({ currentAudioLevel2: currentAudioLevel2 });
    console.log(typeof currentAudioLevel2);
    var typedCurrentAudioLevel2 = AudioLevel2.minimum;
    typedCurrentAudioLevel2 = AudioLevel2.medium;
    typedCurrentAudioLevel2 = AudioLevel2.maximum;
    typedCurrentAudioLevel2 = 0;
    typedCurrentAudioLevel2 = 50;
    typedCurrentAudioLevel2 = 100;
    var AudioLevel3;
    (function (AudioLevel3) {
        AudioLevel3[AudioLevel3["minimum"] = 0] = "minimum";
        AudioLevel3[AudioLevel3["medium"] = 1] = "medium";
        AudioLevel3[AudioLevel3["maximum"] = 100] = "maximum";
    })(AudioLevel3 || (AudioLevel3 = {}));
    console.log(AudioLevel3);
    console.log({ AudioLevel3: AudioLevel3 });
    console.log(typeof AudioLevel3);
    var currentAudioLevel3 = AudioLevel3.medium;
    console.log({ currentAudioLevel3: currentAudioLevel3 });
    console.log(typeof currentAudioLevel3);
    var typedCurrentAudioLevel3 = AudioLevel3.minimum;
    typedCurrentAudioLevel3 = AudioLevel3.medium;
    typedCurrentAudioLevel3 = AudioLevel3.maximum;
    typedCurrentAudioLevel3 = 0;
    typedCurrentAudioLevel3 = 1;
    typedCurrentAudioLevel3 = 100;
})();
(function () {
    var myFunction2 = function (message) {
        throw new Error(message);
    };
    try {
        myFunction2("Something went wrong!");
    }
    catch (error) {
        console.log(error);
    }
    var myFunction6 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return;
    };
    console.log(myFunction6("Something went wrong!"));
    console.log(typeof myFunction6("Something went wrong!"));
    var myFunction7 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return;
    };
    console.log(myFunction7("Something went wrong!"));
    console.log(typeof myFunction7("Something went wrong!"));
    var myFunction8 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    console.log(myFunction8("Something went wrong!"));
    console.log(typeof myFunction8("Something went wrong!"));
})();
(function () {
    var a = null;
    console.log({ a: a });
    console.log(typeof a);
    a = undefined;
    console.log({ a: a });
    console.log(typeof a);
    var b = null;
    console.log({ b: b });
    console.log(typeof b);
    console.log(undefined == null);
    console.log(undefined === null);
    console.log(undefined != null);
    console.log(undefined !== null);
})();
(function () {
    var myNumber = 42;
    console.log({ myNumber: myNumber });
    console.log(typeof myNumber);
    var myTypedNumber = 42;
    console.log({ myTypedNumber: myTypedNumber });
    console.log(typeof myNumber);
    var someUndefinedValue;
    console.log({ someUndefinedValue: someUndefinedValue });
    console.log(typeof someUndefinedValue);
    var userNumber = 42;
    console.log({ userNumber: userNumber });
    console.log(typeof userNumber);
    var absoluteNumber = 26;
    console.log({ absoluteNumber: absoluteNumber });
    console.log(typeof absoluteNumber);
    if (absoluteNumber < userNumber) {
        console.log("".concat(absoluteNumber, " is less than ").concat(userNumber));
    }
    else {
        console.log("".concat(absoluteNumber, " is greater than ").concat(userNumber));
    }
    var objectNumber = Number("42");
    console.log({ objectNumber: objectNumber });
    console.log(typeof objectNumber);
    var nanNumber = Number("42abc");
    console.log({ nanNumber: nanNumber });
    console.log(typeof nanNumber);
})();
(function () {
    var _a, _b;
    var myString = "Hello, TypeScript!";
    console.log({ myString: myString });
    console.log(typeof myString);
    var myString2 = "Hello, Node.js!";
    console.log({ myString2: myString2 });
    console.log(typeof myString2);
    var myString3 = "He's often called @jdomingu19";
    console.log({ myString3: myString3 });
    console.log(typeof myString3);
    var myString4 = 'He"s often called @jdomingu19';
    console.log({ myString4: myString4 });
    console.log(typeof myString4);
    var myString5 = 'He\'s often called "@jdomingu19"';
    console.log({ myString5: myString5 });
    console.log(typeof myString5);
    var myString6 = "He's often called \"@jdomingu19\"";
    console.log({ myString6: myString6 });
    console.log(typeof myString6);
    var myString7 = "abc";
    console.log({ myString7: myString7 });
    console.log(typeof myString7);
    console.log(myString7.toUpperCase());
    console.log(typeof myString7.toUpperCase());
    var myAlias = "@jdomingu19";
    console.log("He's often called \"".concat(myAlias, "\""));
    console.log({ myAlias: myAlias });
    console.log(typeof myAlias);
    var myNumber = 42;
    console.log({ myNumber: myNumber });
    console.log(typeof myNumber);
    var x = myNumber.toString();
    console.log({ x: x });
    console.log(typeof x);
    console.log("".concat(myNumber, " and ").concat(myNumber.toString(), " in templated string are the same"));
    var myName = "Jesús";
    console.log({ myName: myName });
    console.log(typeof myName);
    console.log(myName.length);
    console.log(typeof myName.length);
    console.log(myName.toLocaleUpperCase());
    console.log(myName[0].toLocaleUpperCase());
    console.log(myName[1].toLocaleUpperCase());
    console.log(myName[2].toLocaleUpperCase());
    console.log(myName[3].toLocaleUpperCase());
    console.log(myName[4].toLocaleUpperCase());
    console.log(myName[5]);
    console.log((_a = myName[5]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
    var defaultMessage = "String '".concat(myName, "' is indexed from 0 to ").concat(myName.length - 1);
    console.log(((_b = myName[5]) === null || _b === void 0 ? void 0 : _b.toLocaleUpperCase()) || defaultMessage);
})();
(function () {
    var tupleArray1 = ["Link", 21];
    console.log({ tupleArray1: tupleArray1 });
    console.log(typeof tupleArray1);
    tupleArray1[0] = "Hero of Time";
    tupleArray1[1] = 22;
    console.log({ tupleArray1: tupleArray1 });
    console.log(typeof tupleArray1);
    var tupleArray2 = ["Link", 21, false];
    console.log({ tupleArray2: tupleArray2 });
    console.log(typeof tupleArray2);
    tupleArray2[0] = "Hero of Time";
    tupleArray2[1] = 22;
    tupleArray2[2] = true;
    console.log({ tupleArray2: tupleArray2 });
    console.log(typeof tupleArray2);
})();
(function () {
    var a = undefined;
    console.log({ a: a });
    console.log(typeof a);
    a = null;
    console.log({ a: a });
    console.log(typeof a);
    var b = undefined;
    console.log({ b: b });
    console.log(typeof b);
    console.log(undefined == null);
    console.log(undefined === null);
    console.log(undefined != null);
    console.log(undefined !== null);
})();
(function () {
    function myFunction1() { }
    console.log({ myFunction1: myFunction1 });
    console.log(typeof myFunction1);
    var a = myFunction1();
    console.log({ a: a });
    console.log(typeof a);
    var myFunction2 = function () { };
    console.log({ myFunction2: myFunction2 });
    console.log(typeof myFunction2);
    var b = myFunction2();
    console.log({ b: b });
    console.log(typeof b);
    function myFunction3() { }
    console.log({ myFunction3: myFunction3 });
    console.log(typeof myFunction3);
    var c = myFunction3();
    console.log({ c: c });
    console.log(typeof c);
    var myFunction4 = function () { };
    console.log({ myFunction4: myFunction4 });
    console.log(typeof myFunction4);
    var d = myFunction4();
    console.log({ d: d });
    console.log(typeof d);
    function myFunction5() {
        return;
    }
    console.log({ myFunction5: myFunction5 });
    console.log(typeof myFunction5);
    var e = myFunction5();
    console.log({ e: e });
    console.log(typeof e);
    var myFunction6 = function () {
        return;
    };
    console.log({ myFunction6: myFunction6 });
    console.log(typeof myFunction6);
    var f = myFunction6();
    console.log({ f: f });
    console.log(typeof f);
    function myFunction7() {
        return;
    }
    console.log({ myFunction7: myFunction7 });
    console.log(typeof myFunction7);
    var g = myFunction7();
    console.log({ g: g });
    console.log(typeof g);
    var myFunction8 = function () {
        return;
    };
    console.log({ myFunction8: myFunction8 });
    console.log(typeof myFunction8);
    var h = myFunction8();
    console.log({ h: h });
    console.log(typeof h);
    function myFunction9() {
        return undefined;
    }
    console.log({ myFunction9: myFunction9 });
    console.log(typeof myFunction9);
    var i = myFunction7();
    console.log({ i: i });
    console.log(typeof i);
    var myFunction10 = function () {
        return undefined;
    };
    console.log({ myFunction10: myFunction10 });
    console.log(typeof myFunction10);
    var j = myFunction10();
    console.log({ j: j });
    console.log(typeof j);
    console.log(undefined == null);
    console.log(undefined === null);
    console.log(undefined != null);
    console.log(undefined !== null);
})();
//# sourceMappingURL=main.js.map