import React, { Component } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./homePage.css";
import history from "../../history";

import SliderImages from "./sliderImages/SliderImages";
import Toys from "./toys/Toys";
import toyDatabase from "../../database/toys";
// import shoppingCartDatabase from "../../database/shoppingCart";
import { OrderToy, shoppingCart } from "./orderToy/OrderToy";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.order,
      numberBuyToy: 0,
      closeBasketToys: this.props.closeBasketToys,
    };
  }

  closePurchase = (order) => {
    this.setState({ order: order });
  };

  closeBasketToys = (closeBasketToys) => {
    this.setState({ closeBasketToys: closeBasketToys });
  };

  numberBuyToy = (number) => {
    this.setState({ numberBuyToy: number });
  };

  render() {
    return (
      <div className="home-page-toy">
        <SliderImages />
        <div className="catalog-toys">
          <div className="toysTitle">Игрушки</div>
          <div className="toys">
            {toyDatabase.map((el) => (
              // console.log(el),
              <div
                key={el.id}
                className="home-toy"
                onClick={() => {
                  // console.log(el.colors);
                  history.push(`/${el.id}`);
                  localStorage.setItem("id", el.id);
                  localStorage.setItem("title", el.title);
                  localStorage.setItem("price", el.price);
                  localStorage.setItem("description", el.description);
                  localStorage.setItem("descriptionForWidth320px", el.descriptionForWidth320px);
                  localStorage.setItem("image1", el.image1);
                  localStorage.setItem("image2", el.image2);
                  localStorage.setItem("image3", el.image3);
                  localStorage.setItem("colors", el.colors[0]);
                }}
              >
                <Toys title={el.title} price={el.price} image1={el.image1} />
              </div>
            ))}
          </div>
        </div>

        {this.state.closeBasketToys && !this.state.order ? (
          <div
            className="basket-toys"
            onClick={() => {
              this.setState({ order: true });
              document.body.style.overflow = "hidden";
            }}
          >
            <div>
              <ShoppingCartOutlined />
              <div className="number-toys">{shoppingCart.length}</div>
            </div>
          </div>
        ) : null}
        
        {this.state.order ? (
          <OrderToy
            closePurchase={this.closePurchase}
            numberBuyToy={this.numberBuyToy}
            closeBasketToys={this.closeBasketToys}
            colorsToy={this.props.colorsToy}
          />
        ) : null}
      </div>
    );
  }
}

export default HomePage;
