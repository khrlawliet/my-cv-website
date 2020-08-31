import React from 'react';
import myimg from "../../../assets/kervin.png";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import TodayIcon from '@material-ui/icons/Today';
import './AboutMe.css'

const AboutMe = () => {

    const myDetails = {
        address: "Kiamba, Sarangani Province",
        email: "kervinbalibagoso@gmail.com",
        contact: "+63910 896 0916",
    }
    const calculateAge = (birthday) => {
        let dob = new Date(birthday);
        let ageDifMs = Date.now() - dob.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <div className="aboutMe">
            <div className="aboutMe__img">
                <img className="aboutMe__picture" src={myimg} alt="" />
            </div>
            <div className="aboutMe__details">
                <Card className="aboutMe__card">
                    <CardContent className="aboutMe__cardContent">
                        <div className="aboutMe__greeting">Hi! I'm Kervin!</div>
                        <div> <HomeIcon /> {myDetails.address}</div>
                        <div><EmailIcon /> {myDetails.email} </div>
                        <div><ContactPhoneIcon /> {myDetails.contact} </div>
                        <div><TodayIcon /> Age : {calculateAge('02/26/1993')}</div>
                    </CardContent>
                </Card>

            </div>
        </div>

    )
}

export default AboutMe
