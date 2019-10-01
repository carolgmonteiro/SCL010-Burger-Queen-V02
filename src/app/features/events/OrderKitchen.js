import React from "react";

class OrderKitchen extends React.Component {
  render() {
    return this.props.data.map(e => (
      <div key={e.data.id}>
        <p>{e.data.createdAt}</p>
        <p>{"Client: " + e.data.client}</p>
        <p>{"Waiter: " + e.data.waiter}</p>
        <div className="template-order">
          <button className="btn-order-template" onClick={console.log("ready")}>
            Ready
          </button>
        </div>
      </div>
    ));
  }
}

export default OrderKitchen;

















/*class OrderKitchen extends Component {

  render() {
    return (
      <React.Fragment>
<div class="row">
  <div class="col-xs-6 col-md-6">.col-xs-6 .col-md-6</div>
  <div class="col-xs-6 col-md-6">.col-xs-6 .col-md-6</div>

</div>   
      </React.Fragment>
      )
  }
}


export default OrderKitchen;*/