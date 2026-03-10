"use strict";
// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/enums.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityEnum = exports.WeatherEnum = void 0;
// 1. Define WeatherEnum enum (compiled to JavaScript at runtime)
// Note: change extension from .d.ts to .ts when using enums
// Unlike type or interface, enums generate runtime code
var WeatherEnum;
(function (WeatherEnum) {
    WeatherEnum["Sunny"] = "sunny";
    WeatherEnum["Rainy"] = "rainy";
    WeatherEnum["Cloudy"] = "cloudy";
    WeatherEnum["Windy"] = "windy";
    WeatherEnum["Stormy"] = "stormy";
})(WeatherEnum || (exports.WeatherEnum = WeatherEnum = {}));
// 2. Define VisibilityEnum enum (compiled to JavaScript at runtime)
var VisibilityEnum;
(function (VisibilityEnum) {
    VisibilityEnum["Great"] = "great";
    VisibilityEnum["Good"] = "good";
    VisibilityEnum["Ok"] = "ok";
    VisibilityEnum["Poor"] = "poor";
})(VisibilityEnum || (exports.VisibilityEnum = VisibilityEnum = {}));
