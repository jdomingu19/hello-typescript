"use strict";
// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityEnum = exports.WeatherEnum = void 0;
// . ?
// export type WeatherEnum = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// . ?
// export type VisibilityEnum = 'great' | 'good' | 'ok' | 'poor'
// . ?
// Cambiar extensión .d.ts a .ts al usar enum
let WeatherEnum;
(function (WeatherEnum) {
  WeatherEnum.Sunny = "sunny";
  WeatherEnum.Rainy = "rainy";
  WeatherEnum.Cloudy = "cloudy";
  WeatherEnum.Windy = "windy";
  WeatherEnum.Stormy = "stormy";
})(WeatherEnum || (exports.WeatherEnum = WeatherEnum = {}));
// . ?
let VisibilityEnum;
(function (VisibilityEnum) {
  VisibilityEnum.Great = "great";
  VisibilityEnum.Good = "good";
  VisibilityEnum.Ok = "ok";
  VisibilityEnum.Poor = "poor";
})(VisibilityEnum || (exports.VisibilityEnum = VisibilityEnum = {}));
