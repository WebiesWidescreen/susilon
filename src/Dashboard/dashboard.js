import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ScrollSpy from "react-ui-scrollspy";
import Silder1 from "../assets/Sild1.JPG";
import Silder2 from "../assets/Sild2.JPG";
import Silder3 from "../assets/Sild3.JPG";
import Silder4 from "../assets/Sild4.JPG";
import Logo from "../assets/logoSus.png";
import "./dashboard.css";
import SalonComponent from "../Salon/salon";
import ServicesComponent from "../Services/services";
import ModalClip from "../assets/model-clipped.png";
import AwardsComponent from "../Awards/awards";
import TeamComponent from "../Team/team";
import PricingComponent from "../Pricing/pricing";
import ModalClip2 from "../assets/model-clipped-2.png";
import PromotionsComponent from "../Promotions/promotions";
import GalleryComponent from "../Gallery/gallery";

const DashboardScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Carousel fade indicators={false} id="home">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Silder1}
            alt="First slide"
            height={1000}
          />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
            <h2 className="headCouTxt">
              <span className="spanCou">BLISS</span> BEAUTY
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Silder2}
            alt="First slide"
            height={1000}
          />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
            <h2 className="headCouTxt">
              <span className="spanCou">GLAM</span> GLOW
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Silder3}
            alt="First slide"
            height={1000}
          />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
            <h2 className="headCouTxt">
              <span className="spanCou">LUXE</span> LUSH
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Silder4}
            alt="First slide"
            height={1000}
          />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Navbar expand="lg" className="navBarSty" bg="dark" data-bs-theme="dark">
        <Container className="navCen">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="underline" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link href="#home">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#salon">SALON</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#services">SERVICES</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#awards">AWARDS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#pricing">PRICING</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#promotions">PROMOTIONS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#gallery">GALLERY</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-6">CONTACT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-7">BLOG</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ScrollSpy>
        <SalonComponent />
        <ServicesComponent />
        {/* carrer opportunity start */}
        <div className="carMainCon">
          <div className="carSubCon">
            <div className="carHeadCon">
              <h3 className="carHeadTxt">CAREER OPPORTUNITIES</h3>
            </div>
            <div className="carParCon">
              <p className="carParTxt">
                Interested in becoming the part of our great team, <br />{" "}
                <a className="carParLinTxt" href="#contact">
                  Contact us
                </a>{" "}
                today to get the opportunity.
              </p>
            </div>
          </div>
        </div>
        {/* carrer opportunity end */}
        {/* parallax-1 start */}
        <div id="parallax-1" className="carMainPara">
          <div className="carSubPara">
            <div className="carQuote">
              <div className="carContPara">
                <div className="carImgMain">
                  <div>
                    <img src={ModalClip} className="carimageClip" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* parallax-1 end */}
        <AwardsComponent />
        {/* parallax-2 start */}
        <div id="parallax-2" className="carMainPara2">
          <div className="quoteWrap">
            <div className="quote">
              <div className="containerPara2">
                <ul className="ulPara2">
                  <li>
                    <div className="statItem">
                      <div className="statInfo">
                        <h3>67,965</h3>
                        <p>Monthly</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="statItem">
                      <div className="statInfo">
                        <h3>1,976</h3>
                        <p>Satisfied</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="statItem">
                      <div className="statInfo">
                        <h3>4,879</h3>
                        <p>Over All</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* parallax-2 end */}
        <TeamComponent />
        {/* parallax-3 start */}
        <div id="parallax-3" className="carMainPara3">
          <div className="quoteWrap">
            <div className="quote">
              <div className="containerPara2"></div>
            </div>
          </div>
        </div>
        {/* parallax-3 end */}
        <PricingComponent />
        {/* parallax-4 start */}
        <div id="parallax-4" className="carMainPara4">
          <div className="carSubPara">
            <div className="carQuote">
              <div className="carContPara">
                <div className="carImgMain">
                  <div>
                    <img src={ModalClip2} className="carimageClip" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* parallax-4 end */}
        <PromotionsComponent />
        {/* parallax-5 start */}
        <div id="parallax-5" className="carMainPara5">
          <div className="quoteWrap">
            <div className="quote">
              <div className="containerPara2">
                <h3 className="parallax5Head">
                  <span className="large">CREATIVE.</span>
                  <span className="largeBold">ARTISTIC.</span>
                  <span className="large">PASSIONATE.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* parallax-5 end */}
        <GalleryComponent />
      </ScrollSpy>
    </div>
  );
};

export default DashboardScreen;
