import User from "../model/user.js";

export const registerUser = async(req,res) => {
    try{
        console.log("inside register")
        //fetch data from request body
        const {name,email,password,role="user"} = req.body;

        //validation
        // 1. check if fields exist
        if(!name || !email || !password || !role){
            return res.status(400).json({
                success: false,
                message: "data invalid"
            })
        }
        // 2. check if user already exists
        const isUserPresent = await User.findOne({email});
        if(isUserPresent){
            return res.status(400).json({
                success: false,
                message: "User already exists",
              });
        }

        await User.create({name, email, password, role});
        res.status(200).json({
            success: true,
            message: "user registered"
        })

    }catch(err){
        console.log("hello")
        res.status(500).json({
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
            return res.status(400).json({
                success: false,
                message: "user does not exist, please register first"
            });
        }
        //check if password is correct
        if(user.password !== password){
            return res.status(400).json({
                success: false,
                message: "invalid credentials"
            });
        }
        res.json({
            success: true,
            message: "user logged in"
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}