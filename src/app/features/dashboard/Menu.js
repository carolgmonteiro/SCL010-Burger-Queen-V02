import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import NavBarGeneral from "./features/nav/NavBarGeneral";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drinks from "../menu/Drinks";
import Breakfast from "../menu/Breakfast";
import Main from "../menu/Main";
import ResumeBill from "../events/ResumeBill";

function Menus({ match }) {
  return (
    <Router>
      <div>
        <ResumeBill />
      </div>
      <div>
        <ul className="navbar navbar-dark bg-dark">
          <a>
            <Link to={`${match.url}/drinks`}>Drinks</Link>
          </a>
          <a>
            <Link to={`${match.url}/breakfast`}>Breakfast</Link>
          </a>
          <a>
            <Link to={`${match.url}/main`}>Main</Link>
          </a>
        </ul>
      </div>
      <div>
        <Route exact path={match.path} render={() => <Drinks />} />
      </div>

      <Route exact path={match.path} render={() => <Breakfast />} />
      <Route exact path={match.path} render={() => <Main />} />
      <Route path={`${match.path}/:id`} component={Options} />
    </Router>
  );
}

function Options({ match }) {
  return (
    <div>
      <h3>
        {match.params.id.charAt(0).toUpperCase() +
          match.params.id.slice(1).replace("-", " ")}
      </h3>
    </div>
  );
}

export default Menus;

// function Drinks() {
//   const getContent = () => {
//     return (
//       <div className="col-md-2">
//         <div className="card mt-4">
//           <div className="card-body">
//             <h5>opcion 01</h5>
//             <h5>opcion 01</h5>
//             <h5>opcion 01</h5>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   let content = getContent();

//   return <span> {content} </span>;
// }
