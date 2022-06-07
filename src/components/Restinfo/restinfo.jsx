import React from "react";
import "./restinfo.scoped.css";

const  Restinfo = (props) =>{
  console.log(props)
  return (
    <div className="RestaurantInfo">
      <form action="#" method="POST">
        <div className="puh">
          <div className="labels">
            <label>Restaurant Information</label>
            <input type="text" placeholder="Restaurant name" />
            <br />

            <input type="text" placeholder="Restaurant full name" />
          </div>
          <div className="labels">
            <label>Contact number @ Restaurant</label>
            <div className="inputs">
              <span className="CountryCode">+250</span>
              {/* <input type="number" className="inputt" /> */}
              <input type="tel" placeholder="mobile number" className="nber" />
            </div>
          </div>
          <div className="labels">
            <label>Restaurant Owner details</label>

            <div className="inputs">
              <span className="CountryCode">+250</span>
              {/* <input type="text" className="inputt" /> */}
              <input type="tel" placeholder="mobile number" className="nber" />
            </div>
            <br />
            <input type="text" placeholder="owner name" />
            <br />
            <input type="text" placeholder="owner email" />
            <br />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              props.changeForm();
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
