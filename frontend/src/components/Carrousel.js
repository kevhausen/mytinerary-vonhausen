import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import CarrouselPack from "./CarrouselPack.js";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions.js";
import Container from "react-bootstrap/esm/Container";
import Gear from "../assets/gear.png";

function Carrousel(props) {
  const [isLoad, setLoad] = useState(true);
  const imagesPerSlide = 4;
  let currentIndex = 0;
  let array = props.store.carrouselCities;
  if (array.length !== 0 && isLoad === true) {
    setLoad(false);
  }

  useEffect(() => {
    props.getCities();
  }, []);

  const handleSelect = (_, e) => {
    if (e !== undefined) {
      e.target.className.includes("next")
        ? currentIndex >= array.length
          ? (currentIndex = 0)
          : (currentIndex = currentIndex + imagesPerSlide)
        : currentIndex <= 0
        ? (currentIndex = array.length - imagesPerSlide)
        : (currentIndex = currentIndex - imagesPerSlide);
    }
  };

  return (
    <>
      {" "}
      {isLoad ? (
        <Container className="d-flex justify-content-center align-items-center flex-column flex-md-row">
          <img
            className="me-2 error-icon pos-2"
            id="gear"
            width="50"
            src={Gear}
            alt="error icon"
          />
          <h3 className="text-light text-center">Loading</h3>
        </Container>
      ) : (
        <Carousel interval={3000} onSelect={handleSelect}>
          {Array.from({ length: array.length / imagesPerSlide }).map(
            (_, mapIndex) => (
              <Carousel.Item key={mapIndex} className="p-2">
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                  <CarrouselPack
                    list={array}
                    index={currentIndex}
                    imgPerSlide={imagesPerSlide}
                  />
                  <span className="invisible">
                    {(currentIndex += imagesPerSlide)}
                  </span>
                </Row>
              </Carousel.Item>
            )
          )}
        </Carousel>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    store: state.citiesReducer,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
};
export default connect(mapStateToProps, mapDispatchToProps)(Carrousel);
