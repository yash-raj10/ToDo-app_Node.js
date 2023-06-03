import express from "express";
import { deleatTask, getMyTask, newTask, upadateTask } from "../controllers/task.js"
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuth, newTask);

router.post("/my", isAuth, getMyTask);

router.route("/:id").put(isAuth, upadateTask).delete(isAuth, deleatTask);

export default router