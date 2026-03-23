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