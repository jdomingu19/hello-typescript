// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 012 Typing Never

(() => {
  // 1. Function that always throws an error (never returns)
  function throwError(message: string): never {
    throw new Error(message);
  }

  // 2. Function with infinite loop (never terminates)
  function infiniteLoop(): never {
    while (true) {
      console.log("Running forever...");
    }
  }

  // 3. Using never in exhaustive type checks
  type Shape = "circle" | "square";

  function getArea(shape: Shape): number {
    switch (shape) {
      case "circle":
        return Math.PI * 5 * 5;
      case "square":
        return 5 * 5;
      default:
        // If a new case is added to Shape but not handled,
        // TypeScript will enforce never here
        const exhaustiveCheck: never = shape;
        return exhaustiveCheck;
    }
  }

  // 4. Call functions to demonstrate behavior

  // console.log(throwError("Something went wrong...")); // Error: Something went wrong...
  // infiniteLoop(); // Running forever..

  console.log(getArea("circle").toFixed(2)); // 78.54
  console.log(getArea("square").toFixed(2)); // 25.00

  // Error Argument of type '"rectangle"' is not assignable to parameter of type 'Shape'.
  // console.log(getArea("rectangle")); // rectangle
})();
