import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Inputs from "./Inputs";
import Signup from "./Signup";
import Submit from "./Submit";

function App() {
  const [data, setData] = useState({
    login: "",
    password: "",
  });
  const Navigate = useNavigate();
  const getData = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const token = localStorage.getItem("token");
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://196.223.240.154:8099/supapp/api/auth/signin", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
      authorization: "Bearer " + token,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.token.accessToken) {
          localStorage.setItem("token", data.token.accessToken);
          setResponse("Login successfull");
          Navigate("/overview");
        } else {
          setResponse("Invalid credentials");
          Navigate("/signin");
        }
      });

    return (
      <div className="container">
        <div class="row">
          <div class="column orange">
            <img src={"logo_orangebg.png"} alt="logo" className="logo" />
          </div>
          <div className="block">
            <div class="column white">
              <div className="logoo">
                <img src={"logo_orangebg.png"} alt="" id="logoo" />
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
  };
}

export default App;
