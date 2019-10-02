import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import App from "../../../app/layout/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import firebase from "../../../data/firebase";
import OrderMenu from "../../../app/features/events/OrderMenu.js";

class Menu extends React.Component {
  displayName: "Tabs";
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAdd(name, value) {
    this.setState({
      name: name,
      value: value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-6">
          <Tabs className="ShowMenu">
            <TabList>
              <Tab>
                <img
                  src={require("../../../../src/img/icon-menu-drinks.svg")}
                  height="80"
                  width="80"
                />
              </Tab>
              <Tab>
                <img
                  src={require("../../../../src/img/icon-menu-food.svg")}
                  height="80"
                  width="80"
                />
              </Tab>
            </TabList>
            <TabPanel>
              <Drinks />
            </TabPanel>
            <TabPanel>
              <Food clickToAdd={this.onClickAdd.bind(this)} />
            </TabPanel>
          </Tabs>
        </div>
        <div className="col-xs-6 col-md-6">
          <OrderMenu />
        </div>
      </div>
    );
  }
}

export default Menu;

/* <label>Waiter: </label> <input type="textbox" />
<hr />
<label>Client: </label> <input type="textbox" />
<hr />
<br />
<h3>Order </h3>
<hr />
<p>{this.state.name}</p>
<p>{this.state.value}</p> */
