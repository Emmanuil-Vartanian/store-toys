import React from "react";

import "./toys.css";

const Toys = ({ title, price, images }) => {
  function getRandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }

  return (
    <div
      className="card-toy"
      style={{ boxShadow: `0 0 15px ${getRandomColor()}` }}
    >
      <img src={`/images/${images[0]}`} />
      <div className="title-price-toy">
        <div className="card-title-toy">{title}</div>
        <div className="bottom-price-toy">{price} грн.</div>
      </div>
    </div>
  );
};

export default Toys;
