import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import todoSlice from '../Redux/TodoSlice';
const actions = todoSlice.actions;

function TodoRedux() {
    const {value, todoList} = useSelector((store) => store.todoState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const updatedValue = e.target.value;
        dispatch(actions.setValue(updatedValue));
    }

    const handleAdd = () => {
        dispatch(actions.addTask(value));
    }
    return(
        <>
            <h2>Todo</h2>
            <div style = {{ display : "flex" }}>
                <div className = "inputBox">
                    <input 
                    type = "text"
                    value={value}
                    onChange={handleChange}
                    />
                    <button onClick={handleAdd}>Add</button>
                </div>
                <div className = "list">
                    <ul>
                        {todoList.map((task, idx) => {
                            return <li key = {idx}>{task}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoRedux
