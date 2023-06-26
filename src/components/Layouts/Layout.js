import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

import React from 'react'
import Home from '../Home/Home';

 function Layout() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet/>
        <Home/>

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br/>
          <span className="bottom-tag-html"> &lt;/html&gt;</span>
          </span>
      </div>
    </div>
  )
}


export default  Layout;