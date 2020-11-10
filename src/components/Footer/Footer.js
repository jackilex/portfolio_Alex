import React from 'react';
import ContacticonsF from '../Icon/ContactIconsFooter'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-wrapper">
                <h5>&copy;  A React Portfolio by Alex Saint Victor</h5>
                <ul>
                    <li className="contacts">
                    <ContacticonsF />
                    </li>
                </ul>

            </div>
        </footer>
     );
}
 
export default Footer;