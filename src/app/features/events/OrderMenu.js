import React from "react";
import firebase from "../../../data/firebase";
import moment from "moment";
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";
class OrderMenu extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      menu: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'],
    };
  }
  render() {
    const { menu } = this.state;
    return (
      <ul>
        {menu}
      </ul>
    );
  }
}

  

export default OrderMenu;