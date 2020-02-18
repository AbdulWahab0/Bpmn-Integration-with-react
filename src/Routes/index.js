import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";

// Screens
import Home from "../screens/Home";
import Modeler from "../screens/Modeler";
import Framework from "../screens/Framework";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/modeler" component={Modeler} />
          <Route exact path="/framework" component={Framework} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
