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
                <div className="footer__icons">
                    <FacebookIcon onClick={() => window.open('https://web.facebook.com/KhRLawliet/')} />
                    <InstagramIcon onClick={() => window.open('https://www.instagram.com/khrlawliet/')}/>
                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/kervin-rey-balibagoso-074463199/')}/>
                </div>

                
        </div>
    )
}


export default Footer 
