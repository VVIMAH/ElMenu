import React from 'react';
import Content from '../content/Content';
import './feed.scoped.css';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';


export default function Feed() {
  return (
    <div className="feed">
        <div className="container">
          <Sidebar/>
         <Topbar/>
         <Content/>
        </div>
    </div>
  )
}
