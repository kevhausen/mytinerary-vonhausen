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
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions.js";

class City extends React.Component {
  componentDidMount() {
      console.log('COMPONENT: SE MONTA CITY CON ID' + this.props.params.id.toString())
      this.props.getCity(this.props.params.id.toString())
    //   aqui tengo que hacer una funcion para obtener todos los itinerarios que tengan una ciudad con la id de params, primero voy a cargar unos itinerarios
  }

  render() {
    const city = this.props.city;
    console.log("COMPONENT CITY: tengo esta ciudad")
    console.log(city)
    return (
      <>
        <CitySection city={city} />
        <Itineraries id={this.props.params.id.toString()} />
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      city: state.citiesReducer.city,
    };
  };
  
  const mapDispatchToProps = {
    getCity: citiesActions.getCity
  };

export default connect(mapStateToProps, mapDispatchToProps)(City);
