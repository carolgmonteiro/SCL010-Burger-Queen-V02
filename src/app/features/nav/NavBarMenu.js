import React from "react";
import "bootstrap/dist/css/bootstrap.css";
/*import NavBarGeneral from "./features/nav/NavBarGeneral";*/

function NavBarMenu() {
  return (
    <div class="row">
      <div class="col-xs-2 col-md-2">
        <img src={require("../../../../src/img/LOGO_BURGER_QUEEN-02.png")} />
      </div>
      <div class="col-xs-4 col-md-4"></div>
      <div class="col-xs-2 col-md-2">
        <a href="/menu">Menu</a>
      </div>
      <div class="col-xs-2 col-md-2">
        <a href="/kitchen">Kitchen</a>
      </div>
      <div class="col-xs-2 col-md-2">
        <a href="/resume">Resume</a>
      </div>
    </div>
  );
}

export default NavBarMenu;
