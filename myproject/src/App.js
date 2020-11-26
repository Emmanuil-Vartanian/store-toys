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
    this.state = { order: false, closeBasketToys: false };
  }

  order = (order) => {
    this.setState({ order: order });
  };

  closeBasketToys = (closeBasketToys) => {
    this.setState({ closeBasketToys: closeBasketToys });
  };

  render() {
    return (
      // <Provider store={store}>
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/" component={HomePage} />
          <Route exact path="/:id" component={Toy} /> */}
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                order={this.state.order}
                closeBasketToys={this.state.closeBasketToys}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={() => (
              <Toy order={this.order} closeBasketToys={this.closeBasketToys} />
            )}
          />
        </Switch>
      </Router>
      // </Provider>
    );
  }
}

export default App;
