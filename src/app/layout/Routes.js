// import React, { PureComponent } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "../features/dashboard/Home";
// import Kitchen from "../features/dashboard/Kitchen";
// import Resume from "../features/dashboard/Resume";
// import Menu from "../features/dashboard/Menu";

class Routes extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
