import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBarMenu from "../nav/NavBarMenu";
import ResumeBill from "../events/ResumeBill";
import App from "../../../app/layout/App.css"



/*function Menu() {
    return (
      <div className= "container">
        <div className="row">
          <div className="col-6">
            <ResumeBill
              input type="text" name="waiter" placeholder="Waiter" />
            </div>
          </div>
       </div>

      );

};
export default Menu;*/


/*function Menu() {
  return (
    <div className="container">
      <div classname="row">
        <div className="col-6">
          <NavBarMenu></NavBarMenu>
        </div>

        <div className="col-6">
        <ResumeBill
              input type="text" name="waiter" placeholder="Waiter" />
          <ResumeBill>Resume</ResumeBill>
        </div>
      </div>
    </div>
  );
}


export default Menu;*/


function Menu() {
  return (
     
        
              <div className="container">
         <div className="row">
 <NavBarMenu

           input className="col-4" type="text" name="waiter" placeholder="Waiter" />
         
 
              <div className="col-4">
     
              <ResumeBill/>


           
        </div>
      </div>
    </div>
  );
}





export default Menu;





