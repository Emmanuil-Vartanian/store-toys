import React from "react";
import { Carousel } from "react-bootstrap";

const SliderImages = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block img-fluid"
          src="/images/robot.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block img-fluid"
          src="/images/Typewriter-flip-from-hand-control.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block img-fluid"
          src="/images/Multi-set-for-creativity.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block img-fluid"
          src="/images/safe.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderImages;
