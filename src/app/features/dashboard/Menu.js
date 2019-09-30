import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import ShowMenu from '../../../app/features/nav/ShowMenu.js';
// import App from "../../../app/layout/App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";


class Menu extends React.Component {
  render() {
    return (

<Router>
    <div className="row">
      <div className="col-xs-6 col-md-6">
        <ul className="nav nav-tabs">
        <li role="presentation"><a href={'/food'}>Food</a></li>
        <li role="presentation" className="active"><a href={'/drinks'}>Drinks</a></li>
          
        </ul>
      </div>
      <div className="col-xs-6 col-md-6">
        
      </div>     
    </div>

      <Switch>
        <Route exact path='/menu' component={Drinks} />
        <Route path='/kitchen' component={Food} />
      </Switch>

    </Router>


    );
  }
}

export default Menu;

// function Menu() {
//   return (

//               <div className="container">
//          <div className="row">
//  <NavBarMenu

//            input className="col-4" type="text" name="waiter" placeholder="Waiter" />

//               <div className="col-4">
//      <div className="container2">
//               <ResumeBill/>

//            </div>
//         </div>
//       </div>
//     </div>
//   );
// }
