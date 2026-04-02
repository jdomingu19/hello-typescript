// Hello, TypeScript! @jdomingu19
// Playground 005: Generic Function

(() => {
  /**
   * A generic function that returns the same value it receives.
   *
   * @typeParam T - The type of the input and output value.
   * @param value - The value to be returned, of type `T`.
   * @returns The same value provided as input, preserving its type.
   */
  function identify<T>(value: T): T {
    return value;
  }

  // Using the generic function with a number and string
  const num = identify<number>(42); // number
  const str = identify<string>("Marowak"); // string

  // Logs the value and its type to the console
  console.log({ num }, typeof num); // { num: 42 } number
  console.log({ str }, typeof str); // { str: 'Marowak' } string
})();
