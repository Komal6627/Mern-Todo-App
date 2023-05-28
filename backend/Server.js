import express from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";
import cors from "cors";
import list from "./routes/TodoRoute.js"


dontenv.config();
const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to Server`))
.catch((err) => console.log(err))

app.use('/todo', list);


app.listen(PORT, ()=> console.log(`Listening on: ${PORT}`))


