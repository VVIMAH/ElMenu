import React from 'react';
import './content.scoped.css';
import Rightbar from '../rightbar/Rightbar';

export default function Content() {
  return (
    <div className="content">
       <div className="upper">
          <div className="left">
             <div className="sample">
             <h1>Menus</h1>
             <p>OS: 20022/12/8:10</p>
             </div>
            
          </div>
          <div className="left">
             <div className="categories">
                <strong>Food Orders</strong>
             </div>
             <div className="categories">
                <strong>Apetizer</strong>
             </div>
             <div className="categories">
                <strong>Drinks</strong>
             </div>
          </div>
       </div>
        <div className="foodContent">
        <div className="foodDetails">
            <img src="/assets/images.jpeg" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>
    </div>
    <div className="foodDetails">
    <img src="/assets/images(2).jpeg" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>
    </div>
    <div className="foodDetails">
    <img src="/assets/images(4).jpeg" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>
    </div>
    <div className="foodDetails">
    <img src="/public/assets/images(3).jpeg" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>

    </div>
        <div className="foodDetails">
        <img src="/assets/images(1).jpeg" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>
    
    </div>
    <div className="foodDetails">
    <img src="/public/assets/images(2).jpeg" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>

    </div>
    <div className="foodDetails">
    <img src="/assets/images.jpeg" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>

    </div>
    <div className="foodDetails">
    <img src="/public/images/food" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>

    </div>
    <div className="foodDetails">
    <img src="/public/images/food" alt="" className="foodIMg"/>
       <strong className="foodName">Humbuger</strong>
       <p className="fooddesc"> mage with italian sauce and saucegae</p>
       <h4 className="foodPrice">FRW 5000</h4>
    </div>
        </div>


        <Rightbar/>
    </div>
  )
}
