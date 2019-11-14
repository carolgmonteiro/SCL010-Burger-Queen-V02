import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Kitchen from "../dashboard/Kitchen";
import Resume from "../dashboard/Resume";
import Menu from "../dashboard/Menu";
import "../../../app/layout/App.css";
import { Row } from "reactstrap";
import { Col } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Col>
        <Col className="logo-home">
          <img
            src={require("../../../img/LOGO BURGER QUEEN-04.svg")}
            alt="logo"
          />
        </Col>
        <Router>
          <Row>
            <div className="nav-link">
              <Col>
                <Link to={"/menu"}>
                  <div className="menu-icons">
                    <img
                      src={require("../../../img/icon-menu-yellow.svg")}
                      alt="logo"
                    />
                  </div>
                </Link>
              </Col>
              <Col>
                <Link to={"/kitchen"}>
                  <div className="menu-icons">
                    <img
                      src={require("../../../img/icon-kitchen-yellow.svg")}
                      alt="logo"
                    />
                  </div>
                </Link>
              </Col>
              <Col>
                <Link to={"/resume"}>
                  <div className="menu-icons">
                    <img
                      src={require("../../../img/icon-resume-yellow.svg")}
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
      </Col>
    );
  }
}

export default Home;
