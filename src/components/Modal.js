import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/css/modal.scss'

function ModalPopup(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} className={`docsModal ${props.className}`} centered size={props.size}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
            </Modal>
        </>
    );
}

export default ModalPopup