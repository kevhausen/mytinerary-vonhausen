import React from "react";
import MainNav from "../components/MainNav";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import Itineraries from "../components/Itineraries";
import Card from "react-bootstrap/Card";

export default class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: { name: "", country: "", image: "", description: "", id: "" },
    };
  }
  componentDidMount() {
    console.log(this.props.params.id.toString());
    fetch("http://localhost:4000/api/cities/" + this.props.params.id.toString())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ city: data.response.city });
      });
  }

  render() {
    const city = this.state.city;
    return (
      <>
        <Container fluid className="citySection">
          <MainNav />
          <Container className="d-flex flex-column align-items-center p-4 justify-content-between">
            <Container className="d-flex justify-content-around p-4 mb-4 rounded">
              {/* <img src={city.image} alt={city.name} className="city-image" />
              <div className="d-flex flex-column justify-content-center text-light" >
                  <h2>{city.name}, {city.country}</h2>
                  <p>{city.description}</p>
              </div> */}
              {/* <Card key={city._id} className="col-12 col-md-5 col-lg-5 col-xl-3 col-sm-12 p-3 m-2 bg-main-dark text-light">
            <Card.Img variant="top" src={city.image} />
            <Card.Body>
              <Card.Title className="fw-bold">{city.name}</Card.Title>
              <Card.Text>{city.description}</Card.Text>
            </Card.Body>
          </Card> */}
              <Card key={city._id} className="bg-dark text-white">
                <Card.Img src={city.image} alt={city.name} />
                <Card.ImgOverlay>
                  <Card.Title className="text-shadow fw-bold">{city.name}</Card.Title>
                  <Card.Text className="text-shadow">
                  {city.description}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Container>
            <Link to="/cities">
              <Button className="itinerary-button btn-light btn">
                Back to Cities
              </Button>
            </Link>
          </Container>
          <Itineraries />
        </Container>
        <Footer />
      </>
    );
  }
}
