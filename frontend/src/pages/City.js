import React from "react";
import Footer from "../components/Footer";
import Itineraries from "../components/city/Itineraries";
import CitySection from "../components/city/CitySection";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions.js";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.props.setLoad();
    
  }
  componentDidMount() {
    
    this.props.getCity(this.props.params.id.toString());
  }



  render() {
    const city = this.props.city;
    return (
      <>
        <CitySection city={city} isLoading={this.props.isLoading} />
        <Itineraries cityId={this.props.params.id.toString()} />
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    city: state.citiesReducer.city,
    isLoading: state.citiesReducer.isLoading,
  };
};

const mapDispatchToProps = {
  getCity: citiesActions.getCity,
  setLoad: citiesActions.setLoad,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
