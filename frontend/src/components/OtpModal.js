import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import UserAlert from "./UserAlert";
import emailjs from "@emailjs/browser";
function OtpModal({ otp, details }) {
  console.log(otp);
  console.log(details);
  const [valid, setValid] = useState(false);
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const handleShow = () => setShow(!show);
  const handleSubmit = () => {
    const votp = document.getElementsByName("otp")[0].value;
    if (otp.toString() === votp.toString()) {
      setValid(true);
      setMessage("OTP verified successfully");
      setVariant("success");
      emailjs
        .sendForm("quickcrop", "quickcrop_temp", details, "kgWSv7mKn7T812rbf")
        .then(
          (result) => {
            alert("Thank you for subscribing!");
          },
          (error) => {
            alert("Something went wrong! Please try again later");
          }
        );
      setTimeout(() => {
        setShow(false);
      }, 1000);
    } else {
      setValid(true);
      setMessage("Invalid OTP! Please try again");
      setVariant("danger");
    }
  };
  const handleReset = () => {};
  return (
    <>
      <Modal
        show={show}
        onHide={handleShow}
        style={{ color: "black" }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        {valid && <UserAlert message={message} variant={variant} />}
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter otp sent to your mobile number</Form.Label>
              <Form.Control
                name="otp"
                type="tel"
                maxLength="4"
                placeholder="Enter OTP"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OtpModal;
