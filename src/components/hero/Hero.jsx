import React from "react";

import heroImg from "./../../img/header/image 1.png";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-row">
          <div className="hero-img">
            <img src={heroImg} alt="" />
          </div>
          <div className="hero-text">
            <h1>ORGANIC FASHION</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="btn-hero__wrapper">
              <a className="btn-hero" href="!#">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
