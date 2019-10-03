import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import OrderKitchen from "../events/OrderKitchen";
import firebase from "../../../data/firebase";

class Kitchen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
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
          this.setState({ orders: this.state.orders.concat([order.data()]) });
          console.log(order.data());
        });
      });
  }

  render() {
    return (
      <div className="lead">
        <div className="order-kitchen-container">
          {this.state.orders.map((item, index) => (
            <OrderKitchen order={item}></OrderKitchen>
          ))}
        </div>
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
