"use strict";
// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/utils.ts
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
// 2. Parse and validate comment field from request body
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing Comment');
    }
    return commentFromRequest;
};
// 3. Parse and validate date field from request body
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing Date');
    }
    return dateFromRequest;
};
// 4. Parse and validate weather field from request body
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
// 5. Parse and validate visibility field from request body
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromRequest;
};
// 6. Type guard: check if value is a string
const isString = (string) => {
    // return typeof string === 'string' || string instanceof String
    return typeof string === 'string';
};
// 7. Type guard: check if value is a valid date string
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
// 8. Type guard: check if value matches WeatherEnum enum
const isWeather = (weather) => {
    // return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(weather)
    return Object.values(enums_1.WeatherEnum).includes(weather);
};
// 9. Type guard: check if value matches VisibilityEnum enum
const isVisibility = (visibility) => {
    // return ['great', 'good', 'ok', 'poor'].includes(visibility)
    return Object.values(enums_1.VisibilityEnum).includes(visibility);
};
// 10. Transform raw request object into validated NewDiaryEntryType
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
// 11. Export utility function for creating validated diary entries
exports.default = toNewDiaryEntry;
