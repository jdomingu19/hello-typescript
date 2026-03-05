// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 052 Fetch API with Type Narrowing

// 1. Define API endpoint
const API_URL = "https://api.github.com/search/repositories?q=typescript";

// 2. Perform request with top-level await
const response = await fetch(API_URL);

// 3. Handle error response
if (!response.ok) {
  throw new Error("Request failed");
}

// 4. Parse JSON response
const data = await response.json();

// 5. Invalid mapping (implicit 'any')
// ERROR: Parameter 'repository' implicitly has an 'any' type.
// const repositories = data.items.map((repository) => {
//   console.log(repository);
// });

// 6. Explicit typing with object (basic solution)
const repositories = data.items.map((repository: object) => {
  console.log(repository);
});
