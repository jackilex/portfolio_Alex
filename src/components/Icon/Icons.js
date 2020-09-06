import React from 'react';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'


const Icons = () => {
    return ( 
    <React.Fragment>
        <FontAwesomeIcon className="github" icon={faGithub}size="2x" />
        <FontAwesomeIcon className="chrome" icon={faChrome}size="2x" />
    </React.Fragment> 
     );
}
 
export default Icons;