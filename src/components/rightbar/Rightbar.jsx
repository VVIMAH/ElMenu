import React from 'react'
import './rightbar.scoped.css';
import {CheckCircle,AddCircle} from "@mui/icons-material";

export default function Rightbar() {
  return (
    <div className="rightbar">
         
            <div className="add-item">
                <h1>Add Item</h1>
                <AddCircle className='right'/>
            </div>

        <div className="items">

        <div className="box">
            
            <h2 className="food"> Pizaa</h2>
             <CheckCircle className="food other"/>
        </div>

        <div className="box">
            <h2 className="food"> Pizaa</h2>
             <CheckCircle className="food other"/>
        </div>
        <div className="box">
            <h2 className="food"> Pizaa</h2>
             <CheckCircle className="food other"/>
        </div>
        <div className="box">
            <h2 className="food"> Pizaa</h2>
             <CheckCircle className="food other"/>
        </div>
        </div>
      
    </div>
  )
}
