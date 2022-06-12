import { Settings,List,MenuBook,LightbulbCircle , PersonOutline, Circle} from '@mui/icons-material';
import React from 'react';
import './sidebar.scoped.css';

export default function Sidebar() { 

  return (
    
    <div className="sidebar">
        <div className="sidebarWrapper">
            <img src="logo_blackbg.png" className="logo" alt="logo"/>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <List htmlColor="gray" className="sidebarIcon" />
            <span className="sidebarListItemText">Overview</span>
          </li>
          <li className="sidebarListItem">
            <LightbulbCircle htmlColor="gray" className="sidebarIcon" />
            <span className="sidebarListItemText">Tables</span>
          </li>
          <li className="sidebarListItem">
            <Circle htmlColor="gray" className="sidebarIcon" />
            <span className="sidebarListItemText">Overview</span>
          </li>
          <li className="sidebarListItem">
            <MenuBook htmlColor="gray" className="sidebarIcon" />
            <span className="sidebarListItemText">Menu</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList ">
        <li className="sidebarListItem">
            <Settings htmlColor="gray" className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
          <li className="sidebarListItem">
            <PersonOutline htmlColor="gray" className="sidebarIcon" />
            <span className="sidebarListItemText">Acount</span>
          </li>
        </ul>
      </div>
         
    </div>
    
    

  )
}
