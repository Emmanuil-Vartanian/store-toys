import React, { Component } from "react";

import "./orderToy.css";

// import history from "../../../history";

import InformationAboutToy from "./informationAboutToy/InformationAboutToy";

var shoppingCart = [];
var sumAllPriceToys = [];

class OrderToy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartDatabase: shoppingCart,
      sumAllPriceToys: 1,
      firstName: "",
      lastName: "",
      city: "",
      newMail: "",
      telephone: "",
    };
  }

  handleDeleteElement = (id) => {
    this.setState({
      shoppingCartDatabase: this.state.shoppingCartDatabase.filter(
        (el) => el.id !== id
      ),
    });
  };

  sendingDataToMail = (dataToys) => {
    fetch("/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        city: this.state.city,
        newMail: this.state.newMail,
        telephone: this.state.telephone,
        dataToys: dataToys,
      }),
    }).then((res) => res.json());
  };

  sumAllPriceToys = (sumAllPriceToys) => {
    this.setState({ sumAllPriceToys: sumAllPriceToys });
  };

  render() {
    return (
      <div className="order-toy">
        {/* <div
          className="back-toy"
          onClick={() => {
            this.props.closePurchase(false);
            document.body.style.overflow = "auto";
          }}
        >
          Back
        </div> */}
        <div
          className="back-toy"
          onClick={() => {
            this.props.closePurchase(false);
            document.body.style.overflow = "auto";
          }}
        >
          <div className="left-stick"></div>
          <div className="right-stick"></div>
        </div>

        {this.state.shoppingCartDatabase.length === 0
          ? (this.props.closePurchase(false),
            (document.body.style.overflow = "auto"),
            this.props.closeBasketToys(false))
          : ""}

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
                price1={el.price1}
                quantityOfGoods={el.quantityOfGoods}
                handleDeleteElement={this.handleDeleteElement}
                shoppingCart={shoppingCart}
                closePurchase={this.props.closePurchase}
                sumAllPriceToys={this.sumAllPriceToys}
                deleteTheSameObject={this.deleteTheSameObject}
              />
            ))}
          </div>

          <div className="order-price">
            Сумма:{" "}
            {this.state.shoppingCartDatabase.length !== 1
              ? this.state.shoppingCartDatabase.reduce(
                  (p, c) => p + +c.price,
                  0
                )
              : this.state.shoppingCartDatabase.reduce(
                  (p, c) => +c.price * this.state.sumAllPriceToys,
                  0
                )}{" "}
            грн.
          </div>

          <div className="order-form">
            <div className="firstName">
              Имя:
              <input
                type="text"
                value={this.state.firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            </div>
            <div className="lastName">
              Фамилия:
              <input
                type="text"
                value={this.state.lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
              />
            </div>
            <div className="city">
              Город:
              <input
                type="text"
                value={this.state.city}
                onChange={(e) => this.setState({ city: e.target.value })}
              />
            </div>
            <div className="newMail">
              Отделение новой почты:
              <input
                type="text"
                value={this.state.newMail}
                onChange={(e) => this.setState({ newMail: e.target.value })}
              />
            </div>
            <div className="telephone">
              Ваш телефон:
              <input
                type="tel"
                pattern="2[0-9]{3}-[0-9]{3}"
                value={this.state.telephone}
                onChange={(e) => this.setState({ telephone: e.target.value })}
              />
            </div>
            <button
              className="btn-form"
              onClick={() => {
                setTimeout(() => {
                  this.sendingDataToMail(this.state.shoppingCartDatabase);
                }, 0);
              }}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { OrderToy, shoppingCart, sumAllPriceToys };
