import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import NavBarGeneral from "./features/nav/NavBarGeneral";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drinks from "../menu/Drinks";
import Food from "../menu/Food";

function NavBarMenu() {
  return (
    <Router>
      <div className="lead">
        <ul className="navbar navbar-dark bg-dark">
          <a href="/drinks">
            <Link to="/drinks" className="text-white">
              Drinks
            </Link>
          </a>

          <a href="/main">
            <Link to="/main" className="text-white">
              Food
            </Link>
          </a>
        </ul>

        <Route exact path="/drinks" component={Drinks} />
        <Route path="/main" component={Food} />
      </div>
    </Router>
  );
}

export default NavBarMenu;
