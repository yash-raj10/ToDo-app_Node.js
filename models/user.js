import mongoose from "mongoose";

// schema
const schema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },
    createDate:{
        type: Date,
        default: Date.now,
    },
});

// model
export const User = mongoose.model("User", schema);
