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
            <h6>Hot Drinks</h6>
            {Menu.Coffee.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button"> 
                 <img src={require('../../../../src/img/menu_drink_icon.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
            {Menu.Natural_Juice.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button">
               <img src={require('../../../../src/img/natural_juice.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}

            <h6>Cold Drinks</h6>
            {Menu.Water.map(btn => (
              <button
                onClick={() => this.props.add(btn.value, btn.name)}
                className="main-button">
                <img src={require('../../../../src/img/water_big.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
            {Menu.Soda.map(btn => (
              <button className="main-button">
               <img src={require('../../../../src/img/soda_big.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Drinks;
