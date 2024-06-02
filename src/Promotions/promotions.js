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
                        <img src={Promo} className="scale-with-grid" />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accTitle">
                      <h3>
                        Recieve free Colour Treatment for the month of April
                      </h3>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accText">
                      <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula, eget lacinia odio sem nec elit. Sed posuere
                        consectetur est at lobortis. Nulla vitae elit libero, a
                        pharetra augue.
                      </p>
                      <p>
                        Sed posuere consectetur est at lobortis. Nulla vitae
                        elit libero, a pharetra augue. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia
                        odio sem nec elit.
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
                        <img src={Promo2} className="scale-with-grid" />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accTitle">
                      <h3>
                        Recieve free Colour Treatment for the month of April
                      </h3>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="sercardPromo">
                  <Card.Body>
                    <div className="accText">
                      <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula, eget lacinia odio sem nec elit. Sed posuere
                        consectetur est at lobortis. Nulla vitae elit libero, a
                        pharetra augue.
                      </p>
                      <p>
                        Sed posuere consectetur est at lobortis. Nulla vitae
                        elit libero, a pharetra augue. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia
                        odio sem nec elit.
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
