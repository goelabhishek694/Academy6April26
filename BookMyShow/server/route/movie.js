import express from 'express';
import { addMovie, getAllMovies, updateMovie, deleteMovie } from '../controller/movie.js';

const router = express.Router();

router.post('/', addMovie);
router.get('/', getAllMovies);
router.put('/:movie_id', updateMovie);
router.delete('/:movie_id', deleteMovie);

export default router;