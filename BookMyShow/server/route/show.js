import express from 'express';
import { addShow, getShowsByMovie, getShowsByTheatre, getShowById } from '../controller/show.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post("/",authMiddleware, addShow);
router.get("/by-movie", authMiddleware, getShowsByMovie);
router.get("/by-theatre", authMiddleware, getShowsByTheatre);
router.get("/:showId", authMiddleware, getShowById);


export default router;