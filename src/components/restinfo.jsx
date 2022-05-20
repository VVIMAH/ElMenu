import React from "react";
import '../restinfo.css';
function Restinfo(){
return(
<div className="container">
<div className="navbar">
    <nav>
        <div className="logo">
            <img src={"logo_whitebg.png"} alt="" />
            </div>
       
       <div className="icons">
<div className="twons">

        <img src={"Subtract.svg"} alt="" />
        <img src={"bell.svg"} alt="" />
<div className="line">

<img src={"line.svg"} alt=""  />
</div>
</div>
<div className="user">
<div className="name">

  <strong>
      
      Jacques Kagabo
      </strong>
</div>
      
       <img src={"profile.svg"} alt="" className="me" />
</div>
       </div>
    </nav>
</div>
<div className="BODY">
<div className="body">
<div className="left">
    
       <h3>
           <strong>

            1. Create your restaurant profile
           </strong>
           </h3>
           <div className="all">
              <div className="listin">
               <img src={"one.svg"} alt="" className="circle" />
                   </div> 
               <div className="first">
               <div className="top">
               Restaurant Information

        </div>

               <div className="bottom">Restaurant name, address, other details</div>
               </div>
               
           </div>
             <div className="all">
              <div className="listin">
               <img src={"two.svg"} alt="" className="circle" />
                   </div> 
               <div className="first">
               <div className="top">
               Restaurant Type and Timings

        </div>

               <div className="bottom">Establishment and cuisine type, <br /> opening hours</div>
               </div>
               
           </div>
           <div className="all">
              <div className="listin">
               <img src={"three.svg"} alt="" className="circle" />
                   </div> 
               <div className="first">
               <div className="top">
               Create your menu

        </div>

               <div className="bottom">Menu, Restaurant, Food images</div>
               </div>
               
           </div>
           
    
</div>
<div className="middle"></div>
<div className="rightt">
<form action="#" method="POST">
    <div className="puh">

    <div className="labels">
    <label >Restaurant Information</label>
    <input type="text" placeholder="Restaurant name" /><br />
   
    <input type="text" placeholder="Restaurant full name" />
   
    </div>
    <div className="labels">
        
    <label>Contact number @ Restaurant</label>
    <div className="inputs">
        +250
<input type="text" className="inputt" />
    <input type="number" placeholder="mobile number" className="nber" />
</div>
    </div>
    <div className="labels">

    <label>Restaurant Owner details</label>

      <div className="inputs">
        +250
<input type="text" className="inputt" />
    <input type="number" placeholder="mobile number" className="nber" />
</div><br />
    <input type="text" placeholder="owner name"/><br />
    <input type="text" placeholder="owner email" /><br />
    </div>
    

    <button>Next</button>
    </div>
</form>
</div>
</div>

</div>
</div>

)
}
export default Restinfo;