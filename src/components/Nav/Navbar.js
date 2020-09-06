import React from 'react';

const Nav = () => {
    return ( 
        <div id="navHead" className="navbar">
        <nav id="navContainer">
        <h1 id="logo" >Alex</h1>
          <ul >
            <li >
              <a  href="index.html">About<span></span></a>
            </li>
            <li >
              <a href="./assets/portfolio.html">Portfolio</a>
            </li>
            <li>
              <a  href="./assets/contact.html">Contact</a>
            </li>
            <li>
              <a href="./assets/contact.html">Resume</a>
            </li>            
          </ul>
      </nav>     
      </div>

     );
}
 
export default Nav;