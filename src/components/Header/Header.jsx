import React from 'react';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <div>
            <h1>Kervin Rey H. Balibagoso</h1>
            <h4>Software Developer</h4>
            </div>
            <nav>
                <ul className="nav__links">
                    <li><a href="/Services">Services</a></li>
                    <li><a href="/Projects">Project</a></li> 
                    <li><a href="/About">About</a></li>
                </ul>
            </nav>
            <a className="cta" href="/Contact"><button>Contact</button></a>
        </header>
    )
}

export default Header
