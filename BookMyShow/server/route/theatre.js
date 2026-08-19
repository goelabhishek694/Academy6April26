import express from 'express';
import { addTheatre, getPartnerTheatres, getAllTheatres, approveTheatre } from '../controller/theatre.js';
import { authMiddleware } from '../middleware/auth.js';
import { adminMiddleware } from '../middleware/admin.js';

const router = express.Router();

router.post("/",authMiddleware, addTheatre);
router.get("/partner", authMiddleware, getPartnerTheatres);
router.get("/all", authMiddleware, adminMiddleware, getAllTheatres);
router.put("/:theatre_id", authMiddleware, adminMiddleware, approveTheatre);


export default router;