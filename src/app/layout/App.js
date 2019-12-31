import React from "react";
import "../../app/layout/App.css";
import Routes from "./Routes";

function App() {
  return <Routes />;
}

export default App;

{
  /* <Fragment>
<Router>
  <Row>
    <Col className="logo">
      <img
        src={require("../../../src/img/LOGO BURGER QUEEN-04.svg")}
        alt="logo"
      />
    </Col>
    <Col></Col>
    <Col></Col>
    <div className="nav-link">
      <Col>
        <Link to={"/"}>
          <div className="menu-icons">
            <img
              src={require("../../../src/img/icon-menu-yellow.svg")}
              alt="logo"
            />
          </div>
        </Link>
      </Col>
      <Col>
        <Link to={"/kitchen"}>
          <div className="menu-icons">
            <img
              src={require("../../../src/img/icon-kitchen-yellow.svg")}
              alt="logo"
            />
          </div>
        </Link>
      </Col>
      <Col>
        <Link to={"/resume"}>
          <div className="menu-icons">
            <img
              src={require("../../../src/img/icon-resume-yellow.svg")}
              alt="logo"
            />
          </div>
        </Link>
      </Col>
    </div>
  </Row>

  <Route exact path="/" component={Menu} />
  <Route path="/kitchen" component={Kitchen} />
  <Route path="/resume" component={Resume} />
</Router>
</Fragment> */
}
