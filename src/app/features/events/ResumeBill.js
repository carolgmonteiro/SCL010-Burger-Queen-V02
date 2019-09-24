import React from "react";

class ResumeBill extends React.Component {
  render() {
    return (
      <div className="lead">
        <form className="form-group">
          <input type="text" name="client" placeholder="Client" />
        </form>
        <div className="form-group">Pedidos</div>
      </div>
    );
  }
}

export default ResumeBill;
