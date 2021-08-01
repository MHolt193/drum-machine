import Modal from "react-bootstrap/Modal";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Info = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Drum Machine</h4>
        <p>
          This Drum Machine was coded by Michael Holt as a freeCodeCamp project
          using ReactJS, react-bootstrap, and Bootstrap. You can view the source
          code on{" "}
          <a
            href="https://github.com/MHolt193/drum-machine/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub: <i class="fab fa-github-square"></i>
          </a>
        </p>
      </Modal.Body>
    </Modal>
  );
};
export default Info;