import React, { Component } from "react";
import { PropTypes} from 'prop-types';

class AddTodo extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    const title = e.target.value;
    this.setState({ title });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Enter todo title..."
          value={this.state.title}
          onChange={this.handleChange}
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

AddTodo.propTypes = {
  addTodo: PropTypes.object.isRequired,
};

export default AddTodo;
