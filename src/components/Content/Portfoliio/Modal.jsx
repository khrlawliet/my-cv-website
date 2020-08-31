import React, { useState } from 'react'

const Modal = () => {
    const [modalClassName, setModalClassName] = useState("");

    const closeDialog = () => {
        setModalClassName("modal__close");
    }

    return (
        <div className={modalClassName}>
            <div className="modal__content">
                <div className="modal__header">
                    <span className="close" onClick={closeDialog}>&times;</span>
                    <h1>title</h1>
                </div>
                <div className="modal__content">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
