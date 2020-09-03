import React from 'react';
import htmlLogo from "../../../assets/TechImages/html5.png";
import cssLogo from "../../../assets/TechImages/css3.png";
import github from "../../../assets/TechImages/github.png";
import java from "../../../assets/TechImages/java.jpeg";
import javascript from "../../../assets/TechImages/javascript.png";
import reactjs from "../../../assets/TechImages/reactjs-thumb.jpg";
import tortoiseHG from "../../../assets/TechImages/tortoiseHG.png";
import mysql from "../../../assets/TechImages/mysql.png";
import jasperReport from "../../../assets/TechImages/jasperReport.png";
import docker from "../../../assets/TechImages/docker-logo.png";
import firebase from "../../../assets/TechImages/firebase.png";
import git from "../../../assets/TechImages/git-logo.png";
import spring from "../../../assets/TechImages/spring-boot-logo.png";
import maven from "../../../assets/TechImages/maven-logo.png";
import javafx from "../../../assets/TechImages/javafx-logo.png";

import './Language.css';

export const Language = () => {
    return (
        <div className = "lang">
            <h1>Technology</h1>
            <div className="img-slider">
              <div className="img-slide">
                <img className="img" src={htmlLogo} alt=""/>
                <img className="img" src={cssLogo}  alt=""/>
                <img className="img" src={javascript}  alt=""/>
                <img className="img" src={reactjs}  alt=""/>
                <img className="img" src={javafx}  alt=""/>
                <img className="img" src={java}  alt=""/>
                <img className="img" src={spring}  alt=""/>
                <img className="img" src={maven}  alt=""/>
                <img className="img" src={docker}  alt=""/>
                <img className="img" src={git}  alt=""/>
                <img className="img" src={tortoiseHG}  alt=""/>
                <img className="img" src={github}  alt=""/>
                <img className="img" src={firebase}  alt=""/>
                <img className="img" src={mysql}  alt=""/>
                <img className="img" src={jasperReport}  alt=""/>
              </div>
              <div className="img-slide">
              <img className="img" src={htmlLogo} alt=""/>
                <img className="img" src={cssLogo}  alt=""/>
                <img className="img" src={javascript}  alt=""/>
                <img className="img" src={reactjs}  alt=""/>
                <img className="img" src={javafx}  alt=""/>
                <img className="img" src={java}  alt=""/>
                <img className="img" src={spring}  alt=""/>
                <img className="img" src={maven}  alt=""/>
                <img className="img" src={docker}  alt=""/>
                <img className="img" src={git}  alt=""/>
                <img className="img" src={tortoiseHG}  alt=""/>
                <img className="img" src={github}  alt=""/>
                <img className="img" src={firebase}  alt=""/>
                <img className="img" src={mysql}  alt=""/>
                <img className="img" src={jasperReport}  alt=""/>
              </div>
            </div>
            </div>
    )
}

export default Language;
