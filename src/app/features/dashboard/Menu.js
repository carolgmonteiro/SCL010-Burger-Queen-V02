import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBarMenu from "../nav/NavBarMenu";
import ResumeBill from "../events/ResumeBill";
import App from "../../../app/layout/App.css"


function Menu() {
  return (
     
        
              <div className="container">
         <div className="row">
 <NavBarMenu

           input className="col-4" type="text" name="waiter" placeholder="Waiter" />
         
 
              <div className="col-4">
     <div className="container2">
              <ResumeBill/>


           </div>
        </div>
      </div>
    </div>
  );
}





export default Menu;





