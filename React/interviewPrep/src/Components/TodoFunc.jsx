import React, { useState, useEffect } from 'react'

function TodoFunc() {
    const [todos, setTodos] = useState([]);
    const [currTodo, setCurrTodo] = useState("");
    console.log("setting up initial state and bindings, it happens on intial render only and not on re-renders");

    useEffect(() => {
        console.log("useEffect: fetching initial to-do items");
        setTimeout(() => {
            const newTodos = [{id: 1, text: "Buy groceries"},
                {id: 2, text: "Finish project"},
                {id: 3, text: "Call mom"}];

            setTodos(newTodos);
        }, 
        1000);

        return () => {
            console.log("Component will Unmount: cleaning up resources before component is removed");
        }
    }, []);

    useEffect(() => {
        console.log("updated todos:", todos);
    }, [todos])

    const handleInputChange = (e) => {
        setCurrTodo(e.target.value);
    }

    const handleAddTodo = () => {
        setTodos([...todos, {id: todos.length+1, text: currTodo}]);
        setCurrTodo("");
    }

    console.log('Render: Rendering the to-do list.'); 
  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todos.map(({id, text}) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={currTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add To-Do</button>
    </div>
  )
}

export default TodoFunc
