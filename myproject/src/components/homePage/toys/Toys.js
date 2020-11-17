import React from "react";
import { Card } from "react-bootstrap";

// import robot1 from "../../../images/robot1.jpg";

const Toys = ({ title, price, image1 }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/images/${image1}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price} грн.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Toys;
