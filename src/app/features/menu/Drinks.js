import React from "react";
// import "./App.css";
import  {Menu}  from "../../../data/menu.json";
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
            {Menu.Coffee.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button"
              >
                {btn.name}
              </button>
            ))}
            {Menu.Juice.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button"
              >
                {btn.name}
              </button>
            ))}

     
            {Menu.Water.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button"
              >
                {btn.name}
                <img src={btn.img} alt="icon"></img>
              </button>
            ))}
            {Menu.Soda.map(btn => (
              <button className="main-button">{btn.name}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Drinks;
