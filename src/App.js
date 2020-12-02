import React, { Component } from "react";
import Todos from "./components/Todos";
import NavBar from './layouts/navBar';
import "./App.css";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Study for exams",
        isComplete: false,
      },
      {
        id: 2,
        title: "Cook rice and beans",
        isComplete: true,
      },
      {
        id: 3,
        title: "Eat rice and beans",
        isComplete: false,
      },
    ],
  };

  handleChange = (id) => {
    let todos = [...this.state.todos];
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    this.setState({ todos });
  };

  handleDelete = (id) => {
    let todos = [...this.state.todos];
    todos = todos.filter(todo => todo.id !== id);
    this.setState({ todos });
    console.log("deleted", id);
  };

  render() {
    return (
      <div className="App Container">
        <NavBar />
        <AddTodo />
        <Todos
          todos={this.state.todos}
          markComplete={this.handleChange}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
