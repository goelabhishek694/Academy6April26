import express from 'express';
import { addShow, getShowsByMovie, getShowsByTheatre } from '../controller/show.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post("/",authMiddleware, addShow);
router.get("/by-movie", authMiddleware, getShowsByMovie);
router.get("/by-theatre", authMiddleware, getShowsByTheatre);


export default router;