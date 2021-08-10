import React from 'react';
import { Instagram } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram />
                <Facebook />
                <Twitter />
                <Mail />
            </div>
            <p>&copy;2021 pedrotechpizza.com</p>
        </div>
    )
}

export default Footer;
