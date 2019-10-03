import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class OrderResume extends React.Component {
  render() {
    return (
      <div className="order-kitchen-card">
        <h6>Ada Lovelace</h6>
        <div className="line"></div>
        <p>Roberto</p>
        <label className="box-value">
          <p>02.10.2019</p>
          <p>at 15:30hrs</p>
        </label>
        <div className="line-thin"></div>

        <label className="box-value">
          <li>American Coffee</li>
          <li>$500</li>
        </label>
        <label className="box-value">
          <li>Soda 500ml</li>
          <li>$500</li>
        </label>
        <label className="box-value">
          <li>Simple Burger - Meat</li>
          <li>$1.500</li>
        </label>
        <label className="box-value">
          <li>Egg</li>
          <li>$500</li>
        </label>
        <label className="box-value">
          <li>Frensh fries</li>
          <li>$500</li>
        </label>
        <h5>Total $ 3.500</h5>
        <div className="line-thin"></div>
        <br />
        <label className="box-value">
          <p>Cooking Time</p>
          <p>15min</p>
        </label>
        <label className="box-value">
          <p>Delivering Time</p>
          <p>3min</p>
        </label>
        <label className="box-value">
          <h5>Total Time</h5>
          <h5>18min</h5>
        </label>
      </div>
    );
  }
}

export default OrderResume;