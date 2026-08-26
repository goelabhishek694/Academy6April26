import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ["user", "partner", "admin"],
        default: "user",
        required: true
    },
    otp:{
        type:String,
    },
    //prevent re use of otp after a certain time
    otpExpiry:{
        type:Date
    }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;