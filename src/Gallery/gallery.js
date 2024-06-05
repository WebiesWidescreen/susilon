import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Fade from "react-bootstrap/Fade";
import Modal from "react-bootstrap/Modal";
import Gallery1 from "../assets/g-1.jpg";
import Gallery2 from "../assets/g-2.jpg";
import Gallery3 from "../assets/g-3.jpg";
import Gallery4 from "../assets/g-4.jpg";
import Gallery5 from "../assets/g-5.jpg";
import CloseButton from "react-bootstrap/CloseButton";
import "./gallery.css";

const GalleryComponent = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalContent, setModalContent] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = (Img, Txt) => {
    setShowModal(true);
    setModalImg(Img);
    setModalContent(Txt);
  };
  return (
    <div id="gallery">
      <Container className="awardsCon">
        <Row xs={1} md={2} className="g-4">
          <Col xs={12} className="awardsTxtCon">
            <h1 className="awardsTxtHead">
              <span className="awardsTxtSpan">OUR</span> GALLERY
            </h1>
            <h3>We love hair - this is a passion for us not just a job!</h3>
          </Col>
        </Row>
        <CardGroup className="priCardGrup">
          <Card className="sercardAward">
            <Card.Body>
              <div
                className="thumbImage"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
                <Fade in={open}>
                  <div
                    id="example-fade-text"
                    className="fadeIconGal"
                    onClick={() =>
                      handleShow(
                        Gallery1,
                        "Phasellus sed lorem ut sem rhoncus placerat ac et turpis. Aliquam et lacinia nulla, venenatis suscipit"
                      )
                    }
                  >
                    <span className="iconWrapper"></span>
                  </div>
                </Fade>
              </div>
            </Card.Body>
          </Card>
          <Card className="sercardAward">
            <Card.Body>
              <div
                className="thumbImage2"
                onMouseEnter={() => setOpen2(true)}
                onMouseLeave={() => setOpen2(false)}
                aria-controls="example-fade-text"
                aria-expanded={open2}
              >
                <Fade in={open2}>
                  <div
                    id="example-fade-text"
                    className="fadeIconGal"
                    onClick={() =>
                      handleShow(
                        Gallery2,
                        "Phasellus sed lorem ut sem rhoncus placerat ac et turpis. Aliquam et lacinia nulla, venenatis suscipit"
                      )
                    }
                  >
                    <span className="iconWrapper"></span>
                  </div>
                </Fade>
              </div>
            </Card.Body>
          </Card>
          <Card className="sercardAward">
            <Card.Body>
              <div
                className="thumbImage3"
                onMouseEnter={() => setOpen3(true)}
                onMouseLeave={() => setOpen3(false)}
                aria-controls="example-fade-text"
                aria-expanded={open3}
              >
                <Fade in={open3}>
                  <div
                    id="example-fade-text"
                    className="fadeIconGal"
                    onClick={() =>
                      handleShow(
                        Gallery3,
                        "Phasellus sed lorem ut sem rhoncus placerat ac et turpis. Aliquam et lacinia nulla, venenatis suscipit"
                      )
                    }
                  >
                    <span className="iconWrapper"></span>
                  </div>
                </Fade>
              </div>
            </Card.Body>
          </Card>
          <Card className="sercardAward">
            <Card.Body>
              <div
                className="thumbImage4"
                onMouseEnter={() => setOpen4(true)}
                onMouseLeave={() => setOpen4(false)}
                aria-controls="example-fade-text"
                aria-expanded={open4}
              >
                <Fade in={open4}>
                  <div
                    id="example-fade-text"
                    className="fadeIconGal"
                    onClick={() =>
                      handleShow(
                        Gallery4,
                        "Phasellus sed lorem ut sem rhoncus placerat ac et turpis. Aliquam et lacinia nulla, venenatis suscipit"
                      )
                    }
                  >
                    <span className="iconWrapper"></span>
                  </div>
                </Fade>
              </div>
            </Card.Body>
          </Card>
          <Card className="sercardAward">
            <Card.Body>
              <div
                className="thumbImage5"
                onMouseEnter={() => setOpen5(true)}
                onMouseLeave={() => setOpen5(false)}
                aria-controls="example-fade-text"
                aria-expanded={open5}
              >
                <Fade in={open5}>
                  <div
                    id="example-fade-text"
                    className="fadeIconGal"
                    onClick={() =>
                      handleShow(
                        Gallery5,
                        "Phasellus sed lorem ut sem rhoncus placerat ac et turpis. Aliquam et lacinia nulla, venenatis suscipit"
                      )
                    }
                  >
                    <span className="iconWrapper"></span>
                  </div>
                </Fade>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <Modal
        show={showModal}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="galModSty">
          <img src={modalImg} alt="ModalImage" className="modalImg" />
          <p className="galModParTxt">
            {modalContent}{" "}
            <CloseButton className="galModClose" onClick={handleClose} />
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GalleryComponent;
