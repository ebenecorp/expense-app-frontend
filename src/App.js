import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
