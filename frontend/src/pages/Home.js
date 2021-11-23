import React from "react";
import MultipleRows from '../components/MultipleRows';
import MainNav from '../components/MainNav';
import ActionCall from "../components/ActionCall";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import FirstSection from "../components/FirstSection";
import SingleSlide from "../components/SingleSlide";
import Carrousel from "../components/Carrousel";
import CarrouselSection from "../components/CarrouselSection";


export default class Home extends React.Component {
    render(){
        return(
            <>
                <FirstSection />
                <AboutUs />
                <CarrouselSection />
                <Footer />

            </>
        )
    }
}