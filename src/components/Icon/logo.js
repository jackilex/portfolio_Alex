import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";

const Logo = () => {
    return ( 
        <Link id="logo" to="/about">
        <FontAwesomeIcon className="logos" icon={faCodeBranch}size="3x"/>
        </Link>
     );
}
 
export default Logo;