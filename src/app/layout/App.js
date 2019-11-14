import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Kitchen from "../features/dashboard/Kitchen";
import Resume from "../features/dashboard/Resume";
import Menu from "../features/dashboard/Menu";
import "../../app/layout/App.css";

import Home from "../features/dashboard/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
