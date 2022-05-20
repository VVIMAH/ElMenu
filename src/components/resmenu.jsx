import React from 'react';
import './resmenu.css';

function Resmenu(){
    return(
        <div>
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
<div className="bodyyy">
<div className="left">
    
       <h3>
           <strong>

            1. Create your restaurant profile
           </strong>
           </h3>
           <div className="all">
              <div className="listin">
               <img src={"one copy.svg"} alt="" className="circle" />
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
               <img src={"three copy.svg"} alt="" className="circle" />
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
<div className='last'>
<div className='buttons'>
    <div>drinks</div>
    <div>starters</div>
    <div>appetizers</div>
    <div>desserts</div>
    <div>main</div>
</div><br />

<form className='form3' >
    <div className='puh'>

<label >Name</label>
    <input type="text" placeholder="menu name..." /><br />
    <label >Price</label>
    <input type="text" placeholder="RWF" /><br />
    <label >Menu Description</label>
    <input type="text" placeholder="ingredients" /><br />
<label >Images</label>
<input type="file" name="" id="file" hidden />

<button className='butimage' onClick={()=>{document.querySelector('input[type=file]').click()}} >Upload images</button>
<br />
<button>Next</button>
    </div>
</form>
</div>
</div>
</div>

        </div>
    )
}
export default Resmenu;