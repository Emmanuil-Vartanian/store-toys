import React, { Component } from "react";

class InformationAboutToy extends Component {
  constructor(props) {
    super(props);
    this.state = { numberToy: 1 };
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
        <div
          className="delete-toy"
          onClick={() => {
            const index = this.props.shoppingCartDatabase.findIndex(
              (n) => n.id === this.props.id
            );
            if (index !== -1) {
              this.props.shoppingCartDatabase.splice(index, 1);
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

export default InformationAboutToy