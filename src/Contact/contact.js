import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import emailjs from "@emailjs/browser";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import "./contact.css";
import Icon from "../Icons/icons";

const ContactComponent = () => {
  const nameInput = useRef(null);
  const mailInput = useRef(null);
  const phoneInput = useRef(null);
  const messageInput = useRef(null);
  const [alertShow, setAlertShow] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    Fname: "",
    email: "",
    phoneNumber: "",
    message: "",
    errMsg: "",
  });
  const { Fname, email, phoneNumber, message, errMsg } = formData;

  const handleModClose = () => setModalShow(false);

  const handleSendMsg = () => {
    if (Fname === "") {
      setAlertShow(true);
      setFormData({
        ...formData,
        errMsg: "Please fill the Name!",
      });
      nameInput?.current?.focus();
    } else if (email === "") {
      setAlertShow(true);
      setFormData({
        ...formData,
        errMsg: "Please fill the email!",
      });
      mailInput?.current?.focus();
    } else if (!email.includes("@")) {
      setAlertShow(true);
      setFormData({
        ...formData,
        errMsg: "Please enter a valid @email!",
      });
      mailInput?.current?.focus();
    } else if (phoneNumber === "") {
      setAlertShow(true);
      setFormData({
        ...formData,
        errMsg: "Please fill the phoneNumber!",
      });
      phoneInput?.current?.focus();
    } else if (phoneNumber.length < 10) {
      setAlertShow(true);
      setFormData({
        ...formData,
        errMsg: "Please enter a valid mobile number!",
      });
      phoneInput?.current?.focus();
    } else if (message === "") {
      setAlertShow(true);
      setFormData({
        ...formData,
        errMsg: "Please fill the message!",
      });
      messageInput?.current?.focus();
    } else {
      setIsSpinner(true);
      const url = `https://wa.me/7448484344?text=Name : ${formData.Fname}, Email: ${formData.email}, PhoneNumber: ${formData.phoneNumber}, Message: ${formData.message}`;
      window.open(url, "_blank");
      emailjs
        .send(
          "service_d93a4sp", // Replace with your EmailJS service ID
          "template_f87d436", // Replace with your EmailJS template ID
          formData,
          "3VGWtuDcD8xxtmy4G" // Replace with your EmailJS public key
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSpinner(false);
          setModalShow(true);
          // alert("Email sent successfully!");
          setFormData({
            ...formData,
            Fname: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        })
        .catch((err) => {
          console.error("FAILED...", err);
          // alert("Failed to send email.");
        });
    }
  };

  return (
    <div id="contact">
      <Container className="awardsCon">
        <Row xs={1} md={2} className="g-4">
          <Col xs={12} className="awardsTxtCon">
            <h1 className="awardsTxtHead">
              CONATCT <span className="awardsTxtSpan">US</span>
            </h1>
            <div className="contactAdd">
              <p>
                <span className="contactSpan">Address : </span>
                <span>
                  NO:30, Gandhi Nagar 1st Main Road, near Mochi Shoes & VI
                  Showroom, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020{" "}
                </span>
              </p>
              <p>
                <span>Phone : </span>
                <span className="contactSpan">
                  (+91) 74484 84344 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </span>
                Mon-Sun: 10:00am → 9:00pm
              </p>
            </div>
            <br />
            <div className="google-map-code">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.44814611012!2d80.25278707507704!3d13.00710898731148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a1b82f7df7%3A0xefb1bb28671ebb40!2sSusilon%20The%20Beauty%20Art%20Studio!5e0!3m2!1sen!2sin!4v1717404910367!5m2!1sen!2sin"
                width="1200"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
            <br />
            <div className="contactFormCon">
              <h2>Request a booking</h2>
              <CardGroup>
                <Card className="sercardSalon">
                  <Card.Body>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Name"
                      className="mb-3"
                    >
                      <Form.Control
                        ref={nameInput}
                        type="text"
                        placeholder="Name"
                        value={Fname}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            Fname: e.target.value,
                          })
                        }
                        className="contactInput"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        ref={mailInput}
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="contactInput"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Phone"
                      className="mb-3"
                    >
                      <Form.Control
                        ref={phoneInput}
                        type="tel"
                        maxLength={10}
                        placeholder="Phone"
                        value={phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value.replace(/\D/g, ""),
                          })
                        }
                        className="contactInput"
                      />
                    </FloatingLabel>
                  </Card.Body>
                </Card>
                <Card className="sercardSalon">
                  <Card.Body>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      className="mb-3"
                      label="Message"
                    >
                      <Form.Control
                        ref={messageInput}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "204px" }}
                        value={message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="contactInput"
                      />
                    </FloatingLabel>
                  </Card.Body>
                </Card>
                {alertShow ? (
                  <Card className="sercardSalon">
                    <Card.Body>
                      <ToastContainer className="p-3" style={{ zIndex: 1 }}>
                        <Toast
                          bg={"Danger".toLowerCase()}
                          onClose={() => setAlertShow(false)}
                          show={alertShow}
                          delay={1000}
                          autohide
                        >
                          <Toast.Header>
                            <strong className="me-auto">Alert</strong>
                            <small className="text-muted">just now</small>
                          </Toast.Header>
                          <Toast.Body style={{ color: "white" }}>
                            {errMsg}
                          </Toast.Body>
                        </Toast>
                      </ToastContainer>
                    </Card.Body>
                  </Card>
                ) : null}
              </CardGroup>
              <CardGroup>
                <Card className="sercardSalon">
                  <Card.Body>
                    {isSpinner ? (
                      <Button className="contactBtnSty" disabled>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        className="contactBtnSty"
                        onClick={() => handleSendMsg()}
                      >
                        Send Message
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        show={modalShow}
        onHide={handleModClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Success Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <Icon name="check2-circle" size="6rem" color="limegreen" />
            <p>Email sent successfully!</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactComponent;
