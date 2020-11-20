import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <h1 key={todo.id}>
        <TodoItem todo={todo} />
      </h1>
    ));
  }
}

//making props and assigning the type of the props required.
Todos.propTypes = {
    todos: propTypes.array.isRequired
}
export default Todos;
