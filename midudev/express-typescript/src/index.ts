// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev (2022)
// src/index.ts

// 1. Import Express framework and diary router module
import express from 'express'
import diaryRouter from './routes/diaries'

// 2. Initialize Express application instance
const app = express()

// 3. Register JSON middleware to automatically parse request bodies
app.use(express.json()) /// middleware that transforms req.body into JSON

// 4. Define server port constant
const PORT = 3001

// 5. Define health check route to verify server availability
app.get('/ping', (_req, res) => {
  console.log('Someone pinged here! ' + new Date().toLocaleDateString())
  res.send('Pong!')
})

// 6. Mount diary router under /api/diaries path
app.use('/api/diaries', diaryRouter)

// 7. Start server and listen on defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
