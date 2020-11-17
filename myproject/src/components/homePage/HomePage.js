import React, { Component } from "react";

import "./homePage.css";
import history from "../../history";

import SliderImages from "./sliderImages/SliderImages";
import Toys from "./toys/Toys";
import toyDatabase from "../../toyDatabase/toyDatabase";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SliderImages />
        <div className="catalog-toys">
          <div className="toysTitle">Игрушки</div>
          <div className="toys">
            {toyDatabase.map((el) => (
              <div
                key={el.id}
                className="home-toy"
                onClick={() => {
                  history.push(`/${el.id}`);
                  localStorage.setItem("title", el.title);
                  localStorage.setItem("price", el.price);
                  localStorage.setItem("description", el.description);
                  localStorage.setItem("image1", el.image1);
                  localStorage.setItem("image2", el.image2);
                  localStorage.setItem("image3", el.image3);
                }}
              >
                <Toys title={el.title} price={el.price} image1={el.image1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
