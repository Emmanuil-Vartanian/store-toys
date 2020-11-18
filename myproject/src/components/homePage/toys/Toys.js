import React from "react";
import { Card } from "react-bootstrap";

import "./toys.css"

// import robot1 from "../../../images/robot1.jpg";

const Toys = ({ title, price, image1 }) => {
  return (
    <div className="card-toy">
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/images/${image1}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} грн.</Card.Text>
        </Card.Body>
      </Card> */}

      <img src={`/images/${image1}`} />
      <div className="title-price-toy">
        <div className="card-title-toy">{title}</div>
        <div className="bottom-price-toy">{price} грн.</div>
      </div>
    </div>
  );
};

export default Toys;
