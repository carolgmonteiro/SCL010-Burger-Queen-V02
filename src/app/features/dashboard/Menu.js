import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderMenu from "../../../app/features/events/OrderMenu.js";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      waiter: "",
      statusNotReady: "true",
      order: [],
      value: "",
      total: 0
    };
  }

  onAddItem = (name, valor) => {
    this.setState(state => {
      const order = [...state.order, { name: name, value: valor }];
      return {
        order,
        value: {}
      };
    });
  };

  onRemoveItem = i => {
    this.setState(state => {
      const order = state.list.filter((item, j) => i !== j);
      return {
        order
      };
    });
  };

  onCleanArray = () => {
    this.setState({ order: [] });
    alert("Your order has been sent to the Kitchen");
  };

  onResetArray = () => {
    this.setState({ order: [1, 2, 3] });
  };

  render() {
    return (
      <div className="menu-row-container">
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
                src={require("../../../img/icon-menu-yellow.svg")}
                alt="logo"
              />
            </Row>
          </Col>
        </Row>
        <div className="row">
          <div className="col-md-6 col-md-offset-6">
            <Tabs className="ShowMenu">
              <TabList className="react-tabs__tab-list">
                <Tab className="react-tabs__tab">
                  <img
                    src={require("../../../../src/img/icon-menu-drinks.svg")}
                    height="80"
                    width="80"
                    alt="icon"
                  />
                </Tab>
                <Tab className="react-tabs__tab">
                  <img
                    src={require("../../../../src/img/icon-menu-food.svg")}
                    height="80"
                    width="80"
                    alt="icon"
                  />
                </Tab>
              </TabList>
              <TabPanel>
                <Drinks agregar={this.onAddItem.bind(this)} />
              </TabPanel>
              <TabPanel>
                <Food agregar={this.onAddItem.bind(this)} />
              </TabPanel>
            </Tabs>
          </div>
          <Col className="Order-container">
            <OrderMenu
              estado={this.state.order}
              remover={this.onRemoveItem.bind(this)}
              enviar={this.onCleanArray.bind(this)}
            />
          </Col>
        </div>
      </div>
    );
  }
}

export default Menu;
