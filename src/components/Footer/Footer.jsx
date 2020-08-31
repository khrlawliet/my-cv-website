import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';


function Footer() {
    return (
        <div className="footer">
           
                    <p>
                        &copy;{new Date().getFullYear()} | KaiBal Tech | All right reserved
                </p>
                <div className="footer_icons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>


        </div>
    )
}


export default Footer 
