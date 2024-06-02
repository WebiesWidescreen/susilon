import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HairExtension from "../assets/HairExtensions.png";
import EyeBrow from "../assets/eyeBrow.png";
import "./services.css";

const ServicesComponent = () => {
  return (
    <div className="serviceSec" id="services">
      <Container>
        <h2 className="servHead">
          Services <span className="servSpan">we provide</span>
        </h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="sercard">
              <Card.Img
                variant="top"
                src={HairExtension}
                className="cardServImg"
              />
              <Card.Body>
                <Card.Title>HAIR EXTENSIONS</Card.Title>
                <Card.Text>
                  <p className="carCon">
                    <strong>DIAMOND Hair Extensions</strong> - Premium quality
                    human hair extensions renowned for durability, seamless
                    blending, and luxurios results.
                    <br />
                    <strong>CRYSTAL Hair Extensions</strong> - Premium hair
                    extensions known for their high quality and natural
                    appearance. They offer a variety of styles and lengths,
                    seamlessly blending with natural hair to enhance volume and
                    length.
                    <br />
                    <strong>FEATHER Hair Extensions</strong> - Feather Hair
                    Extensions are decorative hair accessories made from real or
                    synthetic feathers, adding a unique and colorful touch to
                    hairstyles. They are easily attachable and removable,
                    offering a playful and trendy way to customize your look.
                    <br />
                    <strong>MICRO-MINI Hair Extensions</strong> - Micro Mini
                    Hair Extensions are ultra-small, discreet hair extensions
                    that provide a natural look by attaching tiny strands close
                    to the scalp. They are ideal for adding subtle volume and
                    length without noticeable bonds.
                    <br />
                    <strong>V-LIGHT Hair Extensions</strong> - V-LIGHT Hair
                    Extensions are lightweight, high-quality extensions designed
                    for a natural look and comfortable wear. They offer various
                    color options and styles, making it easy to achieve a
                    seamless blend with your natural hair.
                    <br />
                    <strong>COMBINE Hair Extensions</strong> - COMBINE Hair
                    Extensions are versatile extensions that can be blended with
                    different types and textures of natural hair. They are
                    designed for easy integration and customization, providing a
                    natural and fuller look.
                    <br />
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="sercard">
              <Card.Img variant="top" src={EyeBrow} className="cardServImg" />
              <Card.Body>
                <Card.Title>EYEBROWS</Card.Title>
                <Card.Text>
                  <p className="carCon">
                    <strong>Microblading</strong> - Microblading is a
                    semi-permanent cosmetic procedure that uses fine needles to
                    create hair-like strokes, enhancing and shaping the
                    eyebrows. The result is natural-looking, fuller eyebrows
                    that can last up to two years with proper care.
                    <br />
                    <strong>Microblading</strong> - Microshading is a
                    semi-permanent cosmetic procedure that uses a stippling
                    technique to create a soft, powdered effect, mimicking the
                    look of filled-in brows. This method provides a more
                    defined, fuller appearance that can last up to two years
                    with proper maintenance.
                    <br />
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComponent;
