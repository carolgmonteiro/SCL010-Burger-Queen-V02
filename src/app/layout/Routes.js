import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../features/dashboard/Home";
import Kitchen from "../features/dashboard/Kitchen";
import Resume from "../features/dashboard/Resume";
import Menu from "../features/dashboard/Menu";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/kitchen" component={Kitchen} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};
export default Routes;
