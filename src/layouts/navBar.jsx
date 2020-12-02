import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-dark">
      <span
        className="navbar-brand mb-0 h1"
        style={{ textAlign: "center", color: "white" }}>
        Todo List
      </span>
    </nav>
  );
}

export default NavBar;
