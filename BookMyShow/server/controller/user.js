import User from "../model/user.js";

export const registerUser = async(req,res) => {
    try{
        console.log("inside register")
        //fetch data from request body
        const {name,email,password,role} = req.body;

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

    }
}