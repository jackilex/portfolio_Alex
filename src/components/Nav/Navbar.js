import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <div id="navHead" className="navbar">
        <nav id="navContainer">
        <h1 id="logo" >Alex</h1>
          <ul >
            <li >
              <NavLink  to="/about" activeStyle={{color: "orange"}}>About<span></span></NavLink>
            </li>
            <li >
              <NavLink to="./portfolio" activeStyle={{color: "orange"}}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink  to="./contact" activeStyle={{color: "orange"}}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="./resume" activeStyle={{color: "orange"}}>Resume</NavLink>
            </li>            
          </ul>
      </nav>     
      </div>

     );
}
 
export default Nav;