// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 051 Top-level await in modules

(() => {
  // 1. Define API endpoint
  const API_URL = "https://api.github.com/search/repositories?q=typescript";

  // 2. Using top-level await requires the file to be a module
  // ERROR: 'await' expressions are only allowed at the top level of a file
  // when that file is a module, but this file has no imports or exports.
  // Consider adding an empty 'export {}' to make this file a module.
  // const response = await fetch(API_URL);
})();
