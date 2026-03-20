"use strict";
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
//# sourceMappingURL=null.js.map