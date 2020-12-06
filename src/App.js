import React, { Component } from "react";
import { Route } from "react-router-dom";
// import { v1 as uuid } from "uuid";
import Todos from "./components/Todos";
import NavBar from "./layouts/navBar";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/about";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "http://jsonplaceholder.typicode.com/users/1/todos"
    );
    this.setState({ todos: data });
  }
  // handle change of todos to iscomplete or not
  handleChange = (id) => {
    let todos = [...this.state.todos];
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({ todos });
  };

  // handle deletion of values
  handleDelete = async (id) => {
    let todos = [...this.state.todos];
    await axios.delete(
      `http://jsonplaceholder.typicode.com/todos/${id}`
    );
    todos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
    // console.log("deleted", id);
  };

  handleAddTodo = async (title) => {
    const todos = [...this.state.todos];

    if (title) {
      const { data } = await axios.post(
        "http://jsonplaceholder.typicode.com/users/1/todos",
        {
          title,
          complete: false,
        }
      );
      todos.push(data);
    }
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App Container">
        <NavBar />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <AddTodo addTodo={this.handleAddTodo} />
              <Todos
                todos={this.state.todos}
                markComplete={this.handleChange}
                onDelete={this.handleDelete}
              />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
