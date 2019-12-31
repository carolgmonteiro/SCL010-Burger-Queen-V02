import React from "react";
import "../../../app/layout/App.css";
import Options from "../dashboard/Options";
import { Col, Row } from "reactstrap";

const Home = () => {
  return (
    <React.Fragment>
      <Row></Row>
      <Row>
        <Col></Col>

        <Col>
          <div className="logo-home">
            <img
              src={require("../../../img/LOGO BURGER QUEEN-04.svg")}
              alt="logo"
            />
          </div>

          <Row>
            <Options />
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
