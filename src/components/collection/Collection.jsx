import React from "react";

import img1 from "./../../img/main/Rectangle 10.png";
import img2 from "./../../img/main/Rectangle 11.png";
import img3 from "./../../img/main/Rectangle 12.png";
import "./collection.css";

import Title from "../title/Title";

const Collection = () => {
  return (
    <div className="collection">
      <div className="container">
        <Title text="New collection" />
        <div className="collection-img">
          <div className="collection-item">
            <img src={img1} alt="img 1" />
          </div>
          <div className="collection-item">
            <img src={img2} alt="img 2" />
          </div>
          <div className="collection-item">
            <img src={img3} alt="img 3" />
          </div>
        </div>
        <div className="collection-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
