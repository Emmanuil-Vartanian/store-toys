import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

import HomePage from "./components/homePage/HomePage";
import Toy from "./components/toy/Toy";
import history from "./history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", title: "", price: "" };
  }

  databasesToy = ({ title, price, image, description }) => {
    this.setState({ description: description, title: title, price: price });
  };

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path="/" component={HomePage} />
          <Route exact path="/:id" component={Toy} /> */}
            <Route
              exact
              path="/"
              render={() => <HomePage databasesToy={this.databasesToy} />}
            />
            <Route
              exact
              path="/:id"
              render={() => (
                <Toy
                  description={this.state.description}
                  title={this.state.title}
                  price={this.state.price}
                />
              )}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
