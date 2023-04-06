import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FertilizerResult({ prediction }) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  console.log(prediction);
  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>The suitable fertilizer is {prediction.data}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {prediction.desc1}</p>
          <p> {prediction.desc2}</p>
          <p> {prediction.desc3}</p>
          <p>{prediction.desc4}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FertilizerResult;
