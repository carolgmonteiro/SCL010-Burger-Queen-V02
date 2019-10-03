import React from "react";
import firebase from "../../../data/firebase";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
// import OrderList from "../events/OrderList";
class OrderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      waiter: "",
      list: [],
      value: "",
      total: 0
    };
    this.addToList = this.addToList.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.readList = this.readList.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.readOrder = this.readOrder.bind(this);
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
    this.setState({ list: this.state.order.concat([{ name: optionToAdd }]) });
  }
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  onCleanArray = () => {
    this.setState({ list: [] });
  };
  onResetArray = () => {
    this.setState({ list: [1, 2, 3] });
  };
  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, state.value];
      return {
        list,
        value: ""
      };
    });
  };
  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list
      };
    });
  };

  readList = () => {
    console.log(this.props.list);
  };
  // readList = () => {
  //   console.log(this.props.estado);
  // };
  addOrder = e => {
    e.preventDefault();
    this.setState({
      id: "",
      waiter: "",
      client: "",
      statusNotReady: true,
      createdAt: "",
      list: this.props.estado
    });

    let idClient =
      moment(Date.now()).format("MMMM Do YYYY, h:mm a") + this.state.client;
    let data = {
      id: idClient,
      waiter: this.state.waiter,
      client: this.state.client,
      statusNotReady: true,
      createdAt: moment(Date.now()).format("MMMM Do YYYY, h:mm a"),
      list: this.props.estado
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
    this.props.enviar();
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

  render() {
    return (
      <div className="order-menu-container">
        <div className="col-xs-12 col-md-12">
          <form onSubmit={this.addOrder} className="form-group">
            <input
              className="inputFormulary"
              onChange={this.handleInput}
              type="text"
              name="client"
              placeholder="Client"
            />

            <input
              className="inputFormulary"
              onChange={this.handleInput}
              type="text"
              name="waiter"
              placeholder="Waiter"
            />
          </form>

          <h6>Order</h6>
          <div className="line"></div>
          <div className="orderList">
            <ul>
              {this.props.estado.map((item, index) => (
                <div key={item}>
                  <label className="box-value">
                    <div className="box-value">
                      <button
                        className="delete-icon"
                        type="button"
                        onClick={() => this.props.remover(index)}
                      >
                        <img
                          src={require("../../../../src/img/delete_button.svg")}
                          alt="icon"
                        />
                      </button>
                      <li>{item.name}</li>

                    </div>
                    <li>${item.value}</li>
                  </label>
                </div>
              ))}
            </ul>
          </div>
          <div className="box-value">
            <h6>Total $</h6>
            {/* <h6>{(this.props.total = item.name += item.value)}</h6> */}
          </div>
          <div className="line"></div>
          <br />

          <button onClick={this.addOrder} className="actionButtonSend">
            Send to the Kitchen
          </button>
          <button onClick={this.onCleanArray} className="actionButtonClear">
            Clear Order
          </button>
    
          
        </div>
      </div>
    );
  }
}

export default OrderMenu;

