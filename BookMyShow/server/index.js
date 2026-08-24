import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from "cors";

import connectDB from './config/db.js';
import userRoutes from './route/user.js';
import movieRoutes from './route/movie.js';
import theatreRoutes from './route/theatre.js';
import showRoutes from './route/show.js';
import bookingRoutes from './route/booking.js';

const app = express();
connectDB();
//request from this port is allowed 
app.use(cors({
    orign: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", theatreRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});