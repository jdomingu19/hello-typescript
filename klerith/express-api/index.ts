// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// index.ts

// --- Class 102: REST API with Express ---

// Import the Express framework and initialize the app
const express = require("express");
const app = express();
const port = 3000;

// Define a GET route for the root path
app.get("/", (req, res) => {
  // Send a JSON response to confirm the API is working
  res.json({
    isWorking: true,
    message: "Express is working!",
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
