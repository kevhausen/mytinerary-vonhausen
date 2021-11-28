import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Facebook from "../assets/social_icons/facebook.png";
import Instagram from "../assets/social_icons/instagram.png";
import Twitter from "../assets/social_icons/twitter.png";
import Pinterest from "../assets/social_icons/pinterest.png";
import Youtube from "../assets/social_icons/youtube.png";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";

function Footer() {
  return (
    <Container fluid className="text-white footer-container">
      <Row className="footer-row">
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <img className="footer-logo" src={Logo} alt="Logo" />
          <p>MyTinerary &copy; 2021. All rights reserved.</p>
        </Col>
        <Col className="d-flex justify-content-center flex-column">
          <Nav className="d-flex justify-content-center container align-items-center flex-column p-0">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/">
              About
            </Link>
            <Link className="nav-link" to="/cities">
              Cities
            </Link>

            <Link className="nav-link" to="/reservation">
              Reservation
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="p-2">
            <Col>
              <Image className="social-icon" src={Facebook}></Image>
            </Col>
            <Col>
              <Image className="social-icon" src={Instagram}></Image>
            </Col>
            <Col>
              <Image className="social-icon" src={Youtube}></Image>
            </Col>
            <Col>
              <Image className="social-icon" src={Twitter}></Image>
            </Col>
            <Col>
              <Image className="social-icon" src={Pinterest}></Image>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
