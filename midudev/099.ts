// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 000 ?

// . ?
type RGB = readonly [number, number, number];

// . ?
const blackColor: RGB = [0, 0, 0];
const whiteColor: RGB = [255, 255, 255];

// . ?
// Error: Type '[]' is not assignable to type 'RGB'.
//   Source has 0 element(s) but target requires 3.
// const blackColor: RGB = [];
// const whiteColor: RGB = [];

// . ?
// Property 'push' does not exist on type 'RGB'.
// blackColor.push(0);
// whiteColor.push(255);

// . ?
function showErrorMessage(errorType: string): void {
  if (errorType === "notFound") {
    console.log("(404) Resource not found");
  } else if (errorType === "unauthorized") {
    console.log("(401) Authentication required or invalid credentials.");
  } else if (errorType === "forbidden") {
    console.log("(403) You do not have permission to access this resource.");
  }
}

// . ?
showErrorMessage("notFound"); // (404) Resource not found
showErrorMessage("unauthorized"); // (401) Authentication required or invalid credentials.
showErrorMessage("forbidden"); // (403) You do not have permission to access this resource.
showErrorMessage("abc"); // undefined

// . ?
const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
};

// . ?
function showErrorMessage2(errorType: string): void {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log("(404) Resource not found");
  } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log("(401) Authentication required or invalid credentials.");
  } else if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log("(403) You do not have permission to access this resource.");
  }
}

// . ?
showErrorMessage2("notFound"); // (404) Resource not found
showErrorMessage2("unauthorized"); // (401) Authentication required or invalid credentials.
showErrorMessage2("forbidden"); // (403) You do not have permission to access this resource.
showErrorMessage2("abc"); // undefined

// . ? (se recomienda solo enum para consumos fuera de la aplicación)
enum ERROR_TYPES2 {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}

// . ?
function showErrorMessage3(errorType: ERROR_TYPES2): void {
  if (errorType === ERROR_TYPES2.NOT_FOUND) {
    console.log("(404) Resource not found");
  } else if (errorType === ERROR_TYPES2.UNAUTHORIZED) {
    console.log("(401) Authentication required or invalid credentials.");
  } else if (errorType === ERROR_TYPES2.FORBIDDEN) {
    console.log("(403) You do not have permission to access this resource.");
  }
}

// . ?
showErrorMessage3(ERROR_TYPES2.NOT_FOUND); // (404) Resource not found
showErrorMessage3(ERROR_TYPES2.UNAUTHORIZED); // (401) Authentication required or invalid credentials.
showErrorMessage3(ERROR_TYPES2.FORBIDDEN); // (403) You do not have permission to access this resource.

// . ?
// Error: Argument of type '"abc"' is not assignable to parameter of type 'ERROR_TYPES2'.
// showErrorMessage3("abc"); // undefined

// . ? (se recomienda const enum para consumos dentro de la aplicación)
const enum ERROR_TYPES3 {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}

// . ?
function showErrorMessage4(errorType: ERROR_TYPES3): void {
  if (errorType === ERROR_TYPES3.NOT_FOUND) {
    console.log("(404) Resource not found");
  } else if (errorType === ERROR_TYPES3.UNAUTHORIZED) {
    console.log("(401) Authentication required or invalid credentials.");
  } else if (errorType === ERROR_TYPES3.FORBIDDEN) {
    console.log("(403) You do not have permission to access this resource.");
  }
}

// . ?
showErrorMessage4(ERROR_TYPES3.NOT_FOUND); // (404) Resource not found
showErrorMessage4(ERROR_TYPES3.UNAUTHORIZED); // (401) Authentication required or invalid credentials.
showErrorMessage4(ERROR_TYPES3.FORBIDDEN); // (403) You do not have permission to access this resource.

// . ?
// Error: Argument of type '"abc"' is not assignable to parameter of type 'ERROR_TYPES3'.
// showErrorMessage4("abc"); // undefined

// . ? (se recomienda solo enum para consumos fuera de la aplicación)
enum ERROR_TYPES4 {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
}

// . ?
function showErrorMessage5(errorType: ERROR_TYPES4): void {
  if (errorType === ERROR_TYPES4.NOT_FOUND) {
    console.log("(404) Resource not found");
  } else if (errorType === ERROR_TYPES4.UNAUTHORIZED) {
    console.log("(401) Authentication required or invalid credentials.");
  } else if (errorType === ERROR_TYPES4.FORBIDDEN) {
    console.log("(403) You do not have permission to access this resource.");
  }
}

// . ?
showErrorMessage5(ERROR_TYPES4.NOT_FOUND); // (404) Resource not found
showErrorMessage5(ERROR_TYPES4.UNAUTHORIZED); // (401) Authentication required or invalid credentials.
showErrorMessage5(ERROR_TYPES4.FORBIDDEN); // (403) You do not have permission to access this resource.

// . ?
// Error: Argument of type '"abc"' is not assignable to parameter of type 'ERROR_TYPES4'.
// showErrorMessage5("abc"); // undefined

// . ? (se recomienda const enum para consumos dentro de la aplicación)
const enum ERROR_TYPES5 {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
}

// . ?
function showErrorMessage6(errorType: ERROR_TYPES5): void {
  if (errorType === ERROR_TYPES5.NOT_FOUND) {
    console.log("(404) Resource not found");
  } else if (errorType === ERROR_TYPES5.UNAUTHORIZED) {
    console.log("(401) Authentication required or invalid credentials.");
  } else if (errorType === ERROR_TYPES5.FORBIDDEN) {
    console.log("(403) You do not have permission to access this resource.");
  }
}

// . ?
showErrorMessage6(ERROR_TYPES5.NOT_FOUND); // (404) Resource not found
showErrorMessage6(ERROR_TYPES5.UNAUTHORIZED); // (401) Authentication required or invalid credentials.
showErrorMessage6(ERROR_TYPES5.FORBIDDEN); // (403) You do not have permission to access this resource.

// . ?
// Error: Argument of type '"abc"' is not assignable to parameter of type 'ERROR_TYPES5'.
// showErrorMessage6("abc"); // undefined

// . ? HTMLElement | null
const myCanvas = document.getElementById("canvas");

// . ?
// Error: 'myCanvas' is possibly 'null'.
// const ctx1 = myCanvas.getContext("2d");

// . ?
// Error: Property 'getContext' does not exist on type 'HTMLElement'.
// const ctx2 = myCanvas?.getContext("2d");

// . ?
// Error: Property 'getContext' does not exist on type 'HTMLElement'.
// if (myCanvas != null) {
//   const ctx3 = myCanvas.getContext("2d");
// }

// . ? HTMLCanvasElement
const myCanvas2 = document.getElementById("canvas") as HTMLCanvasElement;

// . ?
const ctx4 = myCanvas2.getContext("2d");

// . ? HTMLElement | null
const myCanvas3 = document.getElementById("canvas");

// . ?
if (myCanvas3 != null) {
  const ctx5 = (myCanvas3 as HTMLCanvasElement).getContext("2d");
}

// . ? HTMLElement | null
const myCanvas4 = document.getElementById("button");

// . ? inferencia
if (myCanvas4 != null && myCanvas4 instanceof HTMLCanvasElement) {
  const ctx6 = myCanvas4.getContext("2d");
}

// . ? HTMLElement | null
const myCanvas5 = document.getElementById("button");

// . ? inferencia (mejor opción con TypeScript)
if (myCanvas5 instanceof HTMLCanvasElement) {
  const ctx6 = myCanvas5.getContext("2d");
}
