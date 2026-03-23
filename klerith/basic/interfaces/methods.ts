// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// interfaces/methods.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 70: Interface Methods ---

  /**
   * ClientInterface defines a client structure with a method.
   * @remarks
   * - Includes required `name` and `address`.
   * - `age` is optional.
   * - Declares a method `getCityAddress` that returns a string.
   */
  interface ClientInterface {
    name: string;
    age?: number;
    address: AddressInterface;
    getCityAddress(): string;
  }

  /**
   * AddressInterface defines a reusable address structure.
   * @remarks
   * - Contains `id`, `country`, and `city`.
   */
  interface AddressInterface {
    id: number;
    country: string;
    city: string;
  }

  // Object implementing ClientInterface with method
  const client1: ClientInterface = {
    name: "Jesús",
    age: 21,
    address: {
      id: 42,
      country: "Spain",
      city: "Barcelona",
    },
    getCityAddress(): string {
      return this.address.city;
    },
  };

  // --- Usage examples ---

  // Object reference
  console.log(client1); // { name: 'Jesús', age: 21, address: { ... }, getCityAddress: [Function: getCityAddress] }
  console.log(typeof client1); // object

  // Accessing nested address
  console.log(client1.address); // { id: 42, country: 'Spain', city: 'Barcelona' }
  console.log(typeof client1.address); // object

  // Accessing method reference
  console.log(client1.getCityAddress); // [Function: getCityAddress]
  console.log(typeof client1.getCityAddress); // function

  // Executing method
  console.log(client1.getCityAddress()); // Barcelona
  console.log(typeof client1.getCityAddress()); // string
})();
