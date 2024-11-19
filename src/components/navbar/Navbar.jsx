import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <a href="!#">ALTANSCHOOL web COURSES</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="!#">HOME</a>
              </li>
              <li>
                <a href="!#">ABOUT</a>
              </li>
              <li>
                <a href="!#">SHOP</a>
              </li>
              <li>
                <a href="!#">BLOG</a>
              </li>
              <li>
                <a href="!#">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default navbar;
