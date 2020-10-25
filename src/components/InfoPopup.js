import React from "react";
import Modal from "react-bootstrap/Modal";

const InfoPopup = ({ title, content, subitems, showPopup, handleClose }) => (
  <Modal show={showPopup} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {content}
      <ol style={{ paddingTop: "1.5rem" }}>
        {subitems.map((item) => (
          <li style={{ paddingTop: "0.75rem" }} key={item}>
            {item}
          </li>
        ))}
      </ol>
    </Modal.Body>
    <Modal.Footer></Modal.Footer>
  </Modal>
);

export default InfoPopup;
