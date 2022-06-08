import { Settings,List,MenuBook,LightbulbCircle , PersonOutline, Circle} from '@mui/icons-material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() { 
  function overview(){
    return <BrowserRouter>
       <Routes>
         <Route path="/overview" element={<Overview/>}>

         </Route>
       </Routes>
    </BrowserRouter>
  }
  return (
    
    <div className="sidebar">
        <div className="sidebarWrapper">
            <img src="logo.png" className="logo" alt="logo"/>
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
