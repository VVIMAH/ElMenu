import { Settings,List,CircleRounded, PersonOutline} from '@mui/icons-material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react';
import './sidebar.css';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/logo_whitebg.png" alt="logo"/>
       <ul className="sidebarList">
          <li className="sidebarListItem">
            <DashboardIcon className="sidebarIcon" htmlColor='gray'/>
            <span className="sidebarListItemText">Dashboard</span>
          </li>
          <li className="sidebarListItem">
            <PeopleAltIcon htmlColor='yellow' className="sidebarIcon" />
            <span className="sidebarListItemText">Clients</span>
          </li>
          <li className="sidebarListItem">
            <CircleRounded  htmlColor='gray' className="sidebarIcon" />
            <span className="sidebarListItemText">Users</span>
          </li>
          {/* <li className="sidebarListItem">
            <MenuBookIcon  htmlColor='gray' className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li> */}

          <div className="access">
            <ul>
            <li className="sidebarListItem">
            <Settings  htmlColor='gray' className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
          <li className="sidebarListItem">
            <LogoutIcon htmlColor='gray' className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
            </ul>
          </div>

          </ul> 
         
    </div>
  )
}
