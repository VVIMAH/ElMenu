import React, { Component } from "react";
import pic from "./images/logo.png";
import Inputs from "./Inputs";
import Signup from "./Signup";
import Submit from "./Submit";
function webImage() {
  return <img src={pic} />;
}
class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="column orange">
            <img src={pic} alt="logo" className="logo" />
          </div>
          <div className="block">
            <div class="column white">
              <div className="logoo">
                <img src={pic} alt="" id="logoo" />
              </div>
              <div>
                <h2>Login to your Account</h2>
              </div>
              <Inputs />
              <Submit />
              <Signup />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
