import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
// import Video from "../assets/ourTeamVideo.mp4";
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";
import "./team.css";

const TeamComponent = () => {
  return (
    <div id="team">
      <Container className="awardsCon">
        <Row xs={1} md={2} className="g-4">
          <Col xs={12} className="awardsTxtCon">
            <h1 className="awardsTxtHead">
              <span className="awardsTxtSpan">OUR</span> TEAM
            </h1>
            <div className="awardsIntroTxt">
              <p className="awardsPara">
                <span className="awardHighLight">
                  Susilon The Beauty Art Salon
                </span>{" "}
                : Where beauty meets artistry, transforming every visit into a
                unique, luxurious experience. Our expert team delivers
                personalized care and cutting-edge treatments to enhance your
                natural beauty.
              </p>
            </div>
          </Col>
          <Col>
            <Card className="sercardAward">
              <Card.Body>
                <div className="teamVideocontainer">
                  {/* <iframe
                    title="The finest touch at Frasada Salon and Day Spa"
                    src={Video}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  ></iframe> */}
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wpreXkw2CkM?si=3e-qitB2gM2sn85_"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="sercardTeam">
              <Card.Body>
                <Carousel controls={false}>
                  <Carousel.Item>
                    <img
                      className="teamCourImgResp"
                      src={Team1}
                      alt="First slide"
                    />
                    <div className="caroTxtTeam">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Hendrerit dictum praesent porta, purus eget sagittis
                        imperdiet, nulla mi ullamcorper metus, id hendrerit
                        metus diam vitae est.
                      </p>
                      <cite>Joanna -</cite>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="teamCourImgResp"
                      src={Team2}
                      alt="Second slide"
                    />
                    <div className="caroTxtTeam">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Hendrerit dictum praesent porta, purus eget sagittis
                        imperdiet, nulla mi ullamcorper metus, id hendrerit
                        metus diam vitae est.
                      </p>
                      <cite>Alberta -</cite>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="teamCourImgResp"
                      src={Team3}
                      alt="Third slide"
                    />
                    <div className="caroTxtTeam">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Hendrerit dictum praesent porta, purus eget sagittis
                        imperdiet, nulla mi ullamcorper metus, id hendrerit
                        metus diam vitae est.
                      </p>
                      <cite>Jessica -</cite>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamComponent;
