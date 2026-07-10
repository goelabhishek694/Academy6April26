import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        count: 5,
        name: "Arul",
        age:23
    }
})

export default counterSlice;