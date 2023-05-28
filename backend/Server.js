import express from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";
import cors from "cors";
import getRoute from "./routes/TodoRoute.js"
import postRoute from "./routes/TodoRoute.js";

dontenv.config();
const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to Server`))
.catch((err) => console.log(err))

app.use('/todo', getRoute);
app.use('/todo', postRoute);

app.listen(PORT, ()=> console.log(`Listening on: ${PORT}`))


