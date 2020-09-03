import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import './Contact.css';


const Contact = () => {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setName("");
        setSubject("");
        setEmailAddress("");
        setMessage("");
    }, [isLoading])

    const changeNameHandler = (event) => {
        setName(event.target.value);

    }

    const changeSubjectHandler = (event) => {
        setSubject(event.target.value);

    }

    const changeMessageHandler = (event) => {
        setMessage(event.target.value);

    }

    const changeEmailHandler = (event) => {
        setEmailAddress(event.target.value);

    }

    const handleSubmit = (e) => {

        setIsLoading(true)
        e.preventDefault();
        let email = { name: name, subject: subject, emailAddress: emailAddress, message: message };

        axios.post('/api/v1/send', email)
            .then(res => {
                setIsLoading(false)
                alert('Message sent! Thank you for sending me a message!');
            })

    }

    return (
        <LoadingScreen
            loading={isLoading}
            logoSrc='/sending.gif'
        >

            <div className="contact">
                <div className="updateEmployee__card">
                    <div className="updateEmployee__cardBody">
                        <form action="submit">
                            <div className="updateEmployee__firstName">
                                <label>Name: </label>
                                <input placeholder="Name" name="name" className="form-control"
                                    value={name} onChange={changeNameHandler} />

                            </div>
                            <div className="updateEmployee__lastName">
                                <label>Subject: </label>
                                <input placeholder="Subject" name="subject" className="form-control"
                                    value={subject} onChange={changeSubjectHandler} />

                            </div>
                            <div className="updateEmployee__emailId">
                                <label>Email Address: </label>
                                <input placeholder="Email Address" name="emailaddress" className="form-control"
                                    value={emailAddress} onChange={changeEmailHandler} />

                            </div>
                            <div className="updateEmployee__lastName">
                                <label>Message: </label>
                                <textarea placeholder="Message" name="message" className="form-control" type="textarea"
                                    value={message} onChange={changeMessageHandler} />

                            </div>
                            <div className="btn__container">
                                <Button color="primary" variant="contained" className="btn__save" onClick={handleSubmit}>Send</Button>
                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </LoadingScreen>
    )
}

export default Contact
