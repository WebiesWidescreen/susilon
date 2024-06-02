import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Fade from "react-bootstrap/Fade";
import "./pricing.css";

const PricingComponent = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div id="pricing">
      <Container className="awardsCon">
        <Row xs={1} md={2} className="g-4">
          <Col xs={12} className="awardsTxtCon">
            <h1 className="awardsTxtHead">
              <span className="awardsTxtSpan">OUR</span> PRICING
            </h1>
            <div className="awardsIntroTxt">
              <p className="awardsPara">
                Our pricing structure is designed to offer exceptional value for
                premium beauty services. We provide a range of affordable
                options without compromising on quality. Enjoy luxurious
                treatments tailored to your budget
              </p>
            </div>
          </Col>
        </Row>
        <CardGroup className="priCardGrup">
          <Card className="sercardAward">
            <Card.Body>
              <h2>CUT</h2>
              <div
                className="serviceImage"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
                <Fade in={open}>
                  <div id="example-fade-text" className="fadeTxtPri">
                    <h4>
                      Experienced
                      <br />
                      Cutters
                    </h4>
                  </div>
                </Fade>
              </div>
              <p className="priDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac augue at erat hendrerit dictum. Praesent porta,
                purus eget sagittis imperdiet, nulla mi ullamcorper metus.
              </p>
            </Card.Body>
          </Card>
          <Card className="sercardAward">
            <Card.Body>
              <h2>COLOUR</h2>
              <div
                className="serviceImage2"
                onMouseEnter={() => setOpen2(true)}
                onMouseLeave={() => setOpen2(false)}
                aria-controls="example-fade-text"
                aria-expanded={open2}
              >
                <Fade in={open2}>
                  <div id="example-fade-text" className="fadeTxtPri">
                    <h4>
                      Vibrant
                      <br />
                      Colours
                    </h4>
                  </div>
                </Fade>
              </div>
              <p className="priDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac augue at erat hendrerit dictum. Praesent porta,
                purus eget sagittis imperdiet, nulla mi ullamcorper metus.
              </p>
            </Card.Body>
          </Card>
          <Card className="sercardAward">
            <Card.Body>
              <h2>STYLE</h2>
              <div
                className="serviceImage3"
                onMouseEnter={() => setOpen3(true)}
                onMouseLeave={() => setOpen3(false)}
                aria-controls="example-fade-text"
                aria-expanded={open3}
              >
                <Fade in={open3}>
                  <div id="example-fade-text" className="fadeTxtPri">
                    <h4>
                      Latest Modern
                      <br />
                      Styles
                    </h4>
                  </div>
                </Fade>
              </div>
              <p className="priDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac augue at erat hendrerit dictum. Praesent porta,
                purus eget sagittis imperdiet, nulla mi ullamcorper metus.
              </p>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default PricingComponent;
