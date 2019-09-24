import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import ResumeBill from "../events/ResumeBill";
import NavBarMenu from "../nav/NavBarMenu";

function Menu() {
  return (
    <div className="container">
      <div classname="row">
        <div className="col-6">
          <NavBarMenu></NavBarMenu>
        </div>
        <div className="col-6">
          <ResumeBill>Resume</ResumeBill>
        </div>
      </div>
    </div>
  );
}

export default Menu;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// // import NavBarGeneral from "./features/nav/NavBarGeneral";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Drinks from "../menu/Drinks";
// import Food from "../menu/Food";
// import ResumeBill from "../events/ResumeBill";

// function Menu() {
//   return (
//     <Router>
//       <div className="lead">
//         <form className="form-group">
//           <input type="text" name="waiter" placeholder="Waiter" />
//         </form>
//         <ul className="navbar navbar-dark bg-dark">
//           <a href="/drinks">
//             <Link to="/drinks" className="text-white">
//               Drinks
//             </Link>
//           </a>
//           <a href="/main">
//             <Link to="/main" className="text-white">
//               Food
//             </Link>
//           </a>
//         </ul>
//         <Route exact path="/drinks" component={Drinks} />
//         <Route path="/main" component={Food} />

//         <div className="App">
//           <div className="container">
//             <div className="row mt-4">
//               <div className="col-md-4 text-center">
//                 <ResumeBill></ResumeBill>
//               </div>
//               <div className="col-md-8">
//                 <div className="row"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default Menu;
