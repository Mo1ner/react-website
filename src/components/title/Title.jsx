import React from "react";
import "./title.css";

const Title = ({ text }) => {
  return (
    <div className="main-title">
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
