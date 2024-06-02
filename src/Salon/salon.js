import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Salon1 from "../assets/das1.png";
import Salon2 from "../assets/das2.png";
import Salon3 from "../assets/das3.png";
import "./salon.css";

const SalonComponent = () => {
  return (
    <div className="salCon" id="salon">
      <Container>
        <h2 className="salHead">
          <span className="salSpan">SUSILON THE BEAUTY</span> ART SALON
        </h2>
        <Row>
          <Col>
            <img src={Salon1} alt="Salon1" className="salImg" />
          </Col>
          <Col>
            <img src={Salon2} alt="Salon2" className="salImg" />
          </Col>
          <Col>
            <img src={Salon3} alt="Salon3" className="salImg" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p className="salPar">
              <strong>
                Step into Susilon, the epitome of elegance and sophistication in
                the realm of beauty. Our art studio transcends conventional
                standards, merging the realms of creativity and precision to
                redefine beauty. With a team of skilled artisans, we
                meticulously craft each look to reflect your individuality,
                enhancing your natural features and igniting confidence from
                within. From flawless makeup artistry to exquisite hair design,
                every visit to Susilon is a journey of self-expression and
                empowerment. Welcome to a sanctuary where beauty is not just
                seen, but felt and celebrated.
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SalonComponent;