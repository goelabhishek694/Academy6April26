import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            currTodo: ""
        };
        console.log("Constructor: setting up initial state and bindings");
    };

    componentDidMount(){
        console.log("CDM: fetching initial to-do items");
        //call an API to fetch initial to-do items
        //simulating an api call
        setTimeout(() => {
            this.setState({
                todos: [
                    {id: 1, text: "Buy groceries"},
                    {id: 2, text: "Finish project"},
                    {id: 3, text: "Call mom"}
                ]
            })
        }, 
        1000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did Update: checking if new todo was added");
        if(prevState.todos !== this.state.todos){
            console.log("updated todos:", this.state.todos);
        }
    }

    componentWillUnmount(){
        console.log("CWU: cleaning up resources before component is removed");
    }

    handleInputChange = (e) => {
        this.setState({currTodo: e.target.value});
    }

    handleAddTodo = () => {
        this.setState({
            todos: [...this.state.todos, {id: this.state.todos.length+1, text: this.state.currTodo}],
            currTodo: ""
        });
    }

  render() {
    console.log('Render: Rendering the to-do list.');
    return (
      <div>
        <h1>My To-Do List</h1>
        <ul>
          {this.state.todos.map(({id, text}) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add To-Do</button>
      </div>
    );
  }
}
