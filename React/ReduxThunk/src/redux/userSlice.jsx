import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState:{
        user:null,
        loading:false,
        error:null,
        param:1
    },
    reducers:{
        setUser: (state, descObj) => {
            state.user = descObj.payload;
        },
        setLoading: (state, descObj) => {
            state.loading = descObj.payload;
        },
        setError: (state, descObj) => {
            state.error = descObj.payload;
        },
        setParam: (state, descObj) => {
            state.param = descObj.payload;
        },
    }

});

export default userSlice;