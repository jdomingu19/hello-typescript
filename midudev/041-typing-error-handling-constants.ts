// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 041 Error Handling with Constants

(() => {
  // 1. Define constant object with error types
  const ERROR_TYPES = {
    NOT_FOUND: "notFound",
    UNAUTHORIZED: "unauthorized",
    FORBIDDEN: "forbidden",
  };

  // 2. Function checking error type against constants
  function showErrorMessage(errorType: string): void {
    if (errorType === ERROR_TYPES.NOT_FOUND) {
      console.log("(404) Resource not found");
    } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
      console.log("(401) Authentication required or invalid credentials.");
    } else if (errorType === ERROR_TYPES.FORBIDDEN) {
      console.log("(403) You do not have permission to access this resource.");
    }
  }

  // 3. Valid calls with recognized error types
  showErrorMessage("notFound"); // (404) Resource not found
  showErrorMessage("unauthorized"); // (401) Authentication required or invalid credentials.
  showErrorMessage("forbidden"); // (403) You do not have permission to access this resource.

  // 4. Invalid call with unrecognized string
  // No matching condition, so nothing is logged
  showErrorMessage("abc"); // undefined

  // 5. Invalid call with wrong type (number instead of string)
  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  // showErrorMessage(123);
})();
