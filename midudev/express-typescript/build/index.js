"use strict";
// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// . ?
const express_1 = __importDefault(require("express"));
// . ?
const app = (0, express_1.default)();
// . ?
app.use(express_1.default.json()); // middleware que transforma red.body a json
// . ?
const PORT = 3001;
// . ?
app.get("/ping", (_req, res) => {
    console.log("Someone pinged here!");
    res.send("Pong!");
});
// . ?
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
