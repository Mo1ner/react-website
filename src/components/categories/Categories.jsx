import React from "react";

import img1 from "./../../img/main/Rectangle 3-1.png";
import img2 from "./../../img/main/Rectangle 4-1.png";
import img3 from "./../../img/main/Rectangle 5-1.png";
import img4 from "./../../img/main/Rectangle 6-1.png";
import bigImg from "./../../img/main/Rectangle 7.png";

import "./categories.css";
import Title from "../title/Title";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <Title text="Shop by categories" />
      </div>
      <div className="categories-img">
        <img src={img1} alt="1" />
        <img src={img2} alt="2" />
        <img src={img3} alt="3" />
        <img src={img4} alt="4" />
      </div>
      <div className="categories-banner">
        <img src={bigImg} alt="big img" />
      </div>
    </div>
  );
};

export default Categories;
