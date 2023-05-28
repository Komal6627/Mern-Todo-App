import express from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";
import getRoute from "./routes/TodoRoute";

dontenv.config();
const app=express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to Server`))
.catch((err) => console.log(err))

app.use(getRoute);

app.listen(PORT, ()=> console.log(`Listening on: ${PORT}`))


