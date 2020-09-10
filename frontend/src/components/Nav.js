import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-item">
        <div className="logo-text">
          <h4>Website</h4>
        </div>
      </div>

      <div className="nav-item">
        <div className="nav-mid">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/todo">Todo</NavLink>
            </li>
            <li>
              <NavLink to="/timetable">Timetable</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-item">
        <div className="nav-right">
          <div className="right-link">
            <a href="https://github.com/feiyangfan">Github</a>
          </div>
          <div className="right-link">
            <a href="#About me">About me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
