import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";

// import { store } from "./store/store";

import HomePage from "./components/homePage/HomePage";
import Toy from "./components/toy/Toy";
import history from "./history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { order: false, closeBasketToys: false, colorsToy: "" };
  }

  order = (order) => {
    this.setState({ order: order });
  };

  closeBasketToys = (closeBasketToys) => {
    this.setState({ closeBasketToys: closeBasketToys });
  };

  colorsToy = (colorsToy) => {
    this.setState({ colorsToy: colorsToy });
  };

  render() {
    return (
      // <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                order={this.state.order}
                closeBasketToys={this.state.closeBasketToys}
                colorsToy={this.state.colorsToy}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={() => (
              <Toy
                order={this.order}
                closeBasketToys={this.closeBasketToys}
                colorsToy={this.colorsToy}
              />
            )}
          />
        </Switch>
      </Router>
      // </Provider>
    );
  }
}

export default App;
