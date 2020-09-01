import React from 'react';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <div>
            <a href="/" className="header__name">Kervin Rey H. Balibagoso</a>
            <h4>Software Developer</h4>
            </div>
            <nav>
                <ul className="nav__links">
                    <li><a href="/Employees">Employee</a></li>
                    <li><a href="/Projects">Project</a></li> 
                    <li><a href="/About">About</a></li>
                </ul>
            </nav>
            <a className="cta" href="/Contact"><button>Contact</button></a>
        </header>
    )
}

export default Header
