"use strict";
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
//# sourceMappingURL=void.js.map