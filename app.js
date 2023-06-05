import express from "express";
import userRouter from "./routes/user.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env",
});

// using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.Frontend_url],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

//using routes
app.use("/users",userRouter);
app.use("/tasks",taskRouter);


app.get("/", (req, res)=>{
    res.send("nice working");
});


//using error middleware
app.use(errorMiddleware);