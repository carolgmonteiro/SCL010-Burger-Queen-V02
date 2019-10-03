import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderMenu from "../../../app/features/events/OrderMenu.js";
import { Col } from "reactstrap";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: {},
      total: 0
    };
  }

  onAddItem = (name, valor) => {
    this.setState(state => {
      const list = [...state.list, { name: name, value: valor }];
      return {
        list,
        value: {}
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

  onCleanArray = () => {
    this.setState({ list: [] });
    alert("Your order has been sent to the Kitchen")
  };
  
  onResetArray = () => {
    this.setState({ list: [1, 2, 3] });
  };

  render() {
    return (
      <div className="menu-row-container">
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
              estado={this.state.list}
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
