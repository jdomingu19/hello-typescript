"use strict";
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
//# sourceMappingURL=undefined.js.map