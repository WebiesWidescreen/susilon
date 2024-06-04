import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";
import Promo from "../assets/promo-1.jpg";
import Promo2 from "../assets/promo-6.jpg";
import "./promotions.css";

const PromotionsComponent = () => {
  return (
    <div id="promotions">
      <Container className="awardsCon">
        <Row xs={1} md={2} className="g-4">
          <Col xs={12} className="awardsTxtCon">
            <h1 className="awardsTxtHead">
              <span className="awardsTxtSpan">PROMOTIONS</span> / OFFERS
            </h1>
            <div className="awardsIntroTxt">
              <p className="awardsPara">
                Enjoy offers all services, including hair, makeup, and skincare
                treatments. Plus, enjoy exclusive summer beauty packages
                tailored just for you. Book your appointment today and elevate
                your beauty experience!"
              </p>
            </div>
          </Col>
        </Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>SKIN WHITENING CREAM</Accordion.Header>
            <Accordion.Body>
              <CardGroup>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accImage">
                      <div className="accImageInner">
                        <img
                          src={Promo}
                          alt="Promo"
                          className="scale-with-grid"
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accTitle">
                      <h3>
                        Skin Whitening Creams: Uses, Benefits, and Concerns
                      </h3>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accText">
                      <p>
                        Skin whitening creams are topical products designed to
                        lighten skin tone by reducing melanin production.
                        Commonly used ingredients include hydroquinone, kojic
                        acid, and arbutin, which target hyperpigmentation, dark
                        spots, and uneven skin tone.
                      </p>
                      <p>
                        These creams are often sought for cosmetic reasons,
                        aiming to achieve a brighter, more uniform complexion.
                        However, their safety and efficacy can vary, and
                        long-term use may pose health risks, such as skin
                        irritation or more severe side effects.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Accordion.Body>
          </Accordion.Item>
          <br />
          <Accordion.Item eventKey="1">
            <Accordion.Header>CONTACT LENS</Accordion.Header>
            <Accordion.Body>
              <CardGroup>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accImage">
                      <div className="accImageInner">
                        <img
                          src={Promo2}
                          alt="Promo2"
                          className="scale-with-grid"
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accTitle">
                      <h3>Contact Lenses: Types, Benefits, and Care</h3>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accText">
                      <p>
                        Contact lenses are thin, curved lenses placed on the
                        surface of the eyes to correct vision or for cosmetic
                        purposes. They offer an alternative to eyeglasses,
                        providing a wider field of view and greater convenience
                        for active lifestyles.
                      </p>
                      <p>
                        Contact lenses come in various types, including daily,
                        bi-weekly, monthly disposables, and specialized lenses
                        for specific vision conditions. Proper hygiene and care
                        are essential to prevent eye infections and maintain eye
                        health.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default PromotionsComponent;
