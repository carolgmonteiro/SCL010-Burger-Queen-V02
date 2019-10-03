import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Kitchen from "../features/dashboard/Kitchen";
import Resume from "../features/dashboard/Resume";
import Menu from "../features/dashboard/Menu";
import "../../app/layout/App.css";
import { Row } from "reactstrap";
import { Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <Row>
          <Col className="logo">
            <img
              src={require("../../../src/img/LOGO BURGER QUEEN-04.svg")}
              alt="logo"
            />
          </Col>
          <Col></Col>
          <Col></Col>
          <div className="nav-link">
            <Col>
              <Link to={"/menu"}>
                <div className="menu-icons">
                  <img
                    src={require("../../../src/img/icon-menu-yellow.svg")}
                    alt="logo"
                  />
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/kitchen"}>
                <div className="menu-icons">
                  <img
                    src={require("../../../src/img/icon-kitchen-yellow.svg")}
                    alt="logo"
                  />
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/resume"}>
                <div className="menu-icons">
                  <img
                    src={require("../../../src/img/icon-resume-yellow.svg")}
                    alt="logo"
                  />
                </div>
              </Link>
            </Col>
          </div>
        </Row>

        <Switch>
          <Route exact path="/menu" component={Menu} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    );
  }
}

export default App;
