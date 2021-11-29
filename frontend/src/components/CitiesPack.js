import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import ErrorIcon from "../assets/error.png"

function CitiesPack() {
  const [array, setArray] = useState([{ name: "", country: "", image: "", description: "", _id:"" }]);
  const [stringFilter, setFilterString] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setArray(data.response.cities))
      .catch();
  }, []);
  const searchRef = useRef()
  function handleFocusScroll(){
    searchRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const searchCity = (e) => {
    setFilterString(e.target.value.toLowerCase().trim());
    handleFocusScroll()
  };
  let filteredArray = array.filter(
    (city) =>
      city.name.toLowerCase().startsWith(stringFilter) ||
      city.country.toLowerCase().startsWith(stringFilter)
  );

  

  return (
    <>
      <div className="citiesSection">
        <MainNav />
        <Container className="d-flex search-tool-container align-items-center justify-content-end p-5 flex-column">
            
          <h2 ref={searchRef} className="text-light display-2 search-title text-center">
            Search for your next destination
          </h2>
          <div className="d-flex ">
            <div className="input-group mb-3 input-group-lg">
              <input
                type="text"
                size="50"
                onChange={searchCity}
                className="form-control"
                placeholder="Ex: Santiago"
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
      <Container fluid className="d-flex flex-wrap justify-content-center cities-pack-section">
        { filteredArray.length ? 
        
        filteredArray.map((city) => (
          <Card key={city.id} className="col-12 col-md-5 col-lg-5 col-xl-3 col-sm-12 p-3 m-2 bg-main-dark text-light">
            <Card.Img variant="top" src={city.image} />
            <Card.Body>
              <Card.Title className="fw-bold">{city.name}</Card.Title>
              <Card.Text>{city.description}</Card.Text>
              {/* {city.name.split(" ").join("-").toLowerCase()}_${city.country.toLowerCase()} */}
              <Link to={`/cities/${city._id}`}>
                <Button className="itinerary-button" variant="light">Check Itinerary</Button>
              </Link>
            </Card.Body>
          </Card>
        )) : 
        <Container className="d-flex justify-content-center align-items-center flex-column flex-md-row">
            <img className="me-2 error-icon pos-2" width="50" src={ErrorIcon} alt="error icon" />
            <h3 className="text-light text-center">No city or country match searched word. Please try again.</h3>
        </Container>
    
    
    }
      </Container>
    </>
  );
}

export default CitiesPack;
