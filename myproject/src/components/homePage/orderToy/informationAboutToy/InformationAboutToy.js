import React, { Component } from "react";

class InformationAboutToy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberToy: 1,
      sumAllPriceToys: () => this.props.price * this.state.numberToy,
    };
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
          <div
            className="minus-toy"
            onClick={() => {
              this.minusAndPlus("minus");

              setTimeout(() => {
                return this.props.sumAllPriceToys(this.state.numberToy);
              }, 0);
            }}
          >
            <img src="/images/minus.png" />
          </div>
          <div className="number-toy">{this.state.numberToy}</div>
          <div
            className="plus-toy"
            onClick={() => {
              this.minusAndPlus("plus");

              setTimeout(() => {
                return this.props.sumAllPriceToys(this.state.numberToy);
              }, 0);
            }}
          >
            <img src="/images/plus.png" />
          </div>
        </div>
        <div className="toy-price">{this.state.sumAllPriceToys()} грн.</div>
        <div
          className="delete-toy"
          onClick={() => {
            const index = this.props.shoppingCart.findIndex(
              (n) => n.id === this.props.id
            );
            if (index !== -1) {
              this.props.shoppingCart.splice(index, 1);
            }
            this.props.handleDeleteElement(this.props.id);
          }}
        >
          <img src="/images/close.png" />
        </div>
      </div>
    );
  }
}

export default InformationAboutToy;
