import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import drinksIcon from "../../../img/menu_drink_icon.svg";
import foodIcon from "../../../img/menu_food_icon.svg";
import firebase from "../../../data/firebase";
import OrderMenu from "../../../app/features/events/OrderMenu.js"
/*import { createStore } from 'redux';*/



class Menu extends React.Component {
  displayName: 'Tabs';

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: '',
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onCleanArray = () => {
    this.setState({ list: [] });
  };


  onResetArray = () => {
    this.setState({ list: [1,2,3
      ] });
  };

  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, state.value];
      return {
        list,
        value: '',
      };
    });
  };


  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list,
      };
    });
  };

  render() {


    return (

      <div className="row">

      <div className="col-md-6 col-md-offset-6">
      <Tabs>
      <TabList>
      <Tab><img src={require('../../../../src/img/menu_food_icon.svg')} height="50" width="50" /><br/>Food</Tab>
      <Tab><img src={require('../../../../src/img/natural_juice.svg')} height="50" width="50" /><br/>Drinks</Tab>

      </TabList>

      <TabPanel>
      <Food/>
      </TabPanel>
      <TabPanel>
      <Drinks />
      </TabPanel>
      </Tabs>
      </div>
      <div className="col-xs-6 col-md-6">
 
      <label>Waiter: </label> <input type="textbox" />
      <hr/>
      <label>Client: </label> <input type="textbox" />
      <hr/>
      <br/>
      <h4>Order</h4>

        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value}
        >
          Add
        </button>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={item}>
              The person is {item} years old.
              <button
                type="button"
                onClick={() => this.onRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={this.onCleanArray}>
          Clear Array
        </button>

        <button type="button" onClick={this.onResetArray}>
          Reset Array
        </button>
      <hr/>
      <div class=""/>
      
  </div>
      </div>
    
      );


  }

}



export default Menu;





