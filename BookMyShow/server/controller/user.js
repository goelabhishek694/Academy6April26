import User from "../model/user.js";
import bcrypt from "bcrypt"
import { generateOTP, signToken } from "../util/helper.js";
import emailHelper from "../util/emailHelper.js";
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

export const getCurrentUser = async(req, res) => {
    try{
        const userId = req.userId;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(400).json({
                success: false,
                message: "user not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "user fetched succesfully",
            data: {user}
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const forgetPassword = async(req, res) => {
    try{
        /****
    * 1. You can ask for email
    * 2. check if email is present or not
    *  * if email is not present -> send a response to the user(user not found)
    * 3. if email is present -> create basic otp -> and send to the email
    * 4. also store that otp -> in the userModel
    *
    * ***/

    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            success: false,
            message: "user not found"
        });
    }
    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; //10 minutes
    await user.save();
    emailHelper("otp", email, {name: user.name, otp: otp});
    return res.status(200).json({
        success: true,
        message: "otp sent to email"
    });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const resetPassword = async(req, res) => {
    try{
        const {email} = req.params;
        const resetDetails = req.body;
        if(!resetDetails.password || !resetDetails.otp){
            return res.status(401).json({
                status: "failure",
                message: "invalid request",
              });
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                status: "failure",
                message: "user not found",
              });
        }
        //if otp is expired 
        if(Date.now() > user.otpExpiry){
            return res.status(401).json({
                status: "failure",
                message: "otp expired",
              });
        }
        if(resetDetails.otp !== user.otp){
            return res.status(401).json({
                status: "failure",
                message: "invalid otp",
              });
        }

        user.password = await bcrypt.hash(resetDetails.password, 10);
        //remove otp
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();
        return res.status(200).json({
            status: "success",
            message: "password reset successfully",
          });


    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}