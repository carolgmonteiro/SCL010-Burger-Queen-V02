import React from "react";
import { Menu } from "../../../data/menu.json";
import { Col } from "reactstrap";

class Food extends React.Component {
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
        <div>
          <div>
            <h6>Breakfast</h6>
            <div className="line"></div>
            {Menu.Sandwich.map(btn => (
              <button
                onClick={() => this.props.agregar(btn.name, btn.value)}
                className="main-button"
              >
                <img src={btn.img} alt="icon"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}

            <h6>Main</h6>
            <div className="line"></div>
            <div className="burger-button">
              {Menu.Simple_Burger.map(btn => (
                <button
                  onClick={() => this.props.agregar(btn.name, btn.value)}
                  className="main-button"
                >
                  <img src={btn.img} alt="icon"></img>
                  <div>
                    <p>{btn.name}</p>
                  </div>
                  <div>
                    <p className="item-price">${btn.value}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="burger-button">
              {Menu.Double_Burger.map((btn, i) => (
                <button
                  onClick={() => this.props.agregar(btn.name, btn.value)}
                  className="main-button"
                >
                  <img src={btn.img} alt="icon"></img>
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
          <div className="item-btn-row">
            <h6>Toppings</h6>
            <div className="line"></div>
            {Menu.Toppings.map(btn => (
              <button
                onClick={() => this.props.agregar(btn.name, btn.value)}
                className="main-button"
              >
                <img src={btn.img} alt="icon"></img>
                <div>
                  <p>{btn.name}</p>
                </div>
                <div>
                  <p className="item-price">${btn.value}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="item-btn-row">
            <h6>Side Dishes</h6>
            <div className="line"></div>
            {Menu.Side_Dishes.map(btn => (
              <button className="main-button">
                <img src={btn.img} alt="icon"></img>
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

// onClick={() => this.props.add(btn.value, btn.name)}
export default Food;
