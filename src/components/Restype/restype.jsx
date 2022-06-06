import React from "react";
import "./restype.css";
function Restype(props) {
  return (
    <div className="RestaurantType">
      <form className="open">
        <label>Restaurant type (Restaurant, Pub, Hotel, Other)</label>
        <select name="type" id="">
          <option value="">Choose type</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Pub">Pub</option>
          <option value="Hotel">Hotel</option>
          <option value="Other">Other</option>
        </select>
        <select name="type" id="">
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
            <select name="type" id="">
              <option value="7:00AM">7:00AM</option>
              <option value="8:00AM">8:00AM</option>
              <option value="9:00AM">9:00AM</option>
              <option value="10:00AM">10:00AM</option>
              <option value="11:00AM">11:00AM</option>
              <option value="12:00AM">12:00AM</option>
              <option value="Other">Other</option>
            </select>{" "}
            <br />
          </div>
          <div className="solid">
            To:
            <select name="type" id="">
              <option value="7:00PM">7:00PM</option>
              <option value="8:00PM">8:00PM</option>
              <option value="9:00PM">9:00PM</option>
              <option value="10:00PM">10:00PM</option>
              <option value="11:00PM">11:00PM</option>
              <option value="12:00PM">12:00PM</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <br />
        <label>Upload images (Pictures, logo)</label>
        <input
          type="file"
          name=""
          id="file"
          placeholder="Click to choose images"
          hidden
        />
        <button
          className="butimage"
          onClick={() => {
            document.querySelector("input[type=file]").click();
          }}
        >
          Click to choose images
        </button>
        <br />
        <button onClick={(e)=>{
          e.preventDefault()
          props.changeForm()
        }}>Next</button>
      </form>
    </div>
  );
}
export default Restype;
