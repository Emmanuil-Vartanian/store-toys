import React, { Component } from "react";

import "./orderToy.css";

import history from "../../../history";
import shoppingCartDatabase from "../../../database/shoppingCart";

import InformationAboutToy from "./informationAboutToy/InformationAboutToy";

class OrderToy extends Component {
  constructor(props) {
    super(props);
    this.state = { shoppingCartDatabase: shoppingCartDatabase };
    // this.props.numberBuyToy(this.state.shoppingCartDatabase.length)
    // console.log(this.state.shoppingCartDatabase.length);
    // setTimeout(() => {
    //   this.props.numberBuyToy(this.state.shoppingCartDatabase.length);
    // }, 0);

    // localStorage.setItem(
    //   "numberBuyToy",
    //   this.state.shoppingCartDatabase.length
    // );
  }

  // componentDidUpdate() {
  // this.props.numberBuyToy(this.state.shoppingCartDatabase.length)
  // }

  handleDeleteElement = (id) => {
    this.setState((prevState) => ({
      shoppingCartDatabase: prevState.shoppingCartDatabase.filter(
        (el) => el.id != id
      ),
    }));
  };

  render() {
    return (
      <div className="order-toy">
        <div
          className="back-toy"
          onClick={() => {
            this.props.closePurchase(false);
            document.body.style.overflow = "auto";
          }}
        >
          Back
        </div>

        {this.state.shoppingCartDatabase.length === 0
          ? (this.props.closePurchase(false),
            (document.body.style.overflow = "auto"),
            this.props.closeBasketToys(false))
          : console.log("0")}
        {/* {console.log(shoppingCartDatabase.length)} */}
        {/* {this.props.numberBuyToy(this.state.shoppingCartDatabase.length)} */}
        {/* {this.state.shoppingCartDatabase.length !== 0
          ? this.props.numberBuyToy(1)
          : console.log("0")} */}

        <div className="data-for-buying-toys">
          <div className="order-title">Ваш заказ:</div>
          <div className="border-top-bottom">
            {this.state.shoppingCartDatabase.map((el) => (
              <InformationAboutToy
                key={el.image + el.price}
                id={el.id}
                image={el.image}
                title={el.title}
                price={el.price}
                quantityOfGoods={el.quantityOfGoods}
                handleDeleteElement={this.handleDeleteElement}
                shoppingCartDatabase={this.state.shoppingCartDatabase}
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
