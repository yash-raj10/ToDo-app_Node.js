import jwt from "jsonwebtoken";

export const sendCookie=(user, res, message, statusCode = 200)=>{
    const token = jwt.sign({_id: user._id}, process.env.JWT_HASH);

    res
     .status(statusCode)
     .cookie("token", token, {
        httpOnly: true,
        maxAge: 15*60*1000,
        // for getting cookie on postman and different domains as well
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
     })
     .json({
        success:true,
        message,
     });
}