import React from 'react';

function submenu (props) {
    return (
    <div className="ui dropdown item">
    <i className="dropdown icon"></i>
    
    <ul class="menu">
      
      <a className="item">contact</a>
      <a className="item">Mail</a>
      <a className="item">Phone</a>
    </ul>
  </div>
    )
}

export default submenu;