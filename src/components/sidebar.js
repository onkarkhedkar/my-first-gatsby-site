import * as React from 'react'
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';


export default Sidebar => {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/about">
          About
        </a>
        <a className="menu-item" href="/blog/blog">
          Blog
        </a>
        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
    );
  };