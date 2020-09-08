import React from 'react';
import Contacticons from '../Icon/Contactlinks'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-wrapper">
                <h5>&copy;  A React Portfolio by Alex Saint Victor</h5>
                <ul>
                    <li className="contacts">
                    <Contacticons />
                    </li>
                </ul>

            </div>
        </footer>
     );
}
 
export default Footer;