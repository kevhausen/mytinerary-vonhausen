import React from "react";
import MultipleRows from '../components/MultipleRows';
import MainNav from '../components/MainNav';
import ActionCall from "../components/ActionCall";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import FirstSection from "../components/FirstSection";


export default class Home extends React.Component {
    render(){
        return(
            <>
                <FirstSection />
                <AboutUs />
                <MultipleRows />
                <Footer />

            </>
        )
    }
}