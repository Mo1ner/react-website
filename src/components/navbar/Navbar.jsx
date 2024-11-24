import React, { useState } from "react";

import burgerMenu from "./../../img/header/menu.png";

import "./navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const togglemenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <a href="!#">ALTANSCHOOL WEB COURSES</a>
          </div>
          <nav className="nav">
            <ul className={`${mobileMenu ? "open-mobile-menu" : ""}`}>
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
            <img
              src={burgerMenu}
              onClick={togglemenu}
              className={`${
                mobileMenu ? "mobile-menu mobile-menu-fixed" : "mobile-menu"
              }`}
              alt="mobile menu"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
