import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "../../../data/firebase";
import OrderResume from "../events/OrderResume";

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

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
        <div className="order-kitchen-container">
          <OrderResume></OrderResume>
        </div>
      </div>
    );
  }
}

export default Resume;