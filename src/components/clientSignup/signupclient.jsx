import React, { Component } from "react";
import Inputs from "./Inputs";
import Submit from "./Submit";
import "./client.scoped.css";
const ClientSignup = () => {
  return (
    <div className="main">
      <h2>Client</h2>
      <Inputs />
      <Submit className="submit" />
    </div>
  );
};

export default ClientSignup;
