import React from "react";

import "./toys.css"

const Toys = ({ title, price, image1 }) => {
  return (
    <div className="card-toy">
      <img src={`/images/${image1}`} />
      <div className="title-price-toy">
        <div className="card-title-toy">{title}</div>
        <div className="bottom-price-toy">{price} грн.</div>
      </div>
    </div>
  );
};

export default Toys;
