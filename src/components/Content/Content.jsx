import React from 'react';
import './Content.css';
import AboutMe from './AboutMe/AboutMe';
import  Language  from './Language/Language';
import Portfolio from './Portfoliio/Portfolio';

function Content() {
    return (
        <div className="content">
            <AboutMe />
           <br/>
            <Language />
            <br/>
            <Portfolio/>
            <br/>
        </div>
    )
}

export default Content
