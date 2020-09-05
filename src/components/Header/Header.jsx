import React, { useState } from 'react';
import './Header.css';
import Contact from '../Content/Contact/Contact'


function Header() {

    const toggle = () => {
        let elements = document.getElementsByClassName("header__item");
        for (let element of elements) {
            if (element.classList.contains("active")) {
                element.classList.remove("active")
            } else {
                element.classList.add("active");
            }
        }

    }

    const [modalClassName, setModalClassName] = useState("modal__close");

    const displayModal = () => {
        setModalClassName("project__modal");
    }
    const closeDialog = () => {
        setModalClassName("modal__close");
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeDialog();
        }
    });

    return (
        <>
            <header className="header">
                <nav>
                    <ul className="header__menu">
                        <li className="header__logo"><a href="/">Kervin Rey H. Balibagoso</a><a href="/"><h2>Software Developer</h2></a></li>
                        <li className="header__item"><a href="/about-me">About Me</a></li>
                        <li className="header__item"><a href="/krbalibagoso-resume.pdf" download>Resume</a></li>
                        <li className="header__item button primary"><a href ="#" onClick={displayModal}>Contact</a></li>
                        <li className="header__toggle" onClick={toggle}><span className="header__bars"></span></li>
                    </ul>
                </nav>

            </header>

            <div className={modalClassName}>
                <div className="modal__content">
                    <div className="modal__header">
                        <span className="close" onClick={closeDialog}>&times;</span>
                        <h1>Contact Me!</h1>
                    </div>
                    <div className="modal__body">
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
