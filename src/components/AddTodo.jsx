import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Enter todo title..."
        />

        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
