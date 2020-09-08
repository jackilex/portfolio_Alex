import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
    return ( 
        <div id="logo">
        <FontAwesomeIcon className="logos" icon={faCodeBranch}size="3x"/>
        </div>
     );
}
 
export default Logo;