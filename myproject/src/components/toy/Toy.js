import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import history from "../../history";

import "./toy.css";

import OrderToy from "./orderToy/OrderToy";

class Toy extends Component {
  constructor(props) {
    super(props);
    this.state = { order: false };
  }

  closePurchase = (order) => {
    this.setState({ order: order });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="toy">
        <div
          className="more-products"
          onClick={() => history.push("/")}
        >{`<-- Больше товаров`}</div>
        <div className="slider-description-toy">
          <Carousel className="slider">
            <Carousel.Item interval={9999999}>
              <img
                className="d-block toy-images"
                src={`/images/${localStorage.getItem("image1")}`}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={9999999} style={{ height: "500px" }}>
              <img
                className="d-block toy-images"
                src={`/images/${localStorage.getItem("image2")}`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={9999999}>
              <img
                className="d-block toy-images"
                src={`/images/${localStorage.getItem("image3")}`}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="description-toy">
            <div className="title-toy">{localStorage.getItem("title")}</div>
            <div className="price-toy">{localStorage.getItem("price")}</div>
            <div
              className="buy-toy"
              onClick={() => {
                this.setState({ order: true });
              }}
            >
              Купить
            </div>
            <pre>{localStorage.getItem("description")}</pre>
          </div>
        </div>

        {this.state.order ? (
          <OrderToy closePurchase={this.closePurchase} />
        ) : null}
      </div>
    );
  }
}

export default Toy;
