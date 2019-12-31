import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../layout/App.css";
import { Row } from "reactstrap";
import { Col } from "reactstrap";

class NavBarGeneral extends Component {
  render() {
    return (
      <Row>
        <Col className="logo">
          <Link to={"/"}>
            <img
              src={require("../../../img/LOGO BURGER QUEEN-04.svg")}
              alt="logo"
            />{" "}
          </Link>
        </Col>

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
    );
  }
}

export default NavBarGeneral;
