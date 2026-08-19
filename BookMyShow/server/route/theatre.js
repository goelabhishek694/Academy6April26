import express from 'express';
import { addTheatre, getPartnerTheatres } from '../controller/theatre.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post("/",authMiddleware, addTheatre);
router.get("/partner", authMiddleware, getPartnerTheatres);
// router.get("/all", getAllTheatres);


export default router;