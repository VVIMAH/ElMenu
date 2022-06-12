import React from "react";
import "./restype.scoped.css";
function Restype(props) {
  const { changeForm, formData, setFormData } = props;

  const sendData = async (e) => {
    e.preventDefault();
    const res = await fetch("http://iv-apis.herokuapp.com/nocors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: "https://backend.supamenu.rw/supapp/api/service-providers",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: formData,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="RestaurantType">
      <form className="open" onSubmit={sendData}>
        <label>Restaurant type (Restaurant, Pub, Hotel, Other)</label>
        <select
          name="type"
          id=""
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
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
            <select
              name="type"
              id=""
              onChange={(e) =>
                setFormData({ ...formData, openingHour: e.target.value })
              }
            >
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
            <select
              name="type"
              id=""
              onChange={(e) =>
                setFormData({ ...formData, closingHour: e.target.value })
              }
            >
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
        <button
          onClick={(e) => {
            e.preventDefault();
            changeForm();
          }}
        >
          Next
        </button>
        <br />
        <button
          onClick={(e) => {
            sendData(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Restype;
