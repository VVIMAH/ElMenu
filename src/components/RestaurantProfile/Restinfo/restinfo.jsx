import React from "react";
import "./restinfo.scoped.css";

const  Restinfo = (props) =>{
  const { changeForm, formData, setFormData } = props
  
  return (
    <div className="RestaurantInfo">
      <form action="#" method="POST">
        <div className="puh">
          <div className="labels">
            <label>Restaurant Information</label>
            <input onChange={(e)=> setFormData({...formData, name: e.target.value})}
             type="text" placeholder="Restaurant name" />
            <br />

            <input onChange={(e)=> setFormData({...formData, completeName: e.target.value})} 
            type="text" placeholder="Restaurant full name" />
          </div>
          <div className="labels">
            <label>Contact number @ Restaurant</label>
            <div className="inputs">
              <span className="CountryCode">+250</span>
              {/* <input type="number" className="inputt" /> */}
              <input onChange={(e)=> setFormData({...formData, phone: e.target.value})}
               type="tel" placeholder="mobile number" className="nber" />
            </div>
          </div>
          <div className="labels">
            <label>Restaurant Owner details</label>

            <div className="inputs">
              <span className="CountryCode">+250</span>
              {/* <input type="text" className="inputt" /> */}
              <input onChange={(e)=> setFormData({...formData, ownerPhoneNumber: e.target.value})}
               type="tel" placeholder="mobile number" className="nber" />
            </div>
            <br />
            <input onChange={(e)=> setFormData({...formData, ownerNames: e.target.value})}
            type="text" placeholder="owner name" />
            <br />
            <input onChange={(e)=> setFormData({...formData, ownerEmail: e.target.value})}
             type="text" placeholder="owner email" />
            <br />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              changeForm();
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
export default Restinfo;
