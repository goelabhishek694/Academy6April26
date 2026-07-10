import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        value: "",
        todoList: ["task1", "task2", "task3"]
    },
    reducers:{
        setValue: (state, descObj) => {
            // console.log("Set Value", descObj.payload);
            state.value = descObj.payload;
        },
        addTask:(state, descObj) => {
            const updatedTodoList = [...state.todoList, descObj.payload];
            state.todoList = updatedTodoList;
            state.value = "";
        }
    }
})

export default todoSlice;