import React from 'react';
import myimg from "../../../assets/kervin.png";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HomeIcon from '@material-ui/icons/Home';
import HouseIcon from '@material-ui/icons/House';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import TodayIcon from '@material-ui/icons/Today';
import './AboutMe.css'

const AboutMe = () => {

    const myDetails = {
        address: "Purok Ilang-ilang, Poblacion, Kiamba, Sarangani Province, Philippines",
        address2: "Phase-3B, Blk 23, Lot 2, Doña Soledad, Brgy. Labangal, General Santos City, Philippines",
        email: "kervinbalibagoso@gmail.com",
        contact: "+63910 896 0916",
        contact2: "+63927 261 3344"
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
                        <div> <HouseIcon /> {myDetails.address}</div>
                        <div><HomeIcon /> {myDetails.address2}</div>
                        <div><EmailIcon /> {myDetails.email} </div>
                        <div><ContactPhoneIcon /> {myDetails.contact} </div>
                        <div><ContactPhoneIcon /> {myDetails.contact2} </div>
                        <div><TodayIcon /> Age : {calculateAge('02/26/1993')}</div>
                    </CardContent>
                </Card>

            </div>
        </div>

    )
}

export default AboutMe
