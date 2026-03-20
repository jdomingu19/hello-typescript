"use strict";
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
//# sourceMappingURL=app.js.map