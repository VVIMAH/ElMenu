import {
  Settings,
  List,
  CircleRounded,
  PersonOutline,
} from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";

import React from "react";
import "./sidebar.css";
import pic from "../../assets/images/logo.png";

export default function Sidebar() {
  return (
    
    <div className="sidebar">
   
      <ul className="sidebarList">
      <img src={pic} alt="logo" id="logo" />
        <li className="sidebarListItem">
          <List className="sidebarIcon" htmlColor="gray" />
          <span className="sidebarListItemText">Overview</span>
        </li>
        <li className="sidebarListItem">
          <CompassCalibrationIcon htmlColor="gray" className="sidebarIcon" />
          <span className="sidebarListItemText">Tables</span>
        </li>
        <li className="sidebarListItem">
          <CircleRounded htmlColor="gray" className="sidebarIcon" />
          <span className="sidebarListItemText">Orders</span>
        </li>
        <li className="sidebarListItem">
          <MenuBookIcon htmlColor="gray" className="sidebarIcon" />
          <span className="sidebarListItemText">Menu</span>
        </li>

      </ul>
        <div className="access">
          <ul className="below">
            <li className="sidebarListItem">
              <Settings htmlColor="gray" className="sidebarIcon" />
              <span className="sidebarListItemText">Settings</span>
            </li>
            <li className="sidebarListItem">
              <PersonOutline htmlColor="gray" className="sidebarIcon" />
              <span className="sidebarListItemText">Account</span>
            </li>
          </ul>
        </div>
    </div>
    
  );
}