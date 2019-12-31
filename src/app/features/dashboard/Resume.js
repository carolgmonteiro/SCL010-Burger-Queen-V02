import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "../../../data/firebase";
import OrderResume from "../events/OrderResume";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Resume extends React.Component {
  componentDidMount() {
    console.log("leer orden");
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("order")
      .where("statusNotReady", "==", true)
      .get()
      .then(snapshot => {
        console.log(snapshot.docs);
        snapshot.docs.forEach(order => {
          console.log(order.data());
        });
      });
  }

  render() {
    return (
      <div className="lead">
        <Row>
          <Col className="logo-menu">
            <Row>
              <Link to={"/"}>
                <img
                  src={require("../../../img/LOGO BURGER QUEEN-04.svg")}
                  alt="logo"
                />
              </Link>
              <img
                className="menu-icon-template"
                src={require("../../../img/icon-resume-yellow.svg")}
                alt="logo"
              />
            </Row>
          </Col>
        </Row>
        <div className="order-kitchen-container">
          <OrderResume></OrderResume>
        </div>
      </div>
    );
  }
}

export default Resume;
