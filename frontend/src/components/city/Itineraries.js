import Container from "react-bootstrap/esm/Container";
import User from "../../assets/user-img.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LikeComponent from "./Like";
import ActivitiesSection from "./ActivitiesSection";

function Itineraries() {
  function dolarQuantity() {
    const price = 5;
    return Array.from({ length: price });
  }

  return (
    <Container
      fluid
      className="itinerarySection d-flex align-items-center justify-content-center flex-column p-1"
    >
      {/* esto se generaria con un map */}
      <Container>
        <Container className="bg-main-light rounded d-flex flex-column align-items-center p-5">
          <h2 className="text-light fw-bold text-center">Fun in Tokyo</h2>
          <p className="text-light text-center">#hola #city #muela</p>
          <Container>
            <Row>
              <Col className="col-3"></Col>
              <Col xs={6}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <img src={User} alt="user" className="user-img rounded border border-light" />
                  <h3 className="text-light text-center publisher-name">Kevin von Hausen</h3>
                </div>
              </Col>
              <Col className="d-flex flex-column align-items-center justify-content-center like-container">
                <LikeComponent />
              </Col>
            </Row>
          </Container>
          <div className="d-flex w-100 justify-content-around flex-column flex-sm-row align-items-center">
            <div className="white-hover m-1 d-flex col-10 col-sm-4 col-lg-4 col-xl-4 col-md-4 text-center border border-white rounded justify-content-center align-items-center flex-column">
              <p className="text-light m-0 fw-bold">Price</p>
              <div>
                {dolarQuantity().map(() => (
                  <span>💵</span>
                ))}
              </div>
            </div>
            <div className="white-hover d-flex col-10 col-sm-4 col-lg-4 col-xl-4 col-md-4 border border-white rounded justify-content-center align-items-center flex-column">
              <p className="text-light m-0 fw-bold">Duration:</p>
              <span className="text-light">6 Days</span>
            </div>
          </div>
        </Container>
        <ActivitiesSection />
      </Container>
      {/* esto anterior se generaria por map */}
    </Container>
  );
}

export default Itineraries;
