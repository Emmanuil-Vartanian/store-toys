import React, { Component } from "react";

import "./orderToy.css";

import history from "../../../history";
import shoppingCartDatabase from "../../../database/shoppingCart";

class InformationAboutToy extends Component {
  constructor(props) {
    super(props);
    this.state = { numberToy: this.props.quantityOfGoods };
  }

  minusAndPlus = (choice) => {
    choice === "minus"
      ? this.setState({
          numberToy: this.state.numberToy === 1 ? 1 : this.state.numberToy - 1,
        })
      : this.setState({ numberToy: this.state.numberToy + 1 });
  };

  render() {
    return (
      <div className="information-about-toy">
        <div>
          <img
            className="image-toy"
            src={`/images/${this.props.image}`}
            alt="First slide"
          />
        </div>
        <div className="title-color-toy">
          <div className="toy-title">{this.props.title}</div>
          <div className="color-toy">Цвет : Красный</div>
        </div>
        <div className="number-of-toys">
          <div className="minus-toy" onClick={() => this.minusAndPlus("minus")}>
            <img src="/images/minus.png" />
          </div>
          <div className="number-toy">{this.state.numberToy}</div>
          <div className="plus-toy" onClick={() => this.minusAndPlus("plus")}>
            <img src="/images/plus.png" />
          </div>
        </div>
        <div className="toy-price">
          {+this.props.price * this.state.numberToy} грн.
        </div>
        <div className="delete-toy" onClick={() => history.push("/")}>
          <img src="/images/close.png" />
        </div>
      </div>
    );
  }
}

class OrderToy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="order-toy">
        <div
          className="back-toy"
          onClick={() => this.props.closePurchase(false)}
        >
          Back
        </div>

        <div className="data-for-buying-toys">
          <div className="order-title">Ваш заказ:</div>

          <div className="border-top-bottom">
            {shoppingCartDatabase.map((el) => (
              <InformationAboutToy
                key={el.image + el.price}
                image={el.image}
                title={el.title}
                price={el.price}
                quantityOfGoods={el.quantityOfGoods}
              />
            ))}
          </div>

          <div className="order-price"></div>

          <div className="order-form"></div>
        </div>
      </div>
    );
  }
}

export default OrderToy;
