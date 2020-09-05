import React from 'react';
import './AboutMeNarrative.css';
import myimg from "../../../assets/kervin.jpg";

const AboutMeNarrative = () => {
    return (
        <div className="narrative">
            <div className="aboutMe__img">
                <img className="aboutMe__picture" src={myimg} alt="" />
            </div>
            
            <p>
            <hr/>
                Im a recent software developer of Soft Artifact Incorporated with a strong background in core Java and MySQL RDBMS. I spent the last 3 years developing desktop application that well-benefited the company as well develop my career growth, 
                In past 2 years working with the company I’ve been awarded for most developed output hence I was rewarded for a trip incentives for my success. I was also designated as a team leader for a certain projects and also been tasked to mentor new developer. 
                I decided to leave the company because I feel the urge to learn more in software development industry especially in web application. In past 2 months, I committed myself to learn the essential technology on building web app, specifically Spring boot as backend. I have now learned the basic in Spring boot and also the main concept on why use Spring boot in web application, I also have learned React.js as my front end and also made myself familiar in using Docker which is essential tool in Microservices Architecture.
                <br />
                <br />
                I am always enthusiastic in coding, that’s why I keep learning new technology to fuel my passion. For me coding brings fulfilment and joy at the same time it broaden my learnings. 
                Right now Im looking for an oppurtunity to apply my expertise and expand more knowledge in software development industry.
                <br />
                <br />
               Motto :  <p className="narrative__motto">“Fail big so we could evolve to a better version of ourselves, make those failures as  a stepping stone to continue learning and strive for greatness”</p>


            </p>
        </div>
    )
}

export default AboutMeNarrative
