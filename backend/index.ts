import express, { Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const word = require("./src/data/word.json");
const app: Express = express();
const port = process.env.PORT;
app.use(express.json())
app.use(cors())

app.use('/score', require("./src/route/score"));
app.use('/word', require("./src/route/word"));
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});