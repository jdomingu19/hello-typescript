// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// exercise-4/app.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 74: Exercise 4 ---

  // 1. Define an Interface

  /**
   * VehicleInterface defines the structure for vehicles.
   * @remarks
   * - Includes model and brand identifiers.
   * - Tracks engine state and maximum speed.
   * - Declares an accelerate method.
   */
  interface VehicleInterface {
    model: string;
    brand: string;
    isEngineOn: boolean;
    maxSpeed: number;
    accelerate: () => void;
  }

  /**
   * Function that uses a vehicle.
   * @param vehicle - VehicleInterface instance.
   * @remarks
   * - Turns the engine on.
   * - Sets a default maxSpeed.
   * - Calls the accelerate method.
   */
  const useVehicle = (vehicle: VehicleInterface): void => {
    vehicle.isEngineOn = true;
    vehicle.maxSpeed = 100;
    vehicle.accelerate();
  };

  // Object implementing VehicleInterface
  const vehicle1: VehicleInterface = {
    model: "720S",
    brand: "McLaren",
    isEngineOn: false,
    maxSpeed: 0,
    accelerate() {
      console.log(`${this.brand} ${this.model} is accelerating!`);
    },
  };

  // --- Usage example ---

  useVehicle(vehicle1); // McLaren 720S is accelerating!

  console.log(useVehicle); // [Function: useVehicle]
  console.log(typeof useVehicle); // function

  console.log(vehicle1); // { model: '720S', brand: 'McLaren', isEngineOn: true, maxSpeed: 100, accelerate: [Function: accelerate]}
  console.log(typeof vehicle1); // object

  // 2. Define an Interface with Optional Properties

  /**
   * LinkInterface defines Link's weekly habits.
   * @remarks
   * - Properties represent whether habits are part of his routine.
   * - `dances` is optional.
   */
  interface LinkInterface {
    trainsRegularly: boolean;
    eatWell: boolean;
    sleepsEnough: boolean;
    dances?: boolean;
  }

  const link: LinkInterface = {
    trainsRegularly: true,
    eatWell: true,
    sleepsEnough: true,
  };

  /**
   * Function checking Link's training habit.
   * @param link - LinkInterface instance.
   * @returns A string if Link trains regularly.
   */
  const trainsRegularly = (link: LinkInterface): string => {
    if (link.trainsRegularly) {
      return "Link trains regularly!";
    }
  };

  // --- Usage example ---

  console.log(link); // { trainsRegularly: true, eatWell: true, sleepsEnough: true }
  console.log(typeof link); // object

  console.log(trainsRegularly); // [Function: trainsRegularly]
  console.log(typeof trainsRegularly); // function

  console.log(trainsRegularly(link)); // Link trains regularly!
  console.log(typeof trainsRegularly(link)); // string

  // 3. Define an Interface with a Function Signature

  /**
   * HyruleCitizensInterface defines a callable type.
   * @remarks
   * - Accepts an array of citizen names.
   * - Returns the number of citizens.
   */
  interface HyruleCitizensInterfaces {
    (citizens: string[]): number;
  }

  const getHyruleCitizensNumber: HyruleCitizensInterfaces = (
    citizens: string[],
  ): number => {
    return citizens.length;
  };

  // --- Usage example ---

  console.log(getHyruleCitizensNumber); // [Function: getHyruleCitizensNumber]
  console.log(typeof getHyruleCitizensNumber); // function

  console.log(getHyruleCitizensNumber(["Link", "Zelda"])); // 2
  console.log(typeof getHyruleCitizensNumber(["Link", "Zelda"])); // number

  // 4. Implement an Interface in a Class
  type GenderType = "Male" | "Female";
  type MaritalStatusType = "Married" | "In a Relationship" | "Single";

  /**
   * PersonInterface defines the structure for a person.
   * @remarks
   * - Includes name, age, gender, and marital status.
   * - Declares a method to print biography.
   */
  interface PersonInterface {
    name: string;
    age: number;
    gender: GenderType;
    maritalStatus: MaritalStatusType;
    printBiography: () => void;
  }

  /**
   * Person class implementing PersonInterface.
   * @remarks
   * - Demonstrates how a class can implement an interface.
   * - Provides constructor shorthand for property initialization.
   */
  class Person implements PersonInterface {
    constructor(
      public name: string,
      public age: number,
      public gender: GenderType,
      public maritalStatus: MaritalStatusType,
    ) {}

    /**
     * Prints the biography of the person.
     */
    printBiography() {
      console.log(
        `Name: ${this.name} | Age: ${this.age}` +
          ` | Gender: ${this.gender} | Marital Status: ${this.maritalStatus}`,
      );
    }
  }

  // --- Usage example ---

  console.log(Person); // [class Person] {}
  console.log(typeof Person); // function

  const person1 = new Person("Jesús", 21, "Male", "Single");

  console.log(person1); // Person { name: 'Jesús', age: 21, gender: 'Male', maritalStatus: 'Single' }
  console.log(typeof person1); // object

  console.log(person1.printBiography); // [Function: printBiography]
  console.log(typeof person1.printBiography); // function

  person1.printBiography();
  // Name: Jesús | Age: 21 | Gender: Male | Marital Status: Single
})();
