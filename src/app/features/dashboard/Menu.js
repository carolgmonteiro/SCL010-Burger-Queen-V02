import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import ShowMenu from '../../../app/features/nav/ShowMenu.js';
// import App from "../../../app/layout/App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import drinksIcon from "../../../img/menu_drink_icon.svg";
import foodIcon from "../../../img/menu_food_icon.svg";
import firebase from "../../../data/firebase";



class Menu extends React.Component {
  displayName: 'Tabs';
  constructor(props){
    super(props);
    this.state = {
           

        };
  }
  onClickAdd(name, value){
    this.setState({
      name: name,
      value: value
    });
  }

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
      <Food clickToAdd={this.onClickAdd.bind(this)}/>
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
      <h3>Order </h3>
      <hr/>
        <p>{this.state.name}</p><p>{this.state.value}</p>
      </div>
      </div>
   
      );
  }

}




export default Menu;





