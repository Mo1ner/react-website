import React from "react";

import footerImg from "./../../img/footer/Rectangle 19.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-wrapper">
            <div className="footer-title">
              <h2>Follow us</h2>
            </div>
            <form className="footer-form">
              <input
                type="text"
                class="form-input"
                placeholder="Enter your name"
              />
              <input
                type="email"
                class="form-input"
                placeholder="Enter a valid email address"
              />
              <textarea
                class="form-textarea"
                placeholder="Enter your message"
              ></textarea>
              <button type="submit" class="form-button">
                Submit
              </button>
            </form>
          </div>
          <div className="footer-img">
            <img src={footerImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
