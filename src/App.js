import React, { Component } from "react";
import ReactDOM from "react-dom";
import Boxes from "./components/boxes/Boxes";
import Grids from "./components/Grids";
import Upper from "./components/Upper";
import Sidebar from "./components/sidebar/Sidebar";
import Chart from './components/chart/chart'
class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Sidebar className="side-bar" />
        <div className="overview">
          <Upper />
          <Boxes />
          {/* <ChartGrid/> */}
          <Chart/>
          <Grids />
        </div>
      </div>
    );
  }
}
export default App;
