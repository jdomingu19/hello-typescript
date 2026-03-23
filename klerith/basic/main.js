"use strict";
(() => {
    const link1 = {
        name: "Link",
        isActive: true,
    };
    const link2 = {
        name: "Link",
        isActive: true,
        introduce() {
            return `The name's ${this.name}!`;
        },
    };
    console.log(link1);
    console.log(typeof link1);
    console.log(link2);
    console.log(typeof link2);
    console.log(link2.introduce);
    console.log(link2.introduce());
})();
//# sourceMappingURL=main.js.map