import React from "react";
import { Col } from "reactstrap";
import { Menu } from "../../../data/menu.json";
import "bootstrap/dist/css/bootstrap.css";

class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: {}
    };
    // this.resetArray = this.props.resetArray();
  }

  render() {
    return (
      <Col>
        <h6>Breakfast</h6>
        <div className="line"></div>
        <div className="drinks-button">
          <div className="item-btn-row">
            {Menu.Coffee.map(btn => (
              <button
                onClick={() => this.props.agregar(btn.name, btn.value)}
                className="main-button"
              >
                <img src={btn.img} alt="icon-coffee"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
            {Menu.Juice.map(btn => (
              <button
                onClick={() => this.props.agregar(btn.name, btn.value)}
                className="main-button"
              >
                <img src={btn.img} alt="icon-juice"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <h6>Main</h6>
        <div className="line"></div>
        <div className="drinks-button">
          <div className="item-btn-row">
            {Menu.Water.map(btn => (
              <button
                onClick={() => this.props.agregar(btn.name, btn.value)}
                className="main-button"
              >
                <img src={btn.img} alt="icon-water"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
            {Menu.Soda.map(btn => (
              <button
                onClick={() => this.props.agregar(btn.name, btn.value)}
                className="main-button"
              >
                <img src={btn.img} alt="icon-soda"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Col>
    );
  }
}
export default Drinks;
