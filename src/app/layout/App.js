import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Kitchen from "../features/dashboard/Kitchen";
import Resume from "../features/dashboard/Resume";
import Menu from "../features/dashboard/Menu";


// import OrderMenu from '../../app/features/events/OrderMenu.js'
// import OrderKitchen from '../../app/features/events/OrderKitchen.js'
// import NavbarGeneral from '../../app/features/nav/NavbarGeneral.js'
// import NotFound from "../../NotFound.js";
class App extends Component {
  render() {
    return (
    <Router>
    <div className="row">
      <div className="col-xs-2 col-md-2">
        <img src={require('../../../src/img/LOGO_BURGER_QUEEN-02.png')} alt="logo"/>
      </div>

      
      <div className="col-xs-4 col-md-4"></div>      
      <div className="col-xs-2 col-md-2">
        <Link to={'/menu'} className="nav-link"> Menu </Link>

      </div>
      <div className="col-xs-2 col-md-2">
        <Link to={'/kitchen'} className="nav-link">Kitchen</Link>

      </div>
      <div className="col-xs-2 col-md-2">
        <Link to={'/resume'} className="nav-link">Resume</Link>
      </div>     
    </div>
  

      <Switch>
        <Route exact path='/menu' component={Menu} />
        <Route path='/kitchen' component={Kitchen} />
        <Route path='/resume' component={Resume} />
      </Switch>

    </Router>
    );
  }
}




export default App;
