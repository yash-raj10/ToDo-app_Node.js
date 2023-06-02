import { User } from "../models/user.js";
import  jwt  from "jsonwebtoken";


export const isAuth = async (req, res, next)=>{

    const { token } = req.cookies;

    if(!token)
    return res.status(404).json({
        success: false,
        message:"Login First"
    });

    const decode = jwt.verify(token, process.env.JWT_HASH)

    req.user = await User.findById(decode._id);
    next();
}