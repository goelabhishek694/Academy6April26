import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        count: 5,
        name: "Arul",
        age:23
    },
    reducers:{
        increment: (state) => {
            state.count+=1;
        },
        decrement: (state) => {
            if(state.count>0){
                state.count-=1;
            }
        }
    }
})

export default counterSlice;