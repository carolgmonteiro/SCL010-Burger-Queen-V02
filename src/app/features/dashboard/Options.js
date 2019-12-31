import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../layout/App.css";
import { Row } from "reactstrap";
import { Col } from "reactstrap";

class Options extends Component {
  render() {
    return (
      <div className="nav-link">
        <Col>
          <Link to={"/menu"}>
            <div className="menu-icons-home">
              <img
                src={require("../../../img/icon-menu-yellow.svg")}
                alt="logo"
              />
            </div>
          </Link>
        </Col>
        <Col>
          <Link to={"/kitchen"}>
            <div className="menu-icons-home">
              <img
                src={require("../../../img/icon-kitchen-yellow.svg")}
                alt="logo"
              />
            </div>
          </Link>
        </Col>
        <Col>
          <Link to={"/resume"}>
            <div className="menu-icons-home">
              <img
                src={require("../../../img/icon-resume-yellow.svg")}
                alt="logo"
              />
            </div>
          </Link>
        </Col>
      </div>
    );
  }
}

export default Options;
