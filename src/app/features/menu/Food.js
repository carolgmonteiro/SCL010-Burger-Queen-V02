import React from "react";
// import "./App.css";
import { Menu } from "../../../data/menu.json";
import "bootstrap/dist/css/bootstrap.css";

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Menu
    };
  }
  render() {
    return (
      <div className="col-md-8">
        <div>
          <div>
            <h6>Breakfast</h6>
            {Menu.Sandwich.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button"
              >
                {btn.name}
              </button>
            ))}

            <h6>Main</h6>
            {Menu.Simple_Burger.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                class="main-button"
              >
                {btn.name}
              </button>
            ))}
            {Menu.Double_Burger.map(btn => (
              <button class="main-button">{btn.name}</button>
            ))}
          </div>
          <div className="item-btn-row">
            {Menu.Toppings.map(btn => (
              <button class="main-button">{btn.name}</button>
            ))}
          </div>
          <div className="item-btn-row">
            {Menu.Side_Diches.map(btn => (
              <button class="main-button">{btn.name}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Food;
