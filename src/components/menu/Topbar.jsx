import React from 'react';
import './tobar.css';
import { Search,Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbarContainer">   
        <div className="topbarLeft">
    <span className="nameMenu">Menu</span>
  </div>
  <div className="topbarCenter">
    <div className="searchbar">
      <Search className="searchIcon" />
      <input
      type="text"
        placeholder="Search for food, menu or oders type"
        className="searchInput"
      />
    </div>
  </div>
  <div className="topbarRight">
   
    <div className="topbarIcons">
     
      <div className="topbarIconItem">
        <Notifications />
        <span className="topbarIconBadge">1</span>
      </div>
    </div>
    <div className="topbarLinks">
      <span className="topbarLink">Iradukunda Moustapha</span>
    </div>
    <img src="1.jpg" alt="" className="topbarImg"/>
  </div></div>
  )
}
