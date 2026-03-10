"use strict";
// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/services/diaryServices.ts
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// import diaryData from "./diaries"; // diaries.ts
/*
File extension resolution priority:
1. ".tsx",
2. ".ts",
3. ".node",
4. ".js",
5. ".json"

Notes on file extensions:
- In ECMAScript modules, extensions are mandatory in imports
- In TypeScript, extensions are optional in imports
*/
// 2. Initialize diaries array with type assertion
// const diaries: Array<DiaryEntryInterface> = diaryData;
const diaries = diaries_json_1.default;
// 3. Return all diary entries with full information
const getEntries = () => diaries;
exports.getEntries = getEntries;
// 4. Find a diary entry by ID and exclude sensitive comment field
const findById = (id) => {
    const entry = diaries.find(diary => diary.id === id);
    if (entry != null) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]);
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
// 5. Return all diary entries without sensitive information (no comments)
const getEntriesWithoutSensitiveInfo = () => {
    // Client-side validation ensures comments are not exposed at runtime
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
// 6. Add a new diary entry with auto-incremented ID
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ 
        // id: diaries.length + 1
        id: Math.max(...diaries.map(diary => diary.id)) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
// 7. Example: get entries without sensitive info
// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
// 8. Example error: Property 'comment' does not exist on type 'NoSensitiveInfoDiaryEntryType'
// Error: Property 'comment' does not exist on type 'NoSensitiveInfoDiaryEntryType'.
// diariesWithoutSensitiveInfo[0].comment
