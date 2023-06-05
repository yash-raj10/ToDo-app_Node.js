import { Task } from "../models/task.js";

export const newTask = async (req, res, next)=>{
    try {
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
    } catch (error) {
        next(error);
    }

};



export const getMyTask = async (req, res, next )=>{
    try {
        const userid = req.user._id;

        const tasks = await Task.find({ user: userid });
    
        res.status(200).json({
            sucess:true,
            tasks,
        });
    } catch (error) {
       next(error) ;
    }

}  ;


export const upadateTask = async (req, res, next )=>{
    try {
        const task = await Task.findById(req.params.id);


        if(!task) return next(new Error("Task not found"));
    
        task.isCompleated = !task.isCompleated;
    
        await task.save();
    
        res.status(200).json({
            sucess:true,
            message: "task upadated!",
        });
    } catch (error) {
        next(error);
    }
};



export const deleatTask = async (req, res, next )=>{
   try {
    const task = await Task.findById(req.params.id);

    if(!task) return next(new Error(""));


    await task.deleteOne();


    res.status(200).json({
        sucess:true,
        message: "task deleted!",
    });
   } catch (error) {
    next(error);
   }
}  ;