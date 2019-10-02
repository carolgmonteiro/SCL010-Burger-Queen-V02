import React from "react";

class OrderList extends React.Component {
  render() {
    return (
      <div>
        <label className="box-value">
          <div className="box-value">
            <button className="delete-icon">
              <img
                src={require("../../../../src/img/delete_button.svg")}
                alt="icon"
              />
            </button>
            <li>American Coffee</li>
          </div>
          <li>$500</li>
        </label>
      </div>
    );
  }
}

// class OrderList extends React.Component {

// 	render() {
// 		return (
// 			<ul className="list-unstyled">
// 			{this.props.OrderKitchen.map((app) => {
// 				return (

// 					<li key ={app.id}>
// 					<p>{app.kitchen} {app.resume}</p>
// 					</li>
// 					);

// 			})}
// 			</ul>

// 			)
// 	}
// }

export default OrderList;
