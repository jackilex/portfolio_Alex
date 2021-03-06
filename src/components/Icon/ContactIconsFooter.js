import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub,} from '@fortawesome/free-brands-svg-icons'
import { faCoffee,faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

function ContactIconsFooter(props) {
    return (
        <React.Fragment>
        <a href="https://www.linkedin.com/in/alex-saint-victor" target="_blank"><FontAwesomeIcon  className="linked-in" icon={faLinkedinIn}size="2x" />
        </a>
        <a href="mailto:AlexM.SaintVictor@gmail.com" target="_blank"><FontAwesomeIcon className="github-c" icon={faEnvelopeOpenText}size="2x" />
        </a>
        {/* <a href="mailto:saintvictorcodes@gmail.com" target="_blank"><FontAwesomeIcon className="github-c" icon={faEnvelopeOpenText}size="2x" /></a> */}
        <a href="https://github.com/jackilex" target="_blank"><FontAwesomeIcon className="github-c" icon={faGithub}size="2x" />
        </a>
        </React.Fragment> 
    );
}

export default ContactIconsFooter;