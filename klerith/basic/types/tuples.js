"use strict";
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
//# sourceMappingURL=tuples.js.map