import React from "react";
import aboutImg from "./../../img/main/Mask group.png";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-row">
          <div className="about-img">
            <img src={aboutImg} alt="img" />
          </div>
          <div className="about-wrapper">
            <div className="about-title">
              <h2>About us</h2>
            </div>
            <div className="about-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="about-btn">
              <a href="!#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
