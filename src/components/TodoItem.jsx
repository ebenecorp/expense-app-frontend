import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.complete ? "line-through" : "none",
    };
  };

  // handleChange = (id) =>{
  //     console.log(id)
  // }
  render() {
    const { title, id } = this.props.todo;
    const { markComplete, onDelete } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => markComplete(id)} />{" "}
          {title}
        <button className="btn btn-danger p-1 float-right" onClick={() => onDelete(id)}>x</button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  onDelete: propTypes.func.isRequired,
  markComplete: propTypes.func.isRequired,
};
export default TodoItem;
