// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 045 Error Handling with Const String Enums

// 1. Define const enum for error types (recommended for internal consumption)
const enum ERROR_TYPES {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
}

// 2. Function checking error type against const string enum values
function showErrorMessage(errorType: ERROR_TYPES): void {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log("(404) Resource not found");
  } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log("(401) Authentication required or invalid credentials.");
  } else if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log("(403) You do not have permission to access this resource.");
  }
}

// 3. Valid calls with const string enum values
showErrorMessage(ERROR_TYPES.NOT_FOUND); // (404) Resource not found
showErrorMessage(ERROR_TYPES.UNAUTHORIZED); // (401) Authentication required or invalid credentials.
showErrorMessage(ERROR_TYPES.FORBIDDEN); // (403) You do not have permission to access this resource.

// 4. Invalid call with unrecognized string
// Error: Argument of type '"abc"' is not assignable to parameter of type 'ERROR_TYPES'.
// showErrorMessage("abc"); // undefined

// 5. Invalid call with wrong type (number instead of enum)
// Error: Argument of type '123' is not assignable to parameter of type 'ERROR_TYPES'.
// showErrorMessage(123);
