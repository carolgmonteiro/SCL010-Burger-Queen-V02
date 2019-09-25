import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBarMenu from "../nav/NavBarMenu";
import OrderMenu from "../events/OrderMenu";
import App from "../../../app/layout/App.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      waiter: "",
      client: "",
      selectedApp: "menu",
      errorMsg: "",
      loading: false
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <NavBarMenu
            input
            className="col-4"
            type="text"
            name="waiter"
            placeholder="Waiter"
          />
          <div className="col-4">
            <div className="container2">
              <OrderMenu />
            </div>
          </div>
        </div>
      </div>
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
