import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import emailjs from "@emailjs/browser";
import "./contact.css";

const ContactComponent = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    Fname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const { Fname, email, phoneNumber, message } = formData;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();

    emailjs
      .send(
        "service_d93a4sp", // Replace with your EmailJS service ID
        "template_f87d436", // Replace with your EmailJS template ID
        formData,
        "3VGWtuDcD8xxtmy4G" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        setFormData({
          ...formData,
          Fname: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setValidated(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send email.");
      });
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
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    value={Fname}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        Fname: e.target.value,
                      })
                    }
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone"
                  className="mb-3"
                >
                  <Form.Control
                    required
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
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  className="mb-3"
                  label="Message"
                >
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    value={message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />
                </FloatingLabel>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="submit"
                    value="Send Message"
                    className="subBut"
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponent;
