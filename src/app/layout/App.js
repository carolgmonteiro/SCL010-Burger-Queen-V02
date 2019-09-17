import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from "../features/dashboard/Menu";
import Kitchen from "../features/dashboard/Kitchen";
import Resume from "../features/dashboard/Resume";

function App() {
  return (
    <Router>
      <div>
        <ul className="navbar navbar-dark bg-dark">
          <a href="/">
            <Link to="/" className="text-white">
              Menu
            </Link>
          </a>
          <a href="/kitchen">
            <Link to="/kitchen" className="text-white">
              Kitchen
            </Link>
          </a>
          <a href="/resume">
            <Link to="/resume" className="text-white">
              Resume
            </Link>
          </a>
        </ul>
        <hr />
        <Route exact path="/" component={Menu} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <Route exact path="/" component={Menu} />
//         <Route path="/kitchen" component={Kitchen} />
//         <Route path="/resume" component={Resume} />
//       </div>
//     </Router>
//   );
// }

// export default App;
