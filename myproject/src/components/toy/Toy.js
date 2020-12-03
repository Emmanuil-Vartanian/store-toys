import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import history from "../../history";
import toyDatabase from "../../database/toys";
// import shoppingCartDatabase from "../../database/shoppingCart";
import { shoppingCart } from "../homePage/orderToy/OrderToy";

import "./toy.css";

// import OrderToy from "./orderToy/OrderToy";

class Toy extends Component {
  constructor(props) {
    super(props);
    this.state = { order: false, colorsToy: localStorage.getItem("colors") };
  }

  closePurchase = (order) => {
    this.setState({ order: order });
  };

  componentDidMount() {
    if (localStorage.getItem("video")) {
      var i = 1;
      var int = setInterval(() => {
        window.scrollTo(0, i);
        i += 10;
        if (i >= 2000) clearInterval(int);
      }, 10);

      const trackScroll = () => {
        var scrolled = window.pageYOffset;
        if (scrolled > 550) goTopBtn.classList.add("back_to_top-show");
        if (scrolled < 550) goTopBtn.classList.remove("back_to_top-show");
      }

      const backToTop = () => {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -50);
          setTimeout(backToTop, 30);
        }
      }

      var goTopBtn = document.querySelector(".back_to_top");

      window.addEventListener("scroll", trackScroll);
      goTopBtn.addEventListener("click", backToTop);
    }
  }

  render() {
    return (
      <div className="toy">
        <div
          className="more-products"
          onClick={() => {
            history.push("/");
            this.props.order(false);
          }}
        >{`<-- Больше товаров`}</div>
        <div
          className="back-products"
          onClick={() => {
            history.push("/");
            this.props.order(false);
          }}
        >
          <div className="left-stick"></div>
          <div className="right-stick"></div>
        </div>

        {toyDatabase.map((e) =>
          +localStorage.getItem("id") === e.id ? (
            <div className="slider-description-toy">
              <Carousel className="slider">
                {e.images.length
                  ? e.images.map((e) => (
                      <Carousel.Item interval={9999999} key={e}>
                        <img
                          className="d-block toy-images img-fluid"
                          src={`/images/${e}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))
                  : null}
              </Carousel>

              <div className="description-toy">
                <div className="title-toy">{localStorage.getItem("title")}</div>
                <div className="price-toy">
                  {localStorage.getItem("price")} грн.
                </div>
                {e.colors.length ? (
                  <div key={e.id} className="choose-color">
                    Цвет
                    <select
                      className="colors js-example-basic-single"
                      onChange={(el) => {
                        this.setState({ colorsToy: el.target.value });
                      }}
                    >
                      {e.colors.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}

                <div
                  className="buy-toy"
                  onClick={() => {
                    this.props.order(true);
                    this.props.closeBasketToys(true);
                    this.setState({ order: true });
                    history.push("/");
                    document.body.style.overflow = "hidden";

                    shoppingCart.push({
                      id: localStorage.getItem("id"),
                      image: localStorage.getItem("images"),
                      title: localStorage.getItem("title"),
                      price: +localStorage.getItem("price"),
                      quantityOfGoods: 1,
                      colorsToy:
                        this.state.colorsToy !== "undefined"
                          ? this.state.colorsToy
                          : "",
                    });
                  }}
                >
                  Купить
                </div>
                <pre className="description">
                  {localStorage.getItem("description")}
                </pre>
                <pre className="descriptionForWidth320px">
                  {localStorage.getItem("descriptionForWidth320px")}
                </pre>
              </div>
            </div>
          ) : null
        )}

        {toyDatabase.map((e) =>
          +localStorage.getItem("id") === e.id ? (
            e.video.length ? (
              <div className="video-toy">
                <video autoplay="autoplay" controls="controls">
                  <source
                    src={`/video/${e.video}`}
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                  />
                </video>
              </div>
            ) : null
          ) : null
        )}

        <div class="back_to_top" style={{backgroundImage: "url(/images/up-arrow.png)"}}></div>
      </div>
    );
  }
}

export default Toy;
