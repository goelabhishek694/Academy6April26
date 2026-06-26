// Build a To-Do List where they can:

// Add tasks using an input field and Add button.
// Remove a task when clicking a delete button next to the task.

import React, {useState}  from 'react'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setTask(e.target.value);
        
    }
    const handleAddTask = (e) => {
        console.log("Task added");
        let updatedTask = [...tasks, task];

        // [] -> new array -> new memory 
        setTasks(updatedTask);
        setTask("");
    }

    const handleDeleteTask = (taskIdx) => {
        let updatedTasks = tasks.filter((task,idx) => {
            return taskIdx != idx;
        });
        setTasks(updatedTasks);
    }

  return (
    <div>
      <h2>To Do List</h2>
      <input type="text" placeholder="Add a task" onChange={handleInputChange} value={task}></input>
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task,idx) => {
            return (
                <>
                    <li>{task}</li>
                    <button onClick={()=>handleDeleteTask(idx)}><i class="fa-solid fa-trash"></i></button>
                </>
            )
        })}
      </ul>
    </div>
  )
}

export default Todo
