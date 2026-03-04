// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 000 ?

// . ?
const API_URL = "https://api.github.com/search/repositories?q=typescript";

// . ?
const response = await fetch(API_URL);

// . ?
if (!response.ok) {
  throw new Error("Request failed");
}

// . ?
const data = await response.json();

// . ?
// ERROR: Parameter 'repository' implicitly has an 'any' type.
// const repositories = data.items.map((repository) => {
//   console.log(repository);
// });

// . ?
const repositories = data.items.map((repository: object) => {
  console.log(repository);
});
