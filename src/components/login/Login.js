import React, { Component } from "react";
import Inputs from "./Inputs";
import Signup from "./Signup";
import Submit from "./Submit";

const Login = ()=> {
    return (
      <div className="Login container">
        <div class="row">
          <div class="column orange">
            <img src={"logo_whitebg.png"} alt="logo" className="logo" />
          </div>
          <div className="block">
            <div class="column white">
              <div className="logoo">
                <img src={"logo_whitebg.png"} alt="" id="logoo" />
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

export default Login;
