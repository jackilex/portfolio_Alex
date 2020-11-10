import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub,} from '@fortawesome/free-brands-svg-icons'
import { faCoffee,faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const Contacticons = () => {
    return ( 
    <React.Fragment>
    <a href="https://www.linkedin.com/in/alex-saint-victor" target="_blank"><FontAwesomeIcon  className="linked-in iconC" icon={faLinkedinIn}size="2x" />
    <br/><span className="callOut">LinkedIn</span>
    </a>
    <a href="mailto:saintvictorcodes@gmail.com" target="_blank"><FontAwesomeIcon className="github-c iconC" icon={faEnvelopeOpenText}size="2x" />
    <br/><span className="callOut">saintvictorcodes@gmail.com</span></a>
    {/* <a href="mailto:saintvictorcodes@gmail.com" target="_blank"><FontAwesomeIcon className="github-c" icon={faEnvelopeOpenText}size="2x" /></a> */}
    <a href="https://github.com/jackilex" target="_blank"><FontAwesomeIcon className="github-c iconC" icon={faGithub}size="2x" />
    <br/><span className="callOut">Github</span></a>
    </React.Fragment> 
     );
}
 
export default Contacticons;