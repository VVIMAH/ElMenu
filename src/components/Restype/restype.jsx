import React from "react";
import './restype.css';
function Restype(){
    return(
        <div className="contain">
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
                  <a href="./restinfo">

               <img src={"one copy.svg"} alt="" className="circle" />
                  </a>
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
                  <a href="./restype">

               <img src={"two copy.svg"} alt="" className="circle" />
                  </a>
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
                  <a href="./resmenu">

               <img src={"three.svg"} alt="" className="circle" />
                  </a>
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
<div className="right">
<form className="open">
  

    <label >Restaurant type (Restaurant, Pub, Hotel, Other)</label>
    <select name="type" id="" >
 <option value="">Choose type</option>
     <option value="Restaurant">Restaurant</option>
     <option value="Pub">Pub</option>
     <option value="Hotel">Hotel</option>
     <option value="Other">Other</option>
     </select> <br />
     <select name="type" id="" >
 <option value="African">African</option>
     <option value="Italian">Italian</option>
     <option value="American">American</option>
     <option value="Indonesian">Indonesian</option>
     <option value="Other">Other</option>
     </select>
     <br />
     <label>Opening hours</label>

     
     <div className="hours">
     <div className="solid">
From :
<select name="type" id="" >
 <option value="7:00AM">7:00AM</option>
     <option value="8:00AM">8:00AM</option>
     <option value="9:00AM">9:00AM</option>
     <option value="10:00AM">10:00AM</option>
     <option value="11:00AM">11:00AM</option>
     <option value="12:00AM">12:00AM</option>
     <option value="Other">Other</option>
     </select> <br />

    </div>
    <div className="solid">
        To:
     <select name="type" id="" >
     <option value="7:00PM">7:00PM</option>
     <option value="8:00PM">8:00PM</option>
     <option value="9:00PM">9:00PM</option>
     <option value="10:00PM">10:00PM</option>
     <option value="11:00PM">11:00PM</option>
     <option value="12:00PM">12:00PM</option>
     <option value="Other">Other</option>
     </select>
     </div>
     </div><br />
     <label >Upload images (Pictures, logo)</label>
<input type="file" name="" id="file" placeholder="Click to choose images" hidden />
<button className='butimage'onClick={()=>{document.querySelector('input[type=file]').click()}} >Click to choose images</button>
<br />
<button>Next</button>
</form>


   

</div>
</div>

    </div>
</div>

        
    )
}
export default Restype;