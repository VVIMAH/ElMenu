import React, { Component } from "react";
import {AiFillCaretDown} from "react-icons/ai";
class Inputs extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="inputs">
            <label htmlFor="client">Client</label>
          <input type="email" placeholder="Client name" />
        </div>
        <div className="inputs">
            <label htmlFor="Category">Category</label>
          <select name="category" id="category">
              <option value="0">choose category <AiFillCaretDown /></option>
              <option value="desert">desert</option>
              <option value="lunch">lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">snack</option>
          </select>
        </div>
        <div className="inputs">
            <label htmlFor="Category">Representative</label>
          <input type="text" placeholder="Names" />
        </div>
        <div className="inputs">
            <label htmlFor="Category">Date of creation</label>
          <input type="text" placeholder="month and year" />
        </div>
        <div className="inputs">
            <label htmlFor="Category">Address</label>
          <input type="text" placeholder="Province, District, sector" />
        </div>
        <div className="inputs">
            <label htmlFor="Category">Email</label>
          <input type="text" placeholder="Email address" />
        </div>
        <div className="inputs">
            <label htmlFor="Category">Phone</label>
          <input type="text" placeholder="Phone number" />
        </div>
      </div>
    );
  }
}

export default Inputs;
