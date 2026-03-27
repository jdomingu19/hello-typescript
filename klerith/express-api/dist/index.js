"use strict";
// Hello, TypeScript! @jdomingu19
// Udemy Course by @Klerith (2021)
// index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// --- Class 103: REST API with Express and TypeScript ---
// Import the Express framework using ES Modules syntax
var express_1 = __importDefault(require("express"));
// Create an Express application instance
var app = (0, express_1.default)();
var port = 3000;
// Define a GET route for the root path
app.get("/", function (_, res) {
    // Send a JSON response with status code 201 to confirm the API is working
    res.status(201).json({
        isWorking: true,
        message: "Express is working!",
    });
});
// Start the server and listen on the specified port
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
