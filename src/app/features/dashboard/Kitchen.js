import React from "react";
// import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
//import OrderKitchen from "../events/OrderKitchen";
import firebase from "../../../data/firebase";

class Kitchen extends React.Component {
  constructor(props) {
    super(props);
    console.log("kitchen");
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
        <h4>kitchen</h4>
        <button onClick={this.readOrder} className="btn btn-primary">
          Read
        </button>
      </div>
    );
  }
}

export default Kitchen;

// function Kitchen() {
//   return (
//     <div>
//       <h2>Kitchen</h2>
//       <OrderKitchen  />
//     </div>
//   );
// }
// console.log(Kitchen);
// export default Kitchen;

// componentDidMount() {
//   console.log("leer data");
//   const db = firebase.firestore();
//   db.settings({
//     timestampsInSnapshots: true
//   });
//   db.collection("orders")
//     .where("statusNotReady", "==", true)
//     .orderBy("createdAt", "asc")
//     .limit(6)
//     .onSnapshot(querySnapshot => {
//       this.setState({
//         data: querySnapshot.docs.map(doc => {
//           return { data: doc.data() };
//         })
//       });
//     });
// }