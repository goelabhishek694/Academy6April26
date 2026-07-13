import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        pagination: paginationSlice.reducer,
        movie: movieSlice.reducer,
    }
});

export default store;