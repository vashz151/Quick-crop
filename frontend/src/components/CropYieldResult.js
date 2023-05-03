import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LineGraph from "./LineGraph";

function CropYieldResult(props) {
  const handleClose = () => props.setShow(false);
  return (
    <>
      <Modal show={props.show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Crop Yield</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            The predicted {props.crop} production is {props.prediction} kg. The
            predicted yield is {(props.prediction / props.area).toFixed(2)} kg
            per acre.
          </p>
          <LineGraph
            data={props.yearData}
            title="Year-wise Yield"
            xlabel="Year"
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CropYieldResult;
