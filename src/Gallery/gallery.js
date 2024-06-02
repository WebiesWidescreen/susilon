import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Fade from "react-bootstrap/Fade";
import Gallery1 from "../assets/gallery-25.jpg";
import "./gallery.css";

const GalleryComponent = () => {
  const [open, setOpen] = useState(false);
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
                  <div id="example-fade-text" className="fadeIconGal">
                    <span className="iconWrapper"></span>
                  </div>
                </Fade>
              </div>
              {/* <div
                className="thumbImage"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
                <Fade in={open}>
                  <div id="example-fade-text" className="fadeIconSty">
                    <span className="iconWrapper"></span>
                  </div>
                </Fade>
                <img
                  src={Gallery1}
                  width={300}
                  height={300}
                  className="gallImg"
                />
              </div> */}
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default GalleryComponent;
