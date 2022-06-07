import React from "react";
import "./resmenu.scoped.css";

function Resmenu() {
  return (
    <div className="RestaurantMenu">
      <div className="buttons">
        <div>drinks</div>
        <div>starters</div>
        <div>appetizers</div>
        <div>desserts</div>
        <div>main</div>
      </div>
      <br />

      <form className="form3">
        <div className="puh">
          <label>Name</label>
          <input type="text" placeholder="menu name..." />
          <br />
          <label>Price</label>
          <input type="text" placeholder="RWF" />
          <br />
          <label>Menu Description</label>
          <input type="text" placeholder="ingredients" />
          <br />
          <label>Images</label>
          <input type="file" name="" id="file" hidden />

          <button
            className="butimage"
            onClick={() => {
              document.querySelector("input[type=file]").click();
            }}
          >
            Upload images
          </button>
          <br />
          <button onClick={(e)=>{
            e.preventDefault()
          }}>Next</button>
        </div>
      </form>
    </div>
  );
}
export default Resmenu;
