import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./shared/Header";
import { Home } from "./components/Home";
import { Checkout } from "./components/Checkout";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
