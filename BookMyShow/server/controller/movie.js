import Movie from '../model/movie.js';

export const addMovie = async(req, res) => {
    try{
        const movie = await Movie.create(req.body);
        res.send({
            success: true,
            message: 'Movie added successfully',
            data:movie,
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}

export const getAllMovies = async(req, res) => {
    try{
        const movies = await Movie.find().sort({createdAt: -1});
        res.send({
            success: true,
            message: 'Movies fetched successfully',
            data:movies,
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}

export const updateMovie = async(req, res) => {
    try{
        const {movie_id} = req.params;
        await Movie.findByIdAndUpdate(movie_id, req.body);
        res.send({
            success: true,
            message: 'Movie updated successfully',
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}

export const deleteMovie = async(req, res) => {
    try{
        const {movie_id} = req.params;
        await Movie.findByIdAndDelete(movie_id);
        res.send({
            success: true,
            message: 'Movie deleted successfully',
        })   

    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}