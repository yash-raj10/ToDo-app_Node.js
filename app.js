import express from "express";
import userRouter from "./routes/user.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";

export const app = express();

config({
    path:"./data/config.env",
});

// using middleware
app.use(express.json());
app.use(cookieParser());

//using routes
app.use("/users",userRouter);
app.use("/tasks",taskRouter);


app.get("/", (req, res)=>{
    res.send("nice working");
});