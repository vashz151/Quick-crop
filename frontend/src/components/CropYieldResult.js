import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CropYieldResult(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Crop Yield</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            The predicted {props.crop} production is {props.prediction} kg. The
            predicted yield is {(props.prediction / props.area).toFixed(2)} kg
            per acre.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CropYieldResult;
