import React from 'react';
import { Link, NavLink } from "react-router-dom";
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'


const Icons = (props) => {
    return ( 
    <React.Fragment>
    <a href={props.github} target="_blank"><FontAwesomeIcon  className="github" icon={faGithub}size="2x" /></a>
    <a href={props.website || props.github} target="_blank"><FontAwesomeIcon className="chrome" icon={faChrome}size="2x" /></a>
    </React.Fragment> 
     );
}
 
export default Icons;