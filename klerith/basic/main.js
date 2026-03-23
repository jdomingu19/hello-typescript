"use strict";
(() => {
    const useVehicle = (vehicle) => {
        vehicle.isEngineOn = true;
        vehicle.maxSpeed = 100;
        vehicle.accelerate();
    };
    const vehicle1 = {
        model: "720S",
        brand: "McLaren",
        isEngineOn: false,
        maxSpeed: 0,
        accelerate() {
            console.log(`${this.brand} ${this.model} is accelerating!`);
        },
    };
    useVehicle(vehicle1);
    console.log(useVehicle);
    console.log(typeof useVehicle);
    console.log(vehicle1);
    console.log(typeof vehicle1);
    const link = {
        trainsRegularly: true,
        eatWell: true,
        sleepsEnough: true,
    };
    const trainsRegularly = (link) => {
        if (link.trainsRegularly) {
            return "Link trains regularly!";
        }
    };
    console.log(link);
    console.log(typeof link);
    console.log(trainsRegularly);
    console.log(typeof trainsRegularly);
    console.log(trainsRegularly(link));
    console.log(typeof trainsRegularly(link));
    const getHyruleCitizensNumber = (citizens) => {
        return citizens.length;
    };
    console.log(getHyruleCitizensNumber);
    console.log(typeof getHyruleCitizensNumber);
    console.log(getHyruleCitizensNumber(["Link", "Zelda"]));
    console.log(typeof getHyruleCitizensNumber(["Link", "Zelda"]));
    class Person {
        constructor(name, age, gender, maritalStatus) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.maritalStatus = maritalStatus;
        }
        printBiography() {
            console.log(`Name: ${this.name} | Age: ${this.age}` +
                ` | Gender: ${this.gender} | Marital Status: ${this.maritalStatus}`);
        }
    }
    console.log(Person);
    console.log(typeof Person);
    const person1 = new Person("Jesús", 21, "Male", "Single");
    console.log(person1);
    console.log(typeof person1);
    console.log(person1.printBiography);
    console.log(typeof person1.printBiography);
    person1.printBiography();
})();
//# sourceMappingURL=main.js.map