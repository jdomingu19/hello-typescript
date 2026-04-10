// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 040 Error Handling with String Comparison

(() => {
  // 1. Function checking error type with string values
  function showErrorMessage(errorType: string): void {
    if (errorType === "notFound") {
      console.log("(404) Resource not found");
    } else if (errorType === "unauthorized") {
      console.log("(401) Authentication required or invalid credentials.");
    } else if (errorType === "forbidden") {
      console.log("(403) You do not have permission to access this resource.");
    }
  }

  // 2. Valid calls with recognized error types
  showErrorMessage("notFound"); // (404) Resource not found
  showErrorMessage("unauthorized"); // (401) Authentication required or invalid credentials.
  showErrorMessage("forbidden"); // (403) You do not have permission to access this resource.

  // 3. Invalid call with unrecognized string
  // No matching condition, so nothing is logged
  showErrorMessage("abc"); // undefined

  // 4. Invalid call with wrong type (number instead of string)
  // Error: No overload matches this call.
  //  Overload 1 of 2, '(errorType: string): void', gave the following error.
  //    Argument of type 'number' is not assignable to parameter of type 'string'.
  //  Overload 2 of 2, '(errorType: string): void', gave the following error.
  //    Argument of type 'number' is not assignable to parameter of type 'string'.
  // showErrorMessage(123);
})();
