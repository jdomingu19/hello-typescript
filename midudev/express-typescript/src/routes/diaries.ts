// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/routes/diaries.ts

// 1. Import Express, diary services, and utility for validating new entries
// const express = require("express"); // CommonJS
import express from 'express' // ESModules
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

// 2. Initialize a new Express router instance
const router = express.Router()

// 3. Define GET route to fetch all diary entries without sensitive information
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

// 4. Define GET route to fetch a single diary entry by ID
router.get('/:id', (req, res) => {
  // const diary = diaryServices.findById(Number(req.params.id))
  const diary = diaryServices.findById(+req.params.id) // +"123" = 123
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

// 5. Define POST route to add a new diary entry with validation and error handling
router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error) {
    // `error` is unknown, so narrow it first
    if (error instanceof Error) {
      res.status(400).send(error.message)
    } else {
      // fallback to a generic string if error type is not recognized
      res.status(400).send(error)
    }
  }
})

// 6. Export router to be used in the main application
export default router
