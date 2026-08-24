import express from 'express';
import { makePayment, confirmBooking, getAllBookings } from '../controller/booking.js';
import { authMiddleware } from '../middleware/auth.js';
import { adminMiddleware } from '../middleware/admin.js';

const router = express.Router();

router.post("/make-payment",authMiddleware, makePayment);
router.post("/show",authMiddleware, confirmBooking);
router.get("/all/:userId", authMiddleware, getAllBookings);


export default router;