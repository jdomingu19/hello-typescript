// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// interfaces/advanced.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 69: Advanced TypeScript Interface ---

  /**
   * ClientInterface1 demonstrates inline nested object typing.
   * @remarks
   * - Includes required `name` and `address`.
   * - `age` is optional.
   * - `address` is defined directly inside the interface.
   */
  interface ClientInterface1 {
    name: string;
    age?: number;
    address: {
      id: number;
      country: string;
      city: string;
    };
  }

  // Object implementing ClientInterface1
  const client1: ClientInterface1 = {
    name: "Jesús",
    age: 21,
    address: {
      id: 42,
      country: "Spain",
      city: "Barcelona",
    },
  };

  // --- Usage examples ---
  console.log(client1); // { name: 'Jesús', age: 21, address: { id: 42, country: 'Spain', city: 'Barcelona' } }
  console.log(typeof client1); // object

  console.log(client1.address); // { id: 42, country: 'Spain', city: 'Barcelona' }
  console.log(typeof client1.address); // object

  /**
   * ClientInterface2 demonstrates interface composition.
   * @remarks
   * - Uses a separate AddressInterface for reusability.
   * - `age` remains optional.
   */
  interface ClientInterface2 {
    name: string;
    age?: number;
    address: AddressInterface;
  }

  /**
   * AddressInterface defines a reusable address structure.
   * @remarks
   * - Can be shared across multiple interfaces or classes.
   */
  interface AddressInterface {
    id: number;
    country: string;
    city: string;
  }

  // Object implementing ClientInterface2 with AddressInterface
  const client2: ClientInterface2 = {
    name: "Jesús",
    age: 21,
    address: {
      id: 42,
      country: "Spain",
      city: "Barcelona",
    },
  };

  // --- Usage examples ---
  console.log(client2); // { name: 'Jesús', age: 21, address: { id: 42, country: 'Spain', city: 'Barcelona' } }
  console.log(typeof client2); // object

  console.log(client2.address); // { id: 42, country: 'Spain', city: 'Barcelona' }
  console.log(typeof client2.address); // object
})();
