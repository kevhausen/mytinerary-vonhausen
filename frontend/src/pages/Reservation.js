import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

export default class Reservation extends React.Component {
  render() {
    return (
        <>
      <Container fluid className="min-vh-100 bg-info">
        <MainNav />
        
      </Container>
      <Footer />
      </>
    );
  }
}
