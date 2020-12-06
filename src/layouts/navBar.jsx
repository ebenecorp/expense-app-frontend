import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <span
          className="navbar-brand mb-0 h1"
          style={{ textAlign: "center", color: "white" }}>
          Todo List
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-1"
                style={{ color: "white" }}
                to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link nav-1"
                style={{ color: "white" }}
                to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
