import React from "react";
// import "./App.css";
import { Menu } from "../../../data/menu.json";


class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sandwich_ham_&_cheese",
      value: "$500"
    };
  }

 onClickToAdd(){
  this.props.clickToAdd(this.state.name,this.state.value);
 }
  render() {

    return (

      <div className="col-md-8">
        <div>
          <div>
      <div className="line"></div>
            <h6>Breakfast</h6>
            
            {Menu.Sandwich.map(btn => (
              <button 
                onClick={ this.onClickToAdd.bind(this)  }
                className="main-button">
                 <img src={require('../../../../src/img/sandwich_breakfest.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}

            <h6>Main</h6>
            <div className="line"></div>
            <div className="burger-button">
            {Menu.Simple_Burger.map(btn => (
              <button
                onClick={this.onClickToAdd.bind(this)}
                className="main-button">
                <img src={require('../../../../src/img/simple_burger_meat.svg')} height="50" width="50" />
                <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
              ))}
            </div>
            <div className="burger-button">
            {Menu.Double_Burger.map(btn => (
              <button className="main-button">
                <img src={require('../../../../src/img/double_burger_meat.svg')} height="50" width="50" />
                <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
            </div>
          </div>
     

          <h6>Toppings</h6>
      
 
          <div className="item-btn-row">
            {Menu.Toppings1.map(btn => (
          
              <button className="col-md-5 col-md-offset-5">
               
              <img src={require('../../../../src/img/cheese.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
               
  </button>
    ))}
          </div>

              <div className="item-btn-row">
            {Menu.Toppings.map(btn => (
              <button className="col-md-5 col-md-offset-5">
           
              <img src={require('../../../../src/img/egg.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
           
              </button>
            ))}
          </div>
          

        
          <div className="item-btn-row">
            {Menu.Side_Diches1.map(btn => (
              <button className="col-md-5 col-md-offset-5">
              <img src={require('../../../../src/img/fried-potatoes.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
             </div>

            <div className="item-btn-row">
            {Menu.Side_Diches.map(btn => (
              <button className="col-md-5 col-md-offset-5">
              <img src={require('../../../../src/img/caja-de-aros-de-cebolla.svg')} height="50" width="50" />
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
            </div>
            </div>
               </div>
     
     
    
  
       
   
    );  

  }
}
export default Food;
