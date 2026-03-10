"use strict";
// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Import Express framework and diary router module
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
// 2. Initialize Express application instance
const app = (0, express_1.default)();
// 3. Register JSON middleware to automatically parse request bodies
app.use(express_1.default.json()); /// middleware that transforms req.body into JSON
// 4. Define server port constant
const PORT = 3001;
// 5. Define health check route to verify server availability
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here! ' + new Date().toLocaleDateString());
    res.send('Pong!');
});
// 6. Mount diary router under /api/diaries path
app.use('/api/diaries', diaries_1.default);
// 7. Start server and listen on defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
