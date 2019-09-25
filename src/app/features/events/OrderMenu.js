import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { db } from "../../../data/firebase";
import firebase from "../../../data/firebase";

class OrderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waiter: "",
      client: ""
    };
  }

  // handleChange = e => {
  //   console.log({
  //     name: e.target.name,
  //     value: e.target.value
  //   });
  // };

  // handleClick = e => {
  //   console.log("Button was clicked");
  // };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };

  addOrder = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("order").add({
      waiter: this.state.waiter,
      client: this.state.client
    });
    this.setState({
      waiter: "",
      client: ""
    });
    console.log("Form was submitted");
  };
  //el handleClick y el handleSubmit se llama enlazar eventos conectando la accion del usuario c on los componentes del React
  //se ve la accion que esta realizando el usuario tan pronto escribe
  // saveOrder() {
  //   this.setState({
  //     loading: true
  //   });
  //   let idClient = this.state.client + Date.now();
  //   let data = {
  //     id: idClient,
  //     client: this.state.client,
  //     list: this.state.list,
  //     time: Date.now()
  //   };

  //   db.collection("orders")
  //     .doc(idClient)
  //     .set(data)
  //     .then(() => {
  //       this.setState({
  //         loading: false
  //       });
  //     });
  // }
  render() {
    return (
      <div className="lead">
        <div className="form-group">
          <form onSubmit={this.addOrder} className="form-group">
            <input
              onChange={this.handleInput}
              type="text"
              name="waiter"
              placeholder="Waiter"
              value={this.state.waiter}
            />
            <input
              onChange={this.handleInput}
              type="text"
              name="client"
              placeholder="Client"
              value={this.state.client}
            />
          </form>
          <ul>Order</ul>
          <button onClick={this.addOrder} className="btn btn-primary">
            Send
          </button>
          <div></div>
        </div>
      </div>
    );
  }
}

export default OrderMenu;
