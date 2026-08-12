import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './route/user.js';

const app = express();
connectDB();
app.use(express.json());
app.use("/api/users", userRoutes);
console.log("weds");

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});