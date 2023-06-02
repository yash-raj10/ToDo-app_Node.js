import express from "express";
import { newTask } from "../controllers/task.js"
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuth, newTask);

export default router