// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// index.ts

// --- Class 103: REST API with Express and TypeScript ---

// Import the Express framework using ES Modules syntax
import express from "express";

// Create an Express application instance
const app = express();
const port = 3000;

// Define a GET route for the root path
app.get("/", (_, res) => {
  // Send a JSON response with status code 201 to confirm the API is working
  res.status(201).json({
    isWorking: true,
    message: "Express is working!",
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
