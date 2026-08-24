import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    show:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Show",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    seats:{
        type:Array,
        required:true,
    },
    transactionId:{
        type:String,
        required:true,
    }
}, {timestamps:true});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;