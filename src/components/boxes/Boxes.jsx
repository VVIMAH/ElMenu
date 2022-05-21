import React, { Component } from "react";
class Boxes extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="flex-container">
          <div>
            <span>Clients</span>
            <span>
              <p>60</p>
            </span>
          </div>
          <div>
            <span>Revenues</span>
            <span>
              <p>2,354,600</p>
            </span>
          </div>
          <div>
            <span>Orders</span>
            <span>
              <p>74468</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Boxes;
