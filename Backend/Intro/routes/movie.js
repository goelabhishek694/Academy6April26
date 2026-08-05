const express = require('express');
const router = express.Router();
const {getAllMovies, getMovieById, createMovie, updateMovie, testError} = require("../controller/movie");
const {m1, m2} = require("../middleware/movie");

router.get("/", m1, m2, getAllMovies);
router.post("/", createMovie);
router.get("/test-error",testError);
router.get("/:id",getMovieById);
router.patch("/:id",updateMovie);

module.exports = router;