import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.isComplete ? "line-through" : "none",
    };
  };
  render() {
    return <div style={this.getStyle()}>{this.props.todo.title}</div>;
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};
export default TodoItem;
