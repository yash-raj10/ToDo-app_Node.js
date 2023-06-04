import { Task } from "../models/task.js";

export const newTask = async (req, res, next)=>{
    const { title, discription } = req.body;

    await Task.create({
        title,
        discription,
        user: req.user,
    });

    res.status(201).json({
        success:true,
        message:"Task added successfully",
    });

};

export const getMyTask = async (req, res, next )=>{
    const userid = req.user._id;

    const tasks = await Task.find({ user: userid });

    res.status(200).json({
        sucess:true,
        tasks,
    });
}  ;


export const upadateTask = async (req, res, next )=>{
    const task = await Task.findById(req.params.id);


    if(!task) return next(new Error("Nice"));

    task.isCompleated = !task.isCompleated;

    await task.save();

    res.status(200).json({
        sucess:true,
        message: "task upadated!",
    });
}  ;

export const deleatTask = async (req, res, next )=>{
    const task = await Task.findById(req.params.id);

    if(!task) return next(new Error("Nice"));


    await task.deleteOne();


    res.status(200).json({
        sucess:true,
        message: "task deleted!",
    });
}  ;