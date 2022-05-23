import "../same/them.css";
import React, { useState } from "react";
import NavBarVans from "../navbar_vanessa/NavBar";
import Resmenu from "../Resmenu/resmenu";
import Restinfo from "../Restinfo/restinfo";
import Restype from "../Restype/restype";
// import Restinfo from '../Restinfo/restinfo';
function Them() {
  let curForm_notState;
  const nextForm = (prevForm = null)=>{
    
    let newFormIndex = theForms.findIndex((el)=> el === ((curForm_notState) ? curForm_notState: curForm) )
    console.log(newFormIndex)
    let newForm;
    if(newFormIndex >= theForms.length-1) return
    newForm = theForms[newFormIndex+1]
    setCurForm(newForm)
    curForm_notState = newForm
    if(newFormIndex===0){
     
     document.getElementsByClassName("circles")[1].style.backgroundColor="orange";
     document.getElementsByClassName("circles")[0].style.backgroundColor="#C4C4C4"
    }
    else if(newFormIndex===1){
      document.getElementsByClassName("circles")[0].style.backgroundColor="#C4C4C4"
      document.getElementsByClassName("circles")[1].style.backgroundColor="#C4C4C4"
document.getElementsByClassName("circles")[2].style.backgroundColor="orange"

    }

     
    
  }
  
  let theForms = [<Restinfo changeForm={nextForm}/>, <Restype changeForm={nextForm}/>,<Resmenu />]
  const [curForm, setCurForm] = useState(theForms[0])
  return (
    <div className="RestaurantSignup">
      <NavBarVans />
      <div className="BODY">
        <div className="left">
          <h3>
            <strong>1. Create your restaurant profile</strong>
          </h3>
          <div className="all">
            <div className="listin">
              
                <div className="circles" id="firstchild" >1</div>{" "}
              
            </div>
            <div className="first">
              <div className="top">Restaurant Information</div>

              <div className="bottom">
                Restaurant name, address, other details
              </div>
            </div>
          </div>
          <div className="all">
            <div className="listin">
              
                <div className="circles">2</div>{" "}
              
            </div>
            <div className="first">
              <div className="top">Restaurant Type and Timings</div>

              <div className="bottom">
                Establishment and cuisine type, <br /> opening hours
              </div>
            </div>
          </div>
          <div className="all">
            <div className="listin">
              
                <div className="circles">3</div>{" "}
            
            </div>
            <div className="first">
              <div className="top">Create your menu</div>

              <div className="bottom">Menu, Restaurant, Food images</div>
            </div>
          </div>
        </div>
        <div className="middle"></div>
        {curForm}
        {/* <Restype /> */}
        {/* <Restinfo /> */}
      </div>
    </div>
  );
}
export default Them;
