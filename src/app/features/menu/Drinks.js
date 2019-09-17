import React from "react";
// import "./App.css";
import drinks from "../../../data/drinks.json";

class Drinks extends React.Component {
  constructor() {
    super();
    this.state = {
      drinks
    };
  }

  render() {
    return (
      <div className="col-md-2">
        <div className="card mt-4">
          <div className="card-body">
            <h5>drinks</h5>
            <h5>drinks</h5>
            <h5>drinks</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Drinks;
