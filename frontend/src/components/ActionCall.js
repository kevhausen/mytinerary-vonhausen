import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Ballon from "../assets/hot-air-balloon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActionCall = () => {
  return (
    <div className="d-flex action-call-container align-items-end p-3">
      <Container className="action-call d-flex p-4 col-6">
        <Row className="w-100">
          <Col>
            <div className="d-flex flex-column align-items-center me-4 hero-mytinerary">
              <img src={Ballon} alt="Ballon Logo" className="ballon" />
              <h2 className="text-light">MyTinerary</h2>
            </div>
          </Col>
          <Col xs={5}>
            <figure className="text-center align-self-center me-4">
              <blockquote className="blockquote">
                <p className="display-6">Find your perfect trip!</p>
              </blockquote>
              <figcaption className="blockquote-footer text-dark">
                designed by insiders who know and love their cities!
              </figcaption>
            </figure>
          </Col>
    
          <Col className="p-0">
            <div className="d-flex w-100 h-100 justify-content-around flex-column">
              <Link to="/cities">
                <button className="white-button w-100">
                  View Destinations
                </button>
              </Link>

              <Link to="/">
                <button className="transparent-button w-100">More Info</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActionCall;
