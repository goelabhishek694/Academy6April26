import dotenv from 'dotenv';
dotenv.config();
import stripe from 'stripe';
const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY);

export const makePayment = async (req, res) => {
    try{
        const {token,amount} = req.body;
        const customer = await stripeClient.customers.create({
            email: token.email,
            source: token.id,
        });

        const paymentIntent = await stripeClient.paymentIntents.create({
            amount,
            currency: 'inr',
            customer: customer.id,
            payment_method_types: ['card'],
            receipt_email: token.email,
            description: 'Booking for the show',
            confirm: true,
        });

        const transactionId = paymentIntent.id;
        res.send({
            success: true,
            message: "Payment processing, you will receive confirmation once the payment is done",
            data:transactionId,
        })

    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
};

export const confirmBooking = async (req, res) => {
    try{
        const newBooking = new Booking(req.body);
        await newBooking.save();

        const show = await Show.findById(req.body.show).populate('movie');
        const updatedBookedSeat = [...show.bookedSeats, ...req.body.seats];
        await Show.findByIdAndUpdate(req.body.show, {bookedSeats: updatedBookedSeat});
        res.send({
            success: true,
            message: "Booking confirmed successfully",
            data: newBooking,
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
};

export const getAllBookings = async (req, res) => {
    try{
        const {userId} = req.params;
        const bookings = await Booking.find({user: userId})
        .populate("user")
        .populate("show")
        .populate({
            path: "show",
            populate: {
                path: "movie",
                model: "Movie",
            },
        })
        .populate({
            path: "show",
            populate: {
                path: "theatre",
                model: "Theatre",
            },
        })
        res.send({
            success: true,
            message: "Bookings fetched successfully",
            data: bookings,
        })

    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
};