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
      successfulSendingOfData: false,
      delivery: "",
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
        telephone: this.state.telephone,
        delivery:
          this.state.delivery === "pickup" ? "Самовывоз" : "Новой почтой",
        city: this.state.city === "" ? "Харьков" : this.state.city,
        newMail: this.state.newMail === "" ? "Не нужно" : this.state.newMail,
        dataToys: dataToys,
      }),
    })
      .then((res) => {
        res.json();
        res.status === 201
          ? this.setState({ successfulSendingOfData: true })
          : this.setState({ successfulSendingOfData: false });
      })
      .then((e) => console.log(e));
  };

  sumAllPriceToys = (sumAllPriceToys) => {
    this.setState({ sumAllPriceToys: sumAllPriceToys });
  };

  render() {
    return (
      <div
        className="order-toy"
        // onMouseMove={(event) => console.log((this.value = event.clientX))}
        onClick={() => {
          console.log(document.querySelector(".order-toy").offsetWidth);
          console.log("hi");
        }}
      >
        <div
          className="back-toy"
          onClick={() => {
            this.props.closePurchase(false);
            document.body.style.overflow = "auto";
            this.state.successfulSendingOfData
              ? window.location.reload()
              : console.log("no");
          }}
        >
          <div className="left-stick"></div>
          <div className="right-stick"></div>
        </div>

        {!this.state.shoppingCartDatabase.length
          ? (this.props.closePurchase(false),
            (document.body.style.overflow = "auto"))
          : ""}

        <div
          className="data-for-buying-toys"
          onClick={(e) => {
            console.log(e);
            console.log(document.querySelector(".order-toy").offsetWidth);
          }}
        >
          <div className="order-title">Ваш заказ:</div>

          {!this.state.successfulSendingOfData ? (
            <div>
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
                    colorsToy={el.colorsToy}
                  />
                ))}
              </div>

              <div className="order-price">
                {"Сумма: "}
                {this.state.shoppingCartDatabase.length !== 1
                  ? this.state.shoppingCartDatabase.reduce(
                      (p, c) => p + +c.price,
                      0
                    )
                  : this.state.shoppingCartDatabase.reduce(
                      (p, c) => +c.price * this.state.sumAllPriceToys,
                      0
                    )}
                грн.
              </div>

              <div className="order-form">
                <div className="firstName">
                  Имя <span>*</span>
                  <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(e) =>
                      this.setState({ firstName: e.target.value })
                    }
                  />
                </div>
                <div className="lastName">
                  Фамилия <span>*</span>
                  <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(e) =>
                      this.setState({ lastName: e.target.value })
                    }
                  />
                </div>
                <div className="telephone">
                  Телефон <span>*</span>
                  <input
                    type="tel"
                    value={this.state.telephone}
                    onChange={(e) =>
                      this.setState({ telephone: e.target.value })
                    }
                    onKeyPress={(evt) => {
                      var theEvent = evt || window.event;
                      var key = theEvent.keyCode || theEvent.which;
                      key = String.fromCharCode(key);
                      var regex = /^(\d)$/g;

                      if (!regex.test(key)) {
                        theEvent.returnValue = false;
                        if (theEvent.preventDefault) theEvent.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="delivery">
                  Доставка <span>*</span> <br />
                  <input
                    type="radio"
                    name="delivery"
                    id="radio1"
                    value="pickup"
                    className="custom-radio"
                    onChange={(e) =>
                      this.setState({ delivery: e.target.value })
                    }
                  />
                  <label htmlFor="radio1">Самовывоз</label>
                  <br />
                  <input
                    type="radio"
                    name="delivery"
                    id="radio2"
                    value="newMail"
                    className="custom-radio"
                    onChange={(e) =>
                      this.setState({ delivery: e.target.value })
                    }
                  />
                  <label htmlFor="radio2">Новой почтой</label>
                </div>

                {this.state.delivery === "newMail" ? (
                  <div>
                    <div className="city">
                      Город <span>*</span>
                      <input
                        type="text"
                        value={this.state.city}
                        onChange={(e) =>
                          this.setState({ city: e.target.value })
                        }
                      />
                    </div>
                    <div className="newMail">
                      Отделение новой почты <span>*</span>
                      <input
                        type="text"
                        value={this.state.newMail}
                        onChange={(e) =>
                          this.setState({ newMail: e.target.value })
                        }
                      />
                    </div>
                  </div>
                ) : null}
                <button
                  className="btn-form"
                  onClick={() => {
                    setTimeout(() => {
                      this.sendingDataToMail(this.state.shoppingCartDatabase);
                    }, 0);
                  }}
                  disabled={
                    this.state.delivery === "newMail"
                      ? !this.state.firstName ||
                        !this.state.lastName ||
                        !this.state.telephone ||
                        !this.state.city ||
                        !this.state.newMail
                      : !this.state.firstName ||
                        !this.state.lastName ||
                        !this.state.telephone ||
                        !this.state.delivery
                  }
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          ) : null}

          {this.state.successfulSendingOfData ? (
            <div className="successful-sending-of-data">
              Спасибо! Данные успешно отправлены. В ближайшее время с Вами
              свяжутся!
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export { OrderToy, shoppingCart, sumAllPriceToys };
