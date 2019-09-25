import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ResumeBill extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value});
  }

  handleClick = (e) => {
    console.log('Button was clicked');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted');
  };

//el handleClick y el handleSubmit se llama enlazar eventos conectando la accion del usuario c on los componentes del React
//se ve la accion que esta realizando el usuario tan pronto escribe

  render() {
    return (


       
      <div className="lead">
       <div className="form-group">
        <form onSubmit={this.handleSubmit}

        className="form-group">

          <input onChange={this.handleChange} type="text" name="client" placeholder="Client" />
        </form>

      <ul className="navbar navbar-dark bg-dark">

       <a href="/pedidos">
            <Link to="/resume" className="text-white">
           Resume
            </Link>
          </a>
          </ul>

      

        <button onClick={this.handleClick} className="btn btn-primary">Send</button>

 
 </div>
  </div>
    );
  }
}

export default ResumeBill;
