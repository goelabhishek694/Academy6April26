import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieSlice",
    initialState: {
        movies: [],
        loading: false,
        error: null,
    },
    reducers: {
        setMovies:(state, descObj) => {
            state.movies = descObj.payload;
        },
        setLoading:(state, descObj) => {
            state.loading = descObj.payload;
        },
        setError:(state, descObj) => {
            state.error = descObj.payload;
        }
    }
})

export const { setMovies, setLoading, setError } = movieSlice.actions;
export default movieSlice;