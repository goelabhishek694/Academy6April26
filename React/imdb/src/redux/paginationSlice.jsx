import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "paginationSlice",
    initialState: {
        pageNo: 1
    },
    reducers: {
        handleNext: (state) => {
            state.pageNo = state.pageNo + 1;
        },
        handlePrev:(state) => {
            if(state.pageNo > 1){
                state.pageNo = state.pageNo - 1;
            }
        }
    }
});

export const { handleNext, handlePrev } = paginationSlice.actions;
export default paginationSlice;