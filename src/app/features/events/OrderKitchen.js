import React from "react";

class OrderKitchen extends React.Component {
  render() {
    return this.props.data.map(e => (
      <div key={e.data.id}>
        <p>{e.data.createdAt}</p>
        <p>{"Client: " + e.data.client}</p>
        <p>{"Waiter: " + e.data.waiter}</p>
        <div className="template-order">
          <button className="btn-order-template" onClick={console.log("ready")}>
            Ready
          </button>
        </div>
      </div>
    ));
  }
}

export default OrderKitchen;

// class OrderKitchen extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("kitchen");
//   }

//   componentDidMount() {
//     console.log("leer data");
//     const db = firebase.firestore();
//     db.settings({
//       timestampsInSnapshots: true
//     });
//     db.collection("orders")
//       .where("statusNotReady", "==", true)
//       .orderBy("createdAt", "asc")
//       .limit(6)
//       .onSnapshot(querySnapshot => {
//         this.setState({
//           data: querySnapshot.docs.map(doc => {
//             return { data: doc.data() };
//           })
//         });
//       });
//   }
//   render() {
//     return this.props.data.map(e => (
//       <div>
//         <h4>ORDERS</h4>
//       </div>
//     ));
//   }
// }
