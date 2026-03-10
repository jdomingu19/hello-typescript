// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/enums.ts

// 1. Define WeatherEnum enum (compiled to JavaScript at runtime)
// Note: change extension from .d.ts to .ts when using enums
// Unlike type or interface, enums generate runtime code
export enum WeatherEnum {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

// 2. Define VisibilityEnum enum (compiled to JavaScript at runtime)
export enum VisibilityEnum {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}
