import React from "react";
import MainNav from "../components/MainNav";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import Itineraries from "../components/city/Itineraries";
import Card from "react-bootstrap/Card";
import CitySection from "../components/city/CitySection";
import ActivitiesSection from "../components/city/ActivitiesSection";

export default class City extends React.Component {
  constructor() {
    super();
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
        <CitySection city={city} />
        <Itineraries />
        
        <Footer />
      </>
    );
  }
}
