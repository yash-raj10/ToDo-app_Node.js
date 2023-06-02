import mongoose from "mongoose";

// schema
const schema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    discription: {
        type: String,
        requird: true,
    },
    isCompleated:{
        type: Boolean,
        default: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createDate:{
        type: Date,
        default: Date.now,
    },
});

// model
export const Taask = mongoose.model("Task", schema);
