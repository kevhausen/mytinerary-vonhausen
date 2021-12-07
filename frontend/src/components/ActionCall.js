import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Ballon from "../assets/hot-air-balloon.png";
import Col from "react-bootstrap/Col";

const ActionCall = () => {
  return (
    <div className="d-flex action-call-container p-3 flex-column">
      <Container className="action-call d-flex col-10 justify-content-center align-content-center col-lg-9 col-md-9 col-xl-9 col-sm-9 ">
        <div className="d-flex flex-column align-items-center hero-mytinerary mb-4">
          <img src={Ballon} alt="Ballon Logo" className="ballon" />
          <h2 className="text-light title-hero">MyTinerary</h2>
          <figure className="text-center align-self-center">
            <blockquote className="blockquote">
              <p className="display-6 text-info">Find your perfect trip!</p>
            </blockquote>
            <figcaption className="blockquote-footer text-info">
              designed by insiders who know and love their cities!
            </figcaption>
          </figure>
        </div>
      </Container>
      <Container className="action-button-container col-10 p-2 col-lg-6 col-md-7 col-xl-6 col-sm-7">
        <Col>
          <h2 className="text-center display-6 text-light search-title">
            I AM ON VACATION
          </h2>
        </Col>
        <Col>
          <p className="text-center text-light ">Book your destination here</p>
        </Col>
        <Col className="p-0">
          <div className="d-flex justify-content-center">
            <Link to="/cities">
              <button className="white-button ">BOOK NOW</button>
            </Link>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default ActionCall;
