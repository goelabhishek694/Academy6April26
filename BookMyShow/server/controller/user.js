import User from "../model/user.js";
import bcrypt from "bcrypt"
import { signToken } from "../util/jwt.js";

export const registerUser = async(req,res) => {
    try{
        //fetch data from request body
        const {name,email,password,role="user"} = req.body;

        //validation
        // 1. check if fields exist
        if(!name || !email || !password || !role){
            return res.json({
                success: false,
                message: "data invalid"
            })
        }
        // 2. check if user already exists
        const isUserPresent = await User.findOne({email});
        if(isUserPresent){
            return res.json({
                success: false,
                message: "User already exists",
              });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name, email, password:hashedPassword, role
        });

        return res.status(200).json({
            success: true,
            message: "user registered"
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const loginUser = async(req, res) => {
    try{
        const {email, password} = req.body;
        //check if user exists 
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                success: false,
                message: "user does not exist, please register first"
            });
        }
        //check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({
                success: false,
                message: "invalid credentials"
            });
        }
        const token = signToken({userId: user._id.toString()});
        res.json({
            success: true,
            message: "user logged in",
            data: token
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}