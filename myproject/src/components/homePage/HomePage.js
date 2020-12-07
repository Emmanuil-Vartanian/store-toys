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

  componentDidMount() {
    this.state.order
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add("back_to_top-show");
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove("back_to_top-show");
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -100);
        setTimeout(backToTop, 30);
      }
    }

    var goTopBtn = document.querySelector(".back_to_top");

    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", backToTop);
  }

  render() {
    return (
      <div className="home-page-toy">
        <SliderImages />
        <div
          className="catalog-toys"
          style={{
            backgroundImage:
              "url(https://images.clipartlogo.com/files/istock/previews/8074/80740917-christmas-background-with-light-bulbs-garlands.jpg)",
          }}
        >
          <div className="toysTitle">
            Хватит читать <p>Время покупать игрушки))</p>
            <div>Шок контент 🙀</div>
          </div>
          <div className="toys">
            {toyDatabase.map((el) => (
              <div
                key={el.id}
                className="home-toy"
                onClick={() => {
                  history.push(`/${el.id}`);
                  localStorage.setItem("id", el.id);
                  localStorage.setItem("title", el.title);
                  localStorage.setItem("price", el.price);
                  localStorage.setItem("description", el.description);
                  localStorage.setItem(
                    "descriptionForWidth320px",
                    el.descriptionForWidth320px
                  );
                  localStorage.setItem("images", el.images[0]);
                  localStorage.setItem("colors", el.colors[0]);
                  localStorage.setItem("video", el.video);
                }}
              >
                <Toys title={el.title} price={el.price} images={el.images} />
              </div>
            ))}
          </div>
        </div>

        <div className="footer">
          <div className="about-delivery">
            <div>
              <p>О ДОСТАВКЕ</p>
              Мы находимся в Харькове. Вы можете самостоятельно забрать игрушку
              прямо из нашего офиса. Так же доступна доставка почтой, по всей
              Украине.
            </div>
          </div>

          <div className="contacts">
            <div>
              <p>КОНТАКТЫ</p>
              Мы Креативные продюсеры кайфа <br />
              Взамен на Ваши бабосики дарим Вам <br />
              чуточку любви и детского счастья)
              <br />
              Давайте кайфанем от этого всесте ❤️‍ <br />
              -0957473362(вайбер)
              <br /> -@davidosi(телеграмм)
              <br /> -0957473362(телеграмм)
              <br />
              Вот вам соц сети, для ваших изумительных вопросов и пожеланий.
            </div>
          </div>
        </div>

        {this.state.closeBasketToys &&
        !this.state.order &&
        shoppingCart.length ? (
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

        <div
          className="back_to_top"
          style={{ backgroundImage: "url(/images/up-arrow.png)" }}
        ></div>
      </div>
    );
  }
}

export default HomePage;
