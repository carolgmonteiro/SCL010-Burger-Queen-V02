import React from "react";
// import "./App.css";
import { Menu } from "../../../data/menu.json";
import "bootstrap/dist/css/bootstrap.css";
// import Img from "../../img";
class Drinks extends React.Component {
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
            {Menu.Coffee.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                class="main-button"
              >
                {btn.name}
              </button>
            ))}
            {Menu.Juice.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                class="main-button"
              >
                {btn.name}
              </button>
            ))}

            <h6>Main</h6>
            {Menu.Water.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                class="main-button"
              >
                {btn.name}
                <img src={btn.img} alt="icon"></img>
              </button>
            ))}
            {Menu.Soda.map(btn => (
              <button class="main-button">{btn.name}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Drinks;