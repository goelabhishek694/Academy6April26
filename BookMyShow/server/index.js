import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from "cors";

import connectDB from './config/db.js';
import userRoutes from './route/user.js';

const app = express();
connectDB();
//request from this port is allowed 
app.use(cors({
    orign: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});