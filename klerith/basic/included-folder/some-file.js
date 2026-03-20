"use strict";
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
//# sourceMappingURL=some-file.js.map