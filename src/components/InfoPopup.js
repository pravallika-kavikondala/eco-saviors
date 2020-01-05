import React from "react";
import Modal from "react-bootstrap/Modal";

const InfoPopup = ({ title, content, showPopup, handleClose }) => (
  <Modal show={showPopup} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{content}</Modal.Body>
    <Modal.Footer></Modal.Footer>
  </Modal>
);

export default InfoPopup;
