import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LikeComponent from "./Like";
import ActivitiesSection from "./ActivitiesSection";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Dolar from "../../assets/dollar.png";
import MessageType from "../MessageType";
import useConstructor from "../../utilities/useConstructor";

function Itineraries(props) {
  useConstructor(() => {
    props.setLoad();
  });

  function dolarQuantity(price) {
    return Array.from({ length: price });
  }
  function formatHashtags(array) {
    let arrayAux = array.map((e) => (e.charAt(0).includes("#") ? e : "#" + e));
    let stringedArray = arrayAux.toString().split(",").join(" ");
    return stringedArray;
  }
  const { getItinerariesByCity, cityId, setLoad } = props;

  useEffect(() => {
    getItinerariesByCity(cityId);
  }, [getItinerariesByCity, cityId, setLoad]);

  return (
    <Container
      fluid
      className="itinerarySection d-flex align-items-center justify-content-center flex-column p-1"
    >
      {props.isLoading ? (
        <MessageType type="load" message="Loading" />
      ) : props.itineraries.length ? (
        props.itineraries.map((itinerary) => (
          <Container key={itinerary._id} className="mb-5">
            <Container
              className="bg-main-light rounded d-flex flex-column align-items-center p-5 itinerary-card"
              style={{
                backgroundImage: `url(${itinerary.itineraryImage})`,
              }}
            >
              <h2 className="text-light fw-bold text-center">
                {itinerary.itineraryName}
              </h2>
              <p className="text-warning text-center">
                {formatHashtags(itinerary.hashtags)}
              </p>
              <Container>
                <Row>
                  <Col className="col-3"></Col>
                  <Col xs={6}>
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <img
                        src={itinerary.userImage}
                        alt="user"
                        className="user-img rounded border border-light"
                      />
                      <h3 className="text-light text-center publisher-name">
                        {itinerary.userName}
                      </h3>
                    </div>
                  </Col>
                  <Col className="d-flex flex-column align-items-center justify-content-center like-container">
                    <LikeComponent likes={itinerary.likes} />
                  </Col>
                </Row>
              </Container>
              <div className="d-flex w-100 justify-content-around flex-column flex-sm-row align-items-center">
                <div className="white-hover m-1 d-flex col-10 col-sm-4 col-lg-4 col-xl-4 col-md-4 text-center border border-white rounded justify-content-center align-items-center flex-column">
                  <p className="text-light m-0 fw-bold">Price:</p>
                  <div>
                    {dolarQuantity(itinerary.price).map((_, index) => (
                      <img key={index} src={Dolar} alt="dolar" id="dolar" />
                    ))}
                  </div>
                </div>
                <div className="white-hover d-flex col-10 col-sm-4 col-lg-4 col-xl-4 col-md-4 border border-white rounded justify-content-center align-items-center flex-column">
                  <p className="text-light m-0 fw-bold">Duration:</p>
                  <span className="text-light">{itinerary.duration} Hours</span>
                </div>
              </div>
            </Container>
            {/* al ActivitySection se le pasaria por props, sus comments */}
            <ActivitiesSection />
          </Container>
        ))
      ) : (
        <MessageType
          type="error"
          message="No Itineraries for this city yet! Try with another one please."
        />
      )}
      <div className="d-grid gap-2">
        <Link to="/cities">
          <Button className="back-button mt-5" size="lg">
            Back to Cities
          </Button>
        </Link>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itinerariesReducer.itineraries,
    isLoading: state.itinerariesReducer.isLoading,
  };
};

const mapDispatchToProps = {
  getItinerariesByCity: itinerariesActions.getItinerariesByCity,
  setLoad: itinerariesActions.setLoad,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
