"use strict";
// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/routes/diaries.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Import Express, diary services, and utility for validating new entries
// const express = require("express"); // CommonJS
const express_1 = __importDefault(require("express")); // ESModules
const diaryServices = __importStar(require("../services/diaryServices"));
const utils_1 = __importDefault(require("../utils"));
// 2. Initialize a new Express router instance
const router = express_1.default.Router();
// 3. Define GET route to fetch all diary entries without sensitive information
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
// 4. Define GET route to fetch a single diary entry by ID
router.get('/:id', (req, res) => {
    // const diary = diaryServices.findById(Number(req.params.id))
    const diary = diaryServices.findById(+req.params.id); // +"123" = 123
    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404);
});
// 5. Define POST route to add a new diary entry with validation and error handling
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (error) {
        // `error` is unknown, so narrow it first
        if (error instanceof Error) {
            res.status(400).send(error.message);
        }
        else {
            // fallback to a generic string if error type is not recognized
            res.status(400).send(error);
        }
    }
});
// 6. Export router to be used in the main application
exports.default = router;
