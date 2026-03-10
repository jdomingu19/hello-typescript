// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/types.d.ts

// 1. Import enums for Weather and Visibility types
import { VisibilityEnum, WeatherEnum } from './enums'

// 2. Alternative definition using string literal union (commented out)
// export type WeatherType = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

// 3. Alternative definition using string literal union (commented out)
// export type VisibilityType = 'great' | 'good' | 'ok' | 'poor'

// 4. Define DiaryEntry interface with all fields including sensitive comment
export interface DiaryEntryInterface {
  id: number
  date: string
  weather: WeatherEnum
  visibility: VisibilityEnum
  comment: string
}

// 5. Example: extending DiaryEntryInterface with additional property (commented out)
// interface SpecialDiaryEntryInterface extends DiaryEntryInterface {
//   flightNumber: number;
// }

// 6. Example: creating a composite type with intersection (commented out)
// type SpecialDiaryEntryType = DiaryEntryInterface & {
//   flightNumber: number;
// };

/*
Domain-Driven Design (DDD) notes:
- Prefer using Pick and/or Omit instead of creating redundant interfaces
- Pick allows selecting specific properties from an existing type
- Omit allows excluding specific properties from an existing type
*/

// 7. Define type without sensitive info using Pick (alternative form)
// export type NoSensitiveInfoDiaryEntryType = Pick<DiaryEntryInterface, 'id' | 'date' | 'weather' | 'visibility'>

// 8. Define type without sensitive info using Omit (preferred form)
// Static validation ensures 'comment' is excluded (disappears at runtime)
export type NoSensitiveInfoDiaryEntryType = Omit<DiaryEntryInterface, 'comment'>

// 9. Define type for creating new diary entries (without auto-generated id)
export type NewDiaryEntryType = Omit<DiaryEntryInterface, 'id'>
