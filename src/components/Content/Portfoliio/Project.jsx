import React, { useState } from 'react';
import './Project.css';
import RpsGame from './RpsGame/RpsGame';

const Project = ({ image, title, description, isDialog, project }) => {

    const [showDialog, setShowDialog] = useState(false);
    const [modalClassName, setModalClassName] = useState("project__modal");

    const displayModal = () => {
        if (isDialog) {
            setShowDialog(true);
            setModalClassName("project__modal");
        }
    }

    const closeDialog = () => {
        setModalClassName("modal__close");
    }

    return (
        <div className="project" >
            <img src={image} alt="" />
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button onClick={displayModal}>View</button>

            {showDialog ? (
                <div className={modalClassName}>
                    <div className="modal__content">
                        <div className="modal__header">
                            <span className="close" onClick={closeDialog}>&times;</span>
                            <h1>{title}</h1>
                        </div>
                        <div className="modal__body">
                            {project}
                        </div>
                    </div>
                </div>
            ) : null}

        </div>
    )
}

export default Project
