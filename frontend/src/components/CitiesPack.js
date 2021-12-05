import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import ErrorIcon from "../assets/error.png";
import Gear from "../assets/gear.png"
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions.js";

function CitiesPack(props) {
    const [isLoad,setLoad] = useState(true)
  let array = props.cities;
  const searchRef = useRef();
  console.log(array)
  console.log(isLoad)

  useEffect(() => {
    props.getCities();
  }, []);

  if(array.length!==0 && isLoad===true){
      setLoad(false)
  }

  

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
        {
    (array.length ? (
          array.map((city) => (
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
          <Container className="d-flex justify-content-center align-items-center flex-column flex-md-row">
            <img
              className= "me-2 error-icon pos-2"
              id={isLoad && "gear"}
              width="50"
              src={isLoad? Gear : ErrorIcon}
              alt="error icon"
            />
            <h3 className="text-light text-center">
            {isLoad ?  "Loading" : "No city or country match searched word. Please try again."} 
            </h3>
          </Container>
        ))  
        }
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,
  };
};

const mapDispatchToProps = {
  getCities: citiesActions.getAllCities,
  setFilter: citiesActions.setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPack);
