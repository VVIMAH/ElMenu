import React, { Component } from "react";
class Inputs extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="inputs">
          <input type="email" placeholder="Enter Your Email" name="login" />
        </div>
        <div className="inputs">
          <input type="password" placeholder="Enter Your Password" name="password" />
        </div>
      </div>
    );
  }
}

export default Inputs;
