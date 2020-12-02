import React from "react";

import "./toys.css"

const Toys = ({ title, price, images }) => {
  return (
    <div className="card-toy">
      <img src={`/images/${images[0]}`} />
      <div className="title-price-toy">
        <div className="card-title-toy">{title}</div>
        <div className="bottom-price-toy">{price} грн.</div>
      </div>
    </div>
  );
};

export default Toys;
