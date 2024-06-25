import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
// import Silder1 from "../assets/Sild1.JPG";
// import Silder2 from "../assets/Sild2.JPG";
// import Silder3 from "../assets/Sild3.JPG";
// import Silder4 from "../assets/Sild4.JPG";
import Logo from "../assets/logoSus.png";
import "./dashboard.css";
import Icon from "../Icons/icons";
import SalonComponent from "../Salon/salon";
import ServicesComponent from "../Services/services";
import ModalClip from "../assets/model-clipped.png";
import AwardsComponent from "../Awards/awards";
import TeamComponent from "../Team/team";
import PricingComponent from "../Pricing/pricing";
import ModalClip2 from "../assets/model-clipped-2.png";
import PromotionsComponent from "../Promotions/promotions";
import GalleryComponent from "../Gallery/gallery";
import ContactComponent from "../Contact/contact";

const DashboardScreen = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    const mybutton = document.getElementById("btnBackToTop");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div>
      <Button id="btnBackToTop" onClick={() => topFunction()}>
        ▲
      </Button>
      <Carousel fade indicators={false} id="home">
        <Carousel.Item interval={3000}>
          {/* <img
            className="d-block w-100"
            src={Silder1}
            alt="First slide"
            height={1000}
          /> */}
          <div className="caroImg" />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
            <h2 className="headCouTxt">
              <span className="spanCou">BLISS</span> BEAUTY
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          {/* <img
            className="d-block w-100"
            src={Silder2}
            alt="Second slide"
            height={1000}
          /> */}
          <div className="caroImg2" />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
            <h2 className="headCouTxt">
              <span className="spanCou">GLAM</span> GLOW
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          {/* <img
            className="d-block w-100"
            src={Silder3}
            alt="Third slide"
            height={1000}
          /> */}
          <div className="caroImg3" />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
            <h2 className="headCouTxt">
              <span className="spanCou">LUXE</span> LUSH
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          {/* <img
            className="d-block w-100"
            src={Silder4}
            alt="Fourth slide"
            height={1000}
          /> */}
          <div className="caroImg4" />
          <Carousel.Caption>
            <img src={Logo} alt="Logo" className="logoImg" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Navbar expand="lg" className="navBarSty" bg="dark" data-bs-theme="dark">
        <Container className="navCen">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              variant="underline"
              defaultActiveKey="#home"
              style={{ textAlign: "justify" }}
            >
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
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="link-7">BLOG</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link
                  href="https://www.youtube.com/@SusilonTheBeautyArtStudio"
                  target="_blank"
                >
                  <Icon name="youtube" size="19px" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://www.facebook.com/profile.php?id=61552032444391&paipv=0&eav=AfZyI73EJUA5I27WLtHae7dGhOw_TiVGr0R5Brk5wD_CkeWVVmu-yXgoKK9FGSD1n9Y&_rdr"
                  target="_blank"
                >
                  <Icon name="facebook" size="19px" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://www.instagram.com/susilonthebeautyartstudio/?igsh=MXhtaWM2MnIxbTFhaQ%3D%3D"
                  target="_blank"
                >
                  <Icon name="instagram" size="19px" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <SalonComponent />
        <ServicesComponent />
        {/* carrer opportunity start */}
        <div className="carMainCon">
          <div className="carSubCon">
            <div className="row">
              <div className="col-12 carHeadCon">
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
                    <img
                      src={ModalClip}
                      alt="ModalClip"
                      className="carimageClip"
                    />
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
                  <div className="par4ImgClip">
                    <img
                      src={ModalClip2}
                      alt="ModalClip2"
                      className="carimageClip"
                    />
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
                <h3 className="parallax6Head">
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
        {/* parallax-6 start */}
        <div id="parallax-6" className="carMainPara6">
          <div className="quoteWrap">
            <div className="quote">
              <div className="containerPara2">
                <h3 className="parallax6Head">
                  <span className="largeBold">How can I</span>
                  <span className="large">control my life</span>
                  <br />
                  <span className="medium">when I can't</span>
                  <span className="mediumBold">control my hair?</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* parallax-6 start */}
        <ContactComponent />
      </div>
    </div>
  );
};

export default DashboardScreen;
