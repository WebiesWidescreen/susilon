import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Awad3Img from "../assets/awards3.jpg";
import "./awards.css";

const AwardsComponent = () => {
  return (
    <div className="awardsSec" id="awards">
      <Container className="awardsCon">
        <Row xs={1} md={2} className="g-4">
          <Col xs={12} className="awardsTxtCon">
            <h1 className="awardsTxtHead">
              <span className="awardsTxtSpan">OUR</span> AWARDS
            </h1>
            <div className="awardsIntroTxt">
              <p className="awardsPara">
                Recognizes Susilon's commitment to delivering exceptional beauty
                services, setting industry standards, and inspiring excellence.{" "}
                <span className="awardHighLight">Acknowledges Susilon's</span>{" "}
                pioneering approach to beauty, leveraging creativity, and
                pushing the boundaries of conventional makeup and hair
                techniques. <strong>Highlights Susilon's</strong> unwavering
                dedication to client happiness, ensuring every individual leaves
                feeling pampered, valued, and utterly satisfied with their
                experience.
              </p>
            </div>
          </Col>
          <Col>
            <Card className="sercardAward">
              <Card.Body>
                <div className="awardsImage">
                  <img
                    src={Awad3Img}
                    alt="awardsImg"
                    className="awardImgGrid"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="sercardAward">
              <Card.Body>
                <h2 className="awardsColSubHead">Salon Awards</h2>
                <div className="awardsListing">
                  <h3>Ponmagal Awards Business Awards & recognition</h3>
                  <ul>
                    <li>
                      <span>Winner – Susilon The Beauty Art Studio.</span>
                    </li>
                  </ul>
                </div>
                <div className="awardsListing">
                  <h3>Star of tamil nadu season 2 Awards</h3>
                  <ul>
                    <li>
                      <span>Winner – Susilon The Beauty Art Studio.</span>
                    </li>
                  </ul>
                </div>
                <div className="awardsListing">
                  <h3>Iconic golden Awards 2023</h3>
                  <ul>
                    <li>
                      <span>Winner – Susilon The Beauty Art Studio.</span>
                    </li>
                  </ul>
                </div>
                <div className="awardsListing">
                  <h3>Sigaram Awards</h3>
                  <ul>
                    <li>
                      <span>Winner – Susilon The Beauty Art Studio.</span>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AwardsComponent;
