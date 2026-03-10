// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/services/diaryServices.ts

// 1. Import type definitions and diary data source
import { DiaryEntryInterface, NewDiaryEntryType, NoSensitiveInfoDiaryEntryType } from '../types' // types.d.ts
import diaryData from './diaries.json'
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
const diaries: DiaryEntryInterface[] =
  diaryData as DiaryEntryInterface[]

// 3. Return all diary entries with full information
export const getEntries = (): DiaryEntryInterface[] => diaries

// 4. Find a diary entry by ID and exclude sensitive comment field
export const findById = (id: number): NoSensitiveInfoDiaryEntryType | undefined => {
  const entry = diaries.find(diary => diary.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

// 5. Return all diary entries without sensitive information (no comments)
export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntryType[] => {
  // Client-side validation ensures comments are not exposed at runtime
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

// 6. Add a new diary entry with auto-incremented ID
export const addDiary = (newDiaryEntry: NewDiaryEntryType): DiaryEntryInterface => {
  const newDiary = {
    // id: diaries.length + 1
    id: Math.max(...diaries.map(diary => diary.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}

// 7. Example: get entries without sensitive info
// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()

// 8. Example error: Property 'comment' does not exist on type 'NoSensitiveInfoDiaryEntryType'
// Error: Property 'comment' does not exist on type 'NoSensitiveInfoDiaryEntryType'.
// diariesWithoutSensitiveInfo[0].comment
