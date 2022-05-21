import React from "react";
import 'chart.js'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import './ChartGrid.css'
function ChartSketch() {
  return (
      <div className=" overall">
    <div className="container ">
      <Line
      datasetIdKey="id"
      width={400}
      height={200}
     data = {{
    labels: ["January", "February", "March", "April", "May", "June",'July','August','September','October','November','December'],
    datasets: [
      {
        label: "Today's trends",
        data: [23, 33, 45, 51, 64,73, 83, 95, 91, 95, 69,98],
        fill: true,
        backgroundColor: "#fa4b0c14",
        borderColor: "#f7941d",
        tension:0.6
      },
      {
        label: "Weekly Trends",
        data: [3, 23, 25, 31, 46,33, 71, 92, 24, 40, 49,49],
        fill: false,
        borderColor: "#363636",
        tension:0.6
      }
    ]
     }}
      />
    </div>
    <div className="chartGrid">
    <div className="gid-itemone">
            <p>Orders</p>
            <h3>45,210</h3>
        </div>
        <div className="gid-itemone ">
            <p>Orders</p>
            <h3>3,250</h3>
        </div>
        <div className="gid-itemone ">
            <p>Orders</p>
            <h3>60</h3>
        </div>
        <div className="gid-itemone ">
            <p>Orders</p>
            <h3>60</h3>
        </div>
    </div>
    </div>
    
  );
}
export default ChartSketch;