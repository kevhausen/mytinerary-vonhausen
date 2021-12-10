import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions.js";
import MessageType from "./MessageType";

function CitiesPack(props) {
  const searchRef = useRef();
  const { getCities, setLoad } = props;

  useEffect(() => {
    setLoad();
    getCities();
  }, [getCities, setLoad]);

  function handleFocusScroll() {
    searchRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const searchCity = (e) => {
    props.setFilter(props.auxiliar, e.target.value.toLowerCase().trim());
    handleFocusScroll();
  };

  return (
    <>
      <div className="citiesSection">
        <MainNav />
        <Container className="d-flex search-tool-container align-items-center justify-content-end p-5 flex-column">
          <h2
            ref={searchRef}
            className="text-light display-2 search-title text-center"
          >
            Search for your next destination
          </h2>
          <div className="d-flex ">
            <div className="input-group mb-3 input-group-lg">
              <input
                type="text"
                size="50"
                onChange={searchCity}
                className="form-control"
                placeholder="Example: Santiago"
                aria-label="Recipient's for city search"
                aria-describedby="button-addon2"
                onClick={handleFocusScroll}
              />
              <button className="btn" type="button" id="button-addon2">
                Search
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Container
        fluid
        className="d-flex flex-wrap justify-content-center cities-pack-section"
      >
        {props.cities.length ? (
          props.cities.map((city) => (
            <Card
              key={city._id}
              className="col-12 col-md-5 col-lg-5 col-xl-3 col-sm-12 p-3 m-2 bg-main-dark text-light"
            >
              <Card.Img variant="top" src={city.image} />
              <Card.Body>
                <Card.Title className="fw-bold">
                  {city.name}, {city.country}
                </Card.Title>
                <Card.Text className="h20">{city.description}</Card.Text>
                <Link to={`/cities/${city._id}`}>
                  <Button className="itinerary-button" variant="light">
                    Check Itinerary
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <MessageType
            type={props.isLoading ? "load" : "error"}
            message={
              props.isLoading
                ? "Loading"
                : "No city or country match the searched word. Please try again."
            }
          />
        )}
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,
    isLoading: state.citiesReducer.isLoading,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getAllCities,
  setFilter: citiesActions.setFilter,
  setLoad: citiesActions.setLoad,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPack);
