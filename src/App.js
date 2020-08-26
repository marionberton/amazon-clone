import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout" />
          <Route path='/login' />
          <Route path='/'/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /*localhost.com/ */
}
{
  /*localhost.com/checkout */
}
{
  /*localhost.com/login */
}
