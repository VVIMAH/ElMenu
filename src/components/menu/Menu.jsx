import React from 'react';
import Center  from "./Center";
import Topbar from './Topbar';
import Sidebar from './Sidebar';

export default function Menu() {
  return (
    <div className="MenuPage">
        <Topbar/>
       <Sidebar/>
       <Center/>
    </div>
  )
}
