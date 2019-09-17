import React from "react";

class ResumeBill extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark ">
        <form className="form-group">
          <input type="text" name="waiter" placeholder="Waiter" />
          <input type="text" name="client" placeholder="Client" />
        </form>
      </nav>
    );
  }
}

export default ResumeBill;
