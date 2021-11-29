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
    fetch("http://localhost:4000/api/cities/" + this.props.params.id.toString())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
              <Card>
                <Card.Img variant="top" src={city.image} />
                <Card.Body className="bg-main">
                  <Card.Text className="text-light">
                    {city.name}, {city.country}
                  </Card.Text>
                </Card.Body>
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
