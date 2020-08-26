import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./shared/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>homepage</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
