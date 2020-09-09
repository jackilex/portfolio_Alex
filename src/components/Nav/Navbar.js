import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from "../Icon/logo"

const Nav = () => {
    return ( 
        <div id="navHead" className="navbar">
        <nav id="navContainer">
        <Logo />
          <ul >
            <li >
              <NavLink  to="/about" activeStyle={{color: "orange"}}>About<span></span></NavLink>
            </li>
            <li >
              <NavLink to="./portfolio" activeStyle={{color: "orange"}}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="./resume" activeStyle={{color: "orange"}}>Resume</NavLink>
            </li> 
            <li>
              <NavLink  to="./contact" activeStyle={{color: "orange"}}>Contact</NavLink>
            </li>           
          </ul>
      </nav>     
      </div>

     );
}
 
export default Nav;