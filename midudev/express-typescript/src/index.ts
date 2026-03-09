// Hello, TypeScript! @jdomingu19
// API REST with Node.js and Express @midudev

// . ?
import express from "express";
import diaryRouter from "./routes/diaries";

// . ?
const app = express();

// . ?
app.use(express.json()); // middleware que transforma red.body a json

// . ?
const PORT = 3001;

// . ?
app.get("/ping", (_req, res) => {
  console.log("Someone pinged here! " + new Date().toLocaleDateString());
  res.send("Pong!");
});

// . ?
app.use("/api/diaries", diaryRouter);

// . ?
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
