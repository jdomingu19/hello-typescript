"use strict";
(() => {
    const client1 = {
        name: "Jesús",
        age: 21,
        address: {
            id: 42,
            country: "Spain",
            city: "Barcelona",
        },
    };
    console.log(client1);
    console.log(typeof client1);
    console.log(client1.address);
    console.log(typeof client1.address);
    const client2 = {
        name: "Jesús",
        age: 21,
        address: {
            id: 42,
            country: "Spain",
            city: "Barcelona",
        },
    };
    console.log(client2);
    console.log(typeof client2);
    console.log(client2.address);
    console.log(typeof client2.address);
})();
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
(() => {
    class Link {
        constructor(name, title, hasPointedEars) {
            this.name = name;
            this.title = title;
            this.hasPointedEars = hasPointedEars;
        }
        introduce() {
            return `My name is ${this.name}!`;
        }
    }
    console.log(Link);
    console.log(typeof Link);
    const link1 = new Link("Link", "Hero of Time", true);
    console.log(link1);
    console.log(typeof link1);
    console.log(link1.introduce);
    console.log(typeof link1.introduce);
    console.log(link1.introduce());
    console.log(typeof link1.introduce());
})();
(() => {
    let addTwoNumbersFunction;
    addTwoNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addTwoNumbersFunction);
    console.log(typeof addTwoNumbersFunction);
    const result = addTwoNumbersFunction(5, 6);
    console.log(result);
    console.log(typeof result);
})();
(() => {
    const client1 = {
        name: "Jesús",
        age: 21,
        address: {
            id: 42,
            country: "Spain",
            city: "Barcelona",
        },
        getCityAddress() {
            return this.address.city;
        },
    };
    console.log(client1);
    console.log(typeof client1);
    console.log(client1.address);
    console.log(typeof client1.address);
    console.log(client1.getCityAddress);
    console.log(typeof client1.getCityAddress);
    console.log(client1.getCityAddress());
    console.log(typeof client1.getCityAddress());
})();
//# sourceMappingURL=main.js.map