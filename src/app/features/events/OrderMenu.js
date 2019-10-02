import React from "react";
import firebase from "../../../data/firebase";
import moment from "moment";
import OrderList from "../events/OrderList";

class OrderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waiter: "",
      client: "",
      order: []
    };
    this.addOrder = this.addOrder.bind(this);
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };

  addToList(optionToAdd, valueToAdd) {
    // let newOrder = [...this.state.order];
    // for (let i = 0; i < newOrder.length; i++) {
    //   if (newOrder[i].name === optionToAdd) {
    //     newOrder[i].count++;
    //   }
    // }
    console.log("hola");
    this.setState({ order: this.state.order.concat([{ name: optionToAdd }]) });
  }

  addOrder = e => {
    e.preventDefault();
    this.setState({
      id: "",
      waiter: "",
      client: "",
      statusNotReady: true,
      createdAt: "",
      order: []
    });

    let idClient =
      moment(Date.now()).format("MMMM Do YYYY, h:mm a") + this.state.client;
    let data = {
      id: idClient,
      waiter: this.state.waiter,
      client: this.state.client,
      statusNotReady: true,
      createdAt: moment(Date.now()).format("MMMM Do YYYY, h:mm a"),
      order: []
    };
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("order")
      .doc(idClient)
      .set(data)
      .then(() => {
        this.readOrder();
      });

    console.log("Form was submitted");
  };

  readOrder = e => {
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
  };

  // clearOrder() {
  //   this.state({
  //     waiter: "",
  //     client: ""
  //   });
  // }

  render() {
    // this.props.data.map(e => (
    //   <div key={e.data.id}>
    //     <p>{e.data.createdAt}</p>
    //     <p>{"Client: " + e.data.client}</p>
    //     <p>{"Waiter: " + e.data.waiter}</p>
    //     <div className="template-order">
    //       <button className="btn-order-template" onClick={console.log("ready")}>
    //         Ready
    //       </button>
    //     </div>
    //   </div>
    // ));

    return (
      <div className="order-menu-container">
        <div className="col-xs-12 col-md-12">
          <form onSubmit={this.addOrder} className="form-group">
            <input
              className="inputFormulary"
              onChange={this.handleInput}
              type="text"
              name="waiter"
              placeholder="Waiter"
              value={this.state.waiter}
            />

            <input
              className="inputFormulary"
              onChange={this.handleInput}
              type="text"
              name="client"
              placeholder="Client"
              value={this.state.client}
            />
          </form>

          <h6>Order</h6>
          <div className="line"></div>
          <div className="orderList">
            <OrderList></OrderList>
          </div>
          <div className="box-value">
            <h6>Total $</h6>
            <h6>0,00</h6>
          </div>
          <div className="line"></div>
          <br />

          <button onClick={this.addOrder} className="actionButtonSend">
            Send to the Kitchen
          </button>
          <button onClick={this.clearOrder} className="actionButtonClear">
            Clear Order
          </button>
          <button onClick={this.clearOrder} className="actionButtonClear">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default OrderMenu;
