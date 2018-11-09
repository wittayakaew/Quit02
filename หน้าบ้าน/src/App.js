import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import HomePage from "./component/HomePage";
import Register from "./component/Register";
class App extends Component {
  render() {
    return (
      <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={Home} />
</Switch>
    );
  }
}

export default App;
