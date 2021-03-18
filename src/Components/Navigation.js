import React from 'react';
import {Link} from 'react-router-dom';

export class Navigation extends React.Component{
  render(){
    return(
      <div id="navigation">
          <ul>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/list">List</Link></li>  
          </ul>
      </div>
    )
  }
}