import React, { Component } from "react";
import {AiFillPlusCircle} from 'react-icons/ai';
import {BsCircle, BsCheckCircleFill} from 'react-icons/bs'
class Grids extends Component {
  state = {};
  render() {
    return (
      <div class="grid-container">
        <div class="grid-item item1">
          <div className="col1">
            <p>Restaurants</p>
            <p className="sales">Sales</p>
            <p>Sole Luna</p>
          </div>
          <div className="col2">
            <p className="view">View details</p>
            <br />
            <p></p> <br />
            <p></p> <br />
            <p className="money">5000 RWF</p>
          </div>
        </div>
        <div class="grid-item item5"></div>
        <div class="grid-item item3">
          <div className="col1">
            <p>Cafes</p>
            <p className="sales">Sales</p>
            <p>Coffee</p>
          </div>
          <div className="col2">
            <p className="view">View details</p>
            <br />
            <p></p> <br />
            <p></p> <br />
            <p className="money">7,400 RWF</p>
          </div>
        </div>
        <div class="grid-item item2">
          <div className="col1">
            <p>Hotels</p>
            <p className="sales">Sales</p>
            <p>Parkinn</p>
          </div>
          <div className="col2">
            <p className="view">View details</p>
            <br />
            <p></p> <br />
            <p></p> <br />
            <p className="money">13,400 RWF</p>
          </div>
        </div>
        <div class="grid-item item4">
          <div className="col1">
            <p>Pubs</p>
            <p className="sales">Sales</p>
            <p>Sundowner</p>
          </div>
          <div className="col2">
            <p className="view">View details</p>
            <br />
            <p></p> <br />
            <p></p> <br />
            <p className="money">9600 RWF</p>
          </div>
        </div>
        <div class="grid-item item5">
        <div className="col1">
            <p id="create">Create</p>
            <p className="sales">Today</p>
            <br />
            <p className="sales" id="create-new">Create new</p>
          </div>
          <div className="col2 it-5">
          </div>
          <div className="last-item">
          <div className="new">
            <BsCircle className="circle" />
            <span>Restaurants</span>
            <div id="new">NEW</div>
          </div>
          <div className="new">
            <BsCircle className="circle"/>
            <span>Hotels</span>
            <div id="new">NEW</div>
          </div>
          <div className="new">
            <BsCheckCircleFill className="v-circle"/>
            <span>Restaurants</span>
            <div id="default">DEFAULT</div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grids;
