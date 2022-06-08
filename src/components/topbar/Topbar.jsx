import React from 'react'
import { Search,Notifications } from '@mui/icons-material';
import './topbar.scoped.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Topbar() {
  return (
    <div className="topbar">
        <strong className="contentname">Menu</strong>
        <div className="person">
            <Search className="icon" htmlColor="black"/>
            <Notifications className="icon" htmlColor="black"/>
            <strong className="personName">John doe</strong>
            <AccountCircleIcon  className="profile"/>
        </div>

    </div>
  )
}
