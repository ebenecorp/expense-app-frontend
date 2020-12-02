import React, { Component } from "react";
import TodoItem from "./TodoItem";
// import propTypes from 'prop-types';

class Todos extends Component {
  // markComplete = (e) => {
  //   console.log("it is clicking");
  // };

  render() {
    const { todos, markComplete, onDelete } = this.props;

    return todos.map((todo) => 
        <TodoItem  key={todo.id} todo={todo} markComplete={markComplete} onDelete={onDelete} />
      
    );
  }
}

//making props and assigning the type of the props required.
// Todos.propTypes = {
//     todos: propTypes.array.isRequired
// }
export default Todos;
