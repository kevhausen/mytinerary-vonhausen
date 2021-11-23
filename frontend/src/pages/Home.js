import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import FirstSection from "../components/FirstSection";
import CarrouselSection from "../components/CarrouselSection";
import FeaturesSection from "../components/FeaturesSection";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <FirstSection />
        <FeaturesSection />
        <AboutUs />
        <CarrouselSection />
        <Footer />
      </>
    );
  }
}
