import React from "react";
// import "./App.css";
import { Menu } from "../../../data/menu.json";
import "bootstrap/dist/css/bootstrap.css";

// import Img from "../../img";
class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      value: " ",
      watch: false,
      watchfood: false,
      watchliquids: false,
      data: props.data
    };
  }
  render() {
    return (
      <div className="col-md-8">
        <div>
          <div>
            <h6>Breakfast</h6>
            <div className="line"></div>
            <div className="drinks-button">
              {Menu.Coffee.map(btn => (
                <button
                  onClick={() => this.props.add(btn.value, btn.name)}
                  className="main-button"
                >
                  <img src={btn.img} alt="icon-coffee"></img>
                  <div>
                    <p>{btn.name}</p>
                  </div>
                  <div>
                    <p>${btn.value}</p>
                  </div>
                </button>
              ))}
              {Menu.Juice.map(btn => (
                <button
                  onClick={() => this.props.add(btn.value, btn.name)}
                  className="main-button"
                >
                  <img src={btn.img} alt="icon-juice"></img>
                  <div>
                    <p>{btn.name}</p>
                  </div>
                  <div>
                    <p>${btn.value}</p>
                  </div>
                </button>
              ))}
            </div>
            <h6>Main</h6>
            <div className="line"></div>
            <div className="drinks-button">
              {Menu.Water.map(btn => (
                <button
                  onClick={() => this.props.add(btn.value, btn.name)}
                  className="main-button"
                >
                  <img src={btn.img} alt="icon-water"></img>
                  <div>
                    <p>{btn.name}</p>
                  </div>
                  <div>
                    <p>${btn.value}</p>
                  </div>
                </button>
              ))}
              {Menu.Soda.map(btn => (
                <button className="main-button">
                  <img src={btn.img} alt="icon-soda"></img>
                  <div>
                    <p>{btn.name}</p>
                  </div>
                  <div>
                    <p>${btn.value}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Drinks;
