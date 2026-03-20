"use strict";
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
//# sourceMappingURL=enums.js.map