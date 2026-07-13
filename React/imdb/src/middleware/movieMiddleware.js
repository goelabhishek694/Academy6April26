import { setMovies, setLoading, setError } from '../redux/movieSlice';

export const fetchMoviesMiddleware = (pageNo) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTY1NzgxODcwMy4yMDIsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LNDpBJ--YTga2vupX46hCWhBnsgEW43JjSJ2hyTA6k'
                }
              };
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1234567890&page=${pageNo}`,options);
            const data = await response.json();
            dispatch(setMovies(data.results));
        }catch(error){
            dispatch(setError(error.message));
        }finally{
            dispatch(setLoading(false));
            dispatch(setError(null));
        }
    }
}