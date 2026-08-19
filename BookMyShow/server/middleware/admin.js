import User from "../model/user.js";

export const adminMiddleware = async(req, res, next) => {
    try{
        const user = await User.findById(req.userId).select("role");
        console.log("hello123",user);
        if(user.role !== "admin"){
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            })
        }
        next();
    }catch(err){
        console.log("hello123",err);
        return res.status(500).json({
            success: false,
            message: "Admin verification failed",
        })
    }
}