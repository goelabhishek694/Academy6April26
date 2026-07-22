import React, { Component } from 'react'

export default class CbIntro extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        console.log("Increment");
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        console.log("Decrement");
        this.setState({count: this.state.count - 1});
    }
  render() {
    return (
      <div>
        <h1>Hello, React {this.props.name}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
