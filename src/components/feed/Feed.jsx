import React from 'react';
import Content from '../content/Content';
import './feed.css';
import Topbar from '../topbar/Topbar';


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
